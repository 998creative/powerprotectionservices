import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const faqItems = [
  {
    question: "How quickly can you respond if we lose power or have a UPS fault?",
    answer:
      "Response times depend on your support agreement and location, but we prioritise critical incidents and can provide rapid triage, remote guidance, and on-site attendance where needed.",
  },
  {
    question: "Do you only support systems you originally installed?",
    answer:
      "No. We regularly support existing UPS and backup power systems, including legacy installations and multi-brand estates, whether or not we completed the original install.",
  },
  {
    question: "Can you help us choose the right UPS size before purchase?",
    answer:
      "Yes. We can review your load profile, runtime targets, growth plans, and site constraints to recommend suitable UPS options with the right capacity and resilience.",
  },
  {
    question: "Do you offer planned maintenance contracts?",
    answer:
      "Yes. We provide planned maintenance options that include routine inspections, health checks, reporting, and proactive recommendations to reduce unplanned downtime.",
  },
  {
    question: "Can you supply and replace UPS batteries?",
    answer:
      "Yes. We offer battery testing, replacement, and post-install validation to help maintain runtime performance and avoid battery-related failure risks.",
  },
  {
    question: "Where do you provide service coverage?",
    answer:
      "We support sites across the UK. If you share your location and requirements, we can confirm coverage and next steps quickly.",
  },
];

export const metadata: Metadata = {
  title: "FAQs | Power Protection Services",
  description:
    "Frequently asked questions about UPS installation, manuals, maintenance, battery replacement, and support services.",
};

export default function FaqsPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pps-stock-images/hero-datacenter-brett-4508751.jpg"
            alt="Server room and power infrastructure"
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
                Frequently Asked Questions
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Quick answers on support, manuals, maintenance, and UPS services.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/support" className="btn-primary">
                Support & Aftercare Services
              </Link>
              <Link href="/manuals" className="btn-secondary">
                Browse Manuals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-[#EEF3FB] py-20 text-[#0c1220] md:py-28">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#cad7ee]" />

        <div className="relative z-10 mx-auto max-w-[1352px] px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">FAQs</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            Common questions
          </h2>

          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-[#d6dff0] bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[#0b1324]">
                  <span>{item.question}</span>
                  <span className="text-2xl leading-none text-[#0066ff] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#41547a]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
