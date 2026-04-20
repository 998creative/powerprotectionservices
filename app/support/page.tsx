import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AftercareServicesSlider, {
  type AftercareServiceItem,
} from "@/components/AftercareServicesSlider";

const aftercareServices: AftercareServiceItem[] = [
  {
    title: "Technical Support",
    description:
      "Responsive troubleshooting and guidance to resolve faults quickly and reduce disruption.",
    bullets: [
      "Rapid fault triage for UPS and standby power systems",
      "Clear technical guidance for next-step resolution",
      "Support aimed at minimising downtime impact",
    ],
    icon: "support",
  },
  {
    title: "Maintenance Contracts",
    description:
      "Planned maintenance agreements for UPS and generators to keep systems reliable.",
    bullets: [
      "Scheduled preventive visits matched to your site risk profile",
      "Service records and reporting for operational visibility",
      "Flexible contract options for single or multi-site estates",
    ],
    icon: "maintenance",
  },
  {
    title: "System Health Checks",
    description:
      "Detailed health checks for UPS and generator systems with clear condition reporting.",
    bullets: [
      "Load, runtime and system condition assessment",
      "Early identification of wear, faults and risk points",
      "Prioritised recommendations for remediation planning",
    ],
    icon: "health",
  },
  {
    title: "Load Bank Testing",
    description:
      "Generator load bank testing to verify performance under real operating conditions.",
    bullets: [
      "Controlled test conditions to validate generator output",
      "Performance checks under realistic operating loads",
      "Documented results to support maintenance planning",
    ],
    icon: "generator",
  },
  {
    title: "Battery Replacement",
    description:
      "UPS battery testing and replacement to protect runtime performance and resilience.",
    bullets: [
      "Battery condition testing and lifecycle checks",
      "Planned and reactive replacement options",
      "Post-replacement validation for dependable autonomy",
    ],
    icon: "battery",
  },
  {
    title: "Repair Services",
    description:
      "Repair services for UPS and generators with practical recommendations on next steps.",
    bullets: [
      "Diagnosis and repair of common UPS and generator faults",
      "Practical repair-vs-replace guidance where needed",
      "Targeted remediation to restore reliable operation",
    ],
    icon: "repair",
  },
  {
    title: "Equipment Relocation",
    description:
      "Safe relocation support for temporary or permanent site moves and infrastructure changes.",
    bullets: [
      "Planned decommissioning and relocation sequencing",
      "Controlled transport and reinstallation support",
      "Commissioning checks after move completion",
    ],
    icon: "relocation",
  },
];

const warrantyPoints = [
  "Extended warranty options are available on selected models, with cover up to five years.",
  "Standard UK warranty typically covers non-consumable parts and labour when systems are operated within published guidelines.",
  "Batteries are consumable items and are normally covered by a one-year manufacturer warranty.",
];

export const metadata: Metadata = {
  title: "Support & Aftercare Services | Power Protection Services",
  description:
    "Technical support, warranty guidance, and long-term aftercare services for UPS and standby power systems.",
};

export default function SupportPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pps-stock-images/services-maintenance.jpg"
            alt="Engineer carrying out technical support on critical power equipment"
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
                SUPPORT
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Support &amp; Aftercare Services
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Ongoing technical support for UPS and standby power systems, from
                day-to-day troubleshooting to long-term maintenance planning.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="tel:01488685207" className="btn-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-2 h-4 w-4 shrink-0 stroke-current"
                >
                  <path
                    d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                Call 01488 685207
              </a>
              <Link href="/contact#contact" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-[#EEF3FB] py-20 text-[#0c1220] md:py-28">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#cad7ee]" />

        <div className="relative z-10 mx-auto grid max-w-[1352px] gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b1324] sm:text-4xl">
              Technical support you can actually reach
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#41547a]">
              Our team works closely with manufacturers and combines practical
              field experience with product-level support to help you resolve
              issues quickly and keep critical systems running.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#41547a]">
              We focus on long-term reliability, not one-off fixes. After
              installation and commissioning, we stay involved with proactive
              service and responsive guidance whenever you need us.
            </p>
          </article>

          <article className="rounded-2xl border border-[#d6dff0] bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
              Warranties
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1324] sm:text-4xl">
              Clear warranty support
            </h2>
            <ul className="mt-6 space-y-3">
              {warrantyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#41547a]">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066ff]"
                  />
                  <span className="text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-44 -top-44 h-[38rem] w-[38rem] rounded-full border border-[#dce6f5]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[20rem] w-[20rem] rounded-full border border-[#e7edf8]" />

        <div className="relative z-10 mx-auto max-w-[1352px] px-6 text-[#0c1220]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
            Aftercare Services
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            What our support includes
          </h2>

          <AftercareServicesSlider services={aftercareServices} />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0c162b] py-16">
        <div className="pointer-events-none absolute -right-20 -top-16 z-10 h-56 w-56 rounded-full border border-white/15" />

        <div className="relative z-20 mx-auto flex max-w-[1352px] flex-col gap-6 px-6 text-center sm:text-left md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need immediate support?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
              Tell us what system you have in place and what issue you&apos;re
              seeing. We&apos;ll help you plan the right next step quickly.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact" className="btn-primary">
              Request Support
            </Link>
            <a href="tel:01488685207" className="btn-secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mr-2 h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              01488 685207
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
