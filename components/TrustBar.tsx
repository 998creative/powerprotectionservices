const brands = [
  "APC",
  "Riello",
  "Borri",
  "Eaton Powerware",
  "Emerson Network Power",
];

const TrustBar = () => {
  return (
    <section className="relative z-20 -mt-16 border-b border-white/10 bg-transparent pb-14 sm:-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#10141f]/95 px-5 py-6 shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:px-8 sm:py-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-400">
            Independent suppliers of all major manufacturers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-md border border-white/10 bg-[#0d111a] px-3 py-3 text-center text-sm font-semibold text-zinc-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
