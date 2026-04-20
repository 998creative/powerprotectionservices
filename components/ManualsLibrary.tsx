"use client";

import { useMemo, useState } from "react";
import type { ManualEntry } from "@/lib/manuals";

type ManualsLibraryProps = {
  manuals: ManualEntry[];
};

const ALL_BRANDS_LABEL = "All Brands";
const ALL_TYPES_LABEL = "All Types";

const normalize = (value: string) => value.toLowerCase().trim();

const formatCount = (count: number) =>
  `${count} manual${count === 1 ? "" : "s"} found`;

const matchesSearchQuery = (manual: ManualEntry, query: string) => {
  if (!query) {
    return true;
  }

  const searchable = normalize(`${manual.title} ${manual.brand} ${manual.category}`);
  return searchable.includes(query);
};

const ManualsLibrary = ({ manuals }: ManualsLibraryProps) => {
  const [selectedBrand, setSelectedBrand] = useState<string>(ALL_BRANDS_LABEL);
  const [selectedType, setSelectedType] = useState<string>(ALL_TYPES_LABEL);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = useMemo(() => normalize(searchQuery), [searchQuery]);

  const manualsMatchingQuery = useMemo(() => {
    return manuals.filter((manual) => matchesSearchQuery(manual, normalizedQuery));
  }, [manuals, normalizedQuery]);

  const brandOptions = useMemo(() => {
    return Array.from(new Set(manuals.map((manual) => manual.brand))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, [manuals]);

  const typeOptions = useMemo(() => {
    const brandScopedManuals = manualsMatchingQuery.filter((manual) =>
      selectedBrand === ALL_BRANDS_LABEL ? true : manual.brand === selectedBrand
    );

    return Array.from(
      new Set(brandScopedManuals.map((manual) => manual.category))
    ).sort((a, b) => a.localeCompare(b));
  }, [manualsMatchingQuery, selectedBrand]);

  const filteredManuals = useMemo(() => {
    return manualsMatchingQuery.filter((manual) => {
      const matchesBrand =
        selectedBrand === ALL_BRANDS_LABEL || manual.brand === selectedBrand;
      const matchesType =
        selectedType === ALL_TYPES_LABEL || manual.category === selectedType;

      if (!matchesBrand || !matchesType) {
        return false;
      }

      return true;
    });
  }, [manualsMatchingQuery, selectedBrand, selectedType]);

  const hasActiveFilters =
    searchQuery.length > 0 ||
    selectedBrand !== ALL_BRANDS_LABEL ||
    selectedType !== ALL_TYPES_LABEL;

  const groupedManuals = useMemo(() => {
    const groupedByBrand = new Map<string, Map<string, ManualEntry[]>>();

    for (const manual of filteredManuals) {
      if (!groupedByBrand.has(manual.brand)) {
        groupedByBrand.set(manual.brand, new Map());
      }

      const categories = groupedByBrand.get(manual.brand);
      if (!categories) {
        continue;
      }

      if (!categories.has(manual.category)) {
        categories.set(manual.category, []);
      }

      categories.get(manual.category)?.push(manual);
    }

    return Array.from(groupedByBrand.entries())
      .sort(([brandA], [brandB]) => brandA.localeCompare(brandB))
      .map(([brand, categories]) => ({
        brand,
        categories: Array.from(categories.entries())
          .sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB))
          .map(([category, entries]) => ({
            category,
            entries: [...entries].sort((a, b) => a.title.localeCompare(b.title)),
          })),
      }));
  }, [filteredManuals]);

  return (
    <div>
      <div className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-5 sm:p-6">
        <div className="mb-2 flex items-end justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6287]">
            Search Manuals
          </p>
          <p className="text-sm font-medium text-[#4f6287]">
            {formatCount(filteredManuals.length)}
          </p>
        </div>

        <label htmlFor="manual-search" className="block">
          <input
            id="manual-search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            type="search"
            placeholder="Search by model, brand, or category"
            className="h-12 w-full rounded-md border border-[#c9d5ea] bg-white px-4 text-sm text-[#0b1324] outline-none transition-colors placeholder:text-[#7083a9] focus:border-[#0066ff]"
          />
        </label>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6287]">
              Filter by Brand
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedBrand(ALL_BRANDS_LABEL);
                  setSelectedType(ALL_TYPES_LABEL);
                }}
                className={`h-12 rounded-md border px-4 text-sm font-semibold transition-colors ${
                  selectedBrand === ALL_BRANDS_LABEL
                    ? "border-[#0066ff] bg-[#0066ff] text-white"
                    : "border-[#ccd8ed] bg-white text-[#41547a] hover:border-[#0066ff] hover:text-[#0b1324]"
                }`}
              >
                {ALL_BRANDS_LABEL}
              </button>
              {brandOptions.map((brand) => {
                const isActive = selectedBrand === brand;

                return (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => {
                      setSelectedBrand(brand);
                      setSelectedType(ALL_TYPES_LABEL);
                    }}
                    className={`h-12 rounded-md border px-4 text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-[#0066ff] bg-[#0066ff] text-white"
                        : "border-[#ccd8ed] bg-white text-[#41547a] hover:border-[#0066ff] hover:text-[#0b1324]"
                    }`}
                  >
                    {brand}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6287]">
              Filter by Type
            </p>
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
              <select
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                className="h-12 w-full rounded-md border border-[#c9d5ea] bg-white px-4 text-sm font-semibold text-[#41547a] outline-none transition-colors focus:border-[#0066ff]"
              >
                <option value={ALL_TYPES_LABEL}>{ALL_TYPES_LABEL}</option>
                {typeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBrand(ALL_BRANDS_LABEL);
                  setSelectedType(ALL_TYPES_LABEL);
                }}
                disabled={!hasActiveFilters}
                className="h-12 rounded-md border border-[#8d98ae] px-4 text-sm font-semibold text-[#435271] transition-colors hover:border-[#0066ff] hover:text-[#0066ff] disabled:cursor-not-allowed disabled:border-[#ccd8ed] disabled:text-[#9aa8c3]"
              >
                Clear all filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {filteredManuals.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-[#d6dff0] bg-white p-8 text-center">
          <p className="text-[#41547a]">
            No manuals match your current search, brand, and type filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedBrand(ALL_BRANDS_LABEL);
              setSelectedType(ALL_TYPES_LABEL);
            }}
            className="mt-4 inline-flex items-center rounded-md border border-[#8d98ae] px-3 py-2 text-sm font-semibold text-[#435271] transition-colors hover:border-[#0066ff] hover:text-[#0066ff]"
          >
            Clear all filters
          </button>
        </div>
      ) : null}

      {groupedManuals.map((brandGroup) => (
        <section key={brandGroup.brand} className="mt-8 first:mt-8">
          <h3 className="text-3xl font-semibold tracking-tight text-[#0b1324]">
            {brandGroup.brand}
          </h3>

          {brandGroup.categories.map((categoryGroup) => (
            <div key={`${brandGroup.brand}-${categoryGroup.category}`} className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6287]">
                {categoryGroup.category}
              </p>

              <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {categoryGroup.entries.map((manual) => (
                  <article
                    key={manual.href}
                    className="flex h-full flex-col rounded-xl border border-[#d6dff0] bg-white p-5"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe9fa] text-[#0066ff]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-5 w-5 stroke-current"
                      >
                        <path
                          d="M7 3.8h7.8l4.2 4.2V20a1.8 1.8 0 0 1-1.8 1.8H7A1.8 1.8 0 0 1 5.2 20V5.6A1.8 1.8 0 0 1 7 3.8Z"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.8 3.8V8h4.2M8.6 12.5h6.8M8.6 16h6.8"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <h4 className="mt-4 text-xl font-semibold tracking-tight text-[#0b1324]">
                      {manual.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#4f6287]">
                      {manual.brand} | {manual.category}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      <a
                        href={manual.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md border border-[#8d98ae] px-3 py-2 text-sm font-semibold text-[#435271] transition-colors hover:border-[#0066ff] hover:text-[#0066ff]"
                      >
                        Open PDF
                      </a>
                      <a
                        href={manual.href}
                        download
                        className="inline-flex items-center rounded-md bg-[#0066ff] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0052cc]"
                      >
                        Download
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default ManualsLibrary;
