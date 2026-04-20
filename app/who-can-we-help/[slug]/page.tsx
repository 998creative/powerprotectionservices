import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhoWeHelpSectorSlider, {
  type WhoWeHelpSector,
} from "@/components/WhoWeHelpSectorSlider";
import {
  getWhoCanWeHelpEntryBySlug,
  whoCanWeHelpEntries,
  type WhoCanWeHelpEntry,
} from "../../../lib/whoCanWeHelp";

type WhoCanWeHelpPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return whoCanWeHelpEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: WhoCanWeHelpPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWhoCanWeHelpEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Sector Not Found | Power Protection Services",
    };
  }

  return {
    title: `${entry.title} | Power Protection Services`,
    description: entry.heroDescription,
  };
}

const buildWhoWeHelpSectorCard = (entry: WhoCanWeHelpEntry): WhoWeHelpSector => {
  const listBlock = entry.blocks.find((block) => block.type === "list");
  const fallbackHighlights = [
    "Independent advice matched to your operational requirements",
    "Turnkey delivery from survey and design through installation",
    "Long-term support and maintenance for critical uptime",
  ];

  return {
    title: entry.title,
    description: entry.heroDescription,
    imageSrc: entry.imageSrc,
    imageAlt: entry.imageAlt,
    href: `/who-can-we-help/${entry.slug}/`,
    highlights: listBlock ? listBlock.items.slice(0, 3) : fallbackHighlights,
  };
};

export default async function WhoCanWeHelpSectorPage({
  params,
}: WhoCanWeHelpPageProps) {
  const { slug } = await params;
  const entry = getWhoCanWeHelpEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const otherSectors = whoCanWeHelpEntries
    .filter((sector) => sector.slug !== entry.slug)
    .map(buildWhoWeHelpSectorCard);

  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src={entry.imageSrc}
            alt={entry.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-[-14rem] z-20 h-[28rem] w-[28rem] rounded-full border border-white/10 opacity-60" />

        <div className="relative z-30 mx-auto flex h-full max-w-[1352px] items-center px-6 py-16 sm:py-20">
          <div>
            <div className="max-w-4xl border-l-4 border-[#0066ff] pl-6 sm:pl-8">
              <p className="mb-6 text-sm uppercase tracking-[0.22em] text-zinc-400">
                WHO WE HELP
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {entry.heroTitle}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                {entry.heroDescription}
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact#contact" className="btn-primary">
                Speak to Our Team
              </Link>
              <Link href="/who-we-help" className="btn-secondary">
                Back to Who We Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9e1f1] bg-[#EEF3FB] py-20 md:py-28">
        <div className="mx-auto max-w-[1352px] px-6 text-[#0c1220]">
          <article className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 sm:p-8">
            {entry.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="mt-8 text-3xl font-semibold tracking-tight text-[#0b1324] first:mt-0 sm:text-4xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={`list-${index}`} className="mt-4 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#41547a]">
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066ff]"
                        />
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`${block.text}-${index}`}
                  className="mt-5 text-lg leading-relaxed text-[#41547a] first:mt-0"
                >
                  {block.text}
                </p>
              );
            })}
          </article>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-white py-20 text-[#0c1220] md:py-28">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#cad7ee]" />

        <div className="relative z-10 mx-auto max-w-[1352px] px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
            Other Sectors We Serve
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            Explore other sectors we support
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#41547a]">
            We also support a range of other organisations with practical UPS and
            backup power solutions tailored to their environments.
          </p>

          <WhoWeHelpSectorSlider sectors={otherSectors} />
        </div>
      </section>
    </main>
  );
}
