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
    <section id="services" className="border-b border-white/10 bg-[#f4f7fb] text-[#0c1220]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">Core Services</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          What We Do
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-[#3f4e6e]">
          Practical, end-to-end power protection services designed around your uptime
          targets and compliance requirements.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#d9e1f2] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#0066ff]/50 hover:shadow-[0_24px_50px_rgba(0,102,255,0.13)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon-placeholder.svg"
                alt={`Placeholder icon for ${service.title}`}
                className="h-10 w-10"
              />
              <h3 className="mt-6 text-xl font-semibold text-[#0b1324]">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4c5f84]">
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
