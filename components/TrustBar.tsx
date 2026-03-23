const brands = [
  "APC",
  "Riello",
  "Borri",
  "Eaton Powerware",
  "Emerson Network Power",
];

const TrustBar = () => {
  return (
    <section className="border-b border-white/10 bg-[#0d1016]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Independent suppliers of all major manufacturers
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-md border border-white/10 bg-[#111622] px-3 py-3 text-center text-sm font-semibold text-zinc-200"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
