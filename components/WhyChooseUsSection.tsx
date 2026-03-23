type FeatureItem = {
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: "Independent",
    description:
      "We work with all major manufacturers, so our advice is always unbiased.",
  },
  {
    title: "Experienced",
    description:
      "Decades of experience in UPS, power protection and critical infrastructure.",
  },
  {
    title: "Certified",
    description:
      "All installations meet NICEIC standards. Engineers are factory-trained and IEE qualified.",
  },
  {
    title: "Full Turnkey",
    description:
      "From initial survey to installation, commissioning, maintenance and support - one team, one point of contact.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="border-b border-white/10 bg-[#0d1016]">
      <div className="mx-auto max-w-6xl px-6 py-18 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Why Choose Us
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-white/10 bg-[#101522] p-6 transition-colors hover:border-[#0066ff]/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon-placeholder.svg"
                alt={`Placeholder icon for ${feature.title}`}
                className="h-10 w-10"
              />
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
