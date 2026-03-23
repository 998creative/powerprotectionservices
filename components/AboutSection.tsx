const AboutSection = () => {
  return (
    <section id="about" className="border-b border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-18 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Independent advice. No manufacturer bias.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Power Protection Experts is an independent distributor of UPS
            systems, batteries and standby generators. Because we work with all
            major manufacturers - not just one - we recommend what&apos;s right
            for your requirements, not what&apos;s right for our margins.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            Our customers include universities, hospitals, local councils, IT
            resellers and large corporate organisations.
          </p>
          <a
            href="https://onlitech.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex text-base font-semibold text-[#6fa7ff] transition-colors hover:text-[#9fc4ff]"
          >
            About us &rarr;
          </a>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0f1218] p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about-placeholder.svg"
            alt="Placeholder image for UPS and generator installation project"
            className="h-72 w-full rounded-lg object-cover sm:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
