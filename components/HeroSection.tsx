const HeroSection = () => {
  return (
    <section className="border-b border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-24 md:pb-32 md:pt-32">
        <p className="mb-6 text-sm uppercase tracking-[0.22em] text-zinc-400">
          Trading name of OnLiTECH Ltd
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Power Protection Experts
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          Independent UPS systems, batteries, generators and maintenance -
          keeping your critical infrastructure running.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[#0066ff] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-base font-semibold text-zinc-200 transition-colors hover:border-[#0066ff] hover:text-white"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
