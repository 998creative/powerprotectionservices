type ServiceItem = {
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "UPS Systems",
    description:
      "Supply and installation of uninterruptible power supply systems from all major manufacturers, sized for your load requirements.",
  },
  {
    title: "Batteries & Replacements",
    description:
      "Battery supply, testing and replacement for existing UPS systems. Health checks available for any installed system.",
  },
  {
    title: "Standby Generators",
    description:
      "Generator supply, installation and commissioning for sites that need extended backup power.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Tailored maintenance contracts with guaranteed response times, 24-hour monitoring and scheduled on-site visits.",
  },
  {
    title: "Site Surveys",
    description:
      "Free site surveys to assess your power protection requirements, space, logistics and installation needs.",
  },
  {
    title: "Full Installation",
    description:
      "Factory-trained engineers carry out full electrical installation, commissioning and certification to NICEIC standards.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-b border-white/10 bg-[#0d1016]">
      <div className="mx-auto max-w-6xl px-6 py-18 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What We Do
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-zinc-300">
          Practical, end-to-end power protection services designed around your
          uptime targets and compliance requirements.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-white/10 bg-[#101522] p-6 transition-colors hover:border-[#0066ff]/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon-placeholder.svg"
                alt={`Placeholder icon for ${service.title}`}
                className="h-10 w-10"
              />
              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
