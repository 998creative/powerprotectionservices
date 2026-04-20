import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const SOURCE_PAGE = "https://onlitech.co.uk/manuals/";
const PUBLIC_DIR = path.resolve("public/manuals-pdfs");
const MANIFEST_FILE = path.resolve("lib/manuals.ts");

const decodeHtml = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const stripTags = (value) => value.replace(/<[^>]+>/g, "").trim();

const slugify = (value, maxLength = 90) => {
  const base = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  if (!base) {
    return "manual";
  }

  return base.length > maxLength ? base.slice(0, maxLength).replace(/-+$/g, "") : base;
};

const toSafeUrl = (rawUrl) => {
  try {
    return new URL(rawUrl).toString();
  } catch {
    return encodeURI(rawUrl);
  }
};

const parseManuals = (html) => {
  const tokenRe = /<div class="manuals-(1|2|3)-trigger">([\s\S]*?)<\/div>/g;
  let currentBrand = "Other";
  let currentCategory = "General";
  const extracted = [];

  for (const match of html.matchAll(tokenRe)) {
    const level = match[1];
    const inner = match[2].trim();
    const linkMatch = inner.match(/^<a href="([^"]+\.pdf)">([\s\S]*?)<\/a>$/i);

    if (level === "1") {
      if (!linkMatch) {
        currentBrand = decodeHtml(stripTags(inner)) || "Other";
        currentCategory = "General";
      }
      continue;
    }

    if (level === "2") {
      if (linkMatch) {
        const sourceUrl = decodeHtml(linkMatch[1]).trim();
        const title = decodeHtml(stripTags(linkMatch[2])) || "Manual";
        extracted.push({
          brand: currentBrand,
          category: "General",
          title,
          sourceUrl,
        });
      } else {
        currentCategory = decodeHtml(stripTags(inner)) || "General";
      }
      continue;
    }

    if (level === "3" && linkMatch) {
      const sourceUrl = decodeHtml(linkMatch[1]).trim();
      const title = decodeHtml(stripTags(linkMatch[2])) || "Manual";
      extracted.push({
        brand: currentBrand,
        category: currentCategory,
        title,
        sourceUrl,
      });
    }
  }

  const seen = new Set();
  const unique = [];

  for (const item of extracted) {
    const key = item.sourceUrl.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(item);
  }

  return unique;
};

const downloadFile = async (sourceUrl, destinationPath) => {
  const response = await fetch(toSafeUrl(sourceUrl));

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  await fs.mkdir(path.dirname(destinationPath), { recursive: true });
  await fs.writeFile(destinationPath, bytes);
  return bytes.length;
};

const runWithConcurrency = async (tasks, concurrency = 8) => {
  let index = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (index < tasks.length) {
      const current = tasks[index++];
      await current();
    }
  });

  await Promise.all(workers);
};

const escapeTsString = (value) =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");

const buildManifestTs = (entries) => {
  const rows = entries
    .map(
      (entry) => `  {
    title: \`${escapeTsString(entry.title)}\`,
    brand: \`${escapeTsString(entry.brand)}\`,
    category: \`${escapeTsString(entry.category)}\`,
    href: \`${escapeTsString(entry.href)}\`,
    sourceUrl: \`${escapeTsString(entry.sourceUrl)}\`,
    isLocal: ${entry.isLocal ? "true" : "false"},
  },`
    )
    .join("\n");

  return `export type ManualEntry = {
  title: string;
  brand: string;
  category: string;
  href: string;
  sourceUrl: string;
  isLocal: boolean;
};

export const manuals: ManualEntry[] = [
${rows}
];

export const manualBrands = [
  "All Brands",
  ...Array.from(new Set(manuals.map((manual) => manual.brand))).sort((a, b) =>
    a.localeCompare(b)
  ),
];
`;
};

const main = async () => {
  const htmlResponse = await fetch(SOURCE_PAGE);
  if (!htmlResponse.ok) {
    throw new Error(`Failed to fetch manuals page: HTTP ${htmlResponse.status}`);
  }

  const html = await htmlResponse.text();
  const parsedEntries = parseManuals(html);

  await fs.mkdir(PUBLIC_DIR, { recursive: true });

  let downloadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  let downloadedBytes = 0;
  const failures = [];

  const enriched = parsedEntries.map((entry) => {
    const hash = crypto
      .createHash("sha1")
      .update(entry.sourceUrl.toLowerCase())
      .digest("hex")
      .slice(0, 8);

    const brandSlug = slugify(entry.brand, 40);
    const categorySlug = slugify(entry.category, 50);
    const titleSlug = slugify(entry.title, 72);
    const fileName = `${titleSlug}-${hash}.pdf`;
    const relativePath = path.posix.join(brandSlug, categorySlug, fileName);
    const localDiskPath = path.join(PUBLIC_DIR, relativePath);
    const localHref = `/manuals-pdfs/${relativePath}`;

    return {
      ...entry,
      localDiskPath,
      localHref,
      isLocal: false,
    };
  });

  const tasks = enriched.map((entry) => async () => {
    try {
      try {
        const existing = await fs.stat(entry.localDiskPath);
        if (existing.size > 0) {
          skippedCount += 1;
          entry.isLocal = true;
          return;
        }
      } catch {
        // File missing, continue to download.
      }

      const size = await downloadFile(entry.sourceUrl, entry.localDiskPath);
      downloadedCount += 1;
      downloadedBytes += size;
      entry.isLocal = true;
    } catch (error) {
      failedCount += 1;
      failures.push({
        sourceUrl: entry.sourceUrl,
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  });

  await runWithConcurrency(tasks, 8);

  const manifestEntries = enriched.map((entry) => ({
    title: entry.title,
    brand: entry.brand,
    category: entry.category,
    href: entry.isLocal ? entry.localHref : entry.sourceUrl,
    sourceUrl: entry.sourceUrl,
    isLocal: entry.isLocal,
  }));

  const manifestTs = buildManifestTs(manifestEntries);
  await fs.writeFile(MANIFEST_FILE, manifestTs, "utf8");

  if (failures.length > 0) {
    await fs.writeFile(
      path.resolve("manuals-download-failures.json"),
      JSON.stringify(failures, null, 2),
      "utf8"
    );
  }

  const totalSizeMb = (downloadedBytes / (1024 * 1024)).toFixed(2);
  console.log(`Parsed manuals: ${parsedEntries.length}`);
  console.log(`Downloaded: ${downloadedCount}`);
  console.log(`Skipped existing: ${skippedCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log(`Downloaded size: ${totalSizeMb} MB`);
};

await main();
