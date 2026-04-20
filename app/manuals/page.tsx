import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ManualsLibrary from "@/components/ManualsLibrary";
import { manuals } from "@/lib/manuals";

export const metadata: Metadata = {
  title: "Manuals | Power Protection Services",
  description:
    "Browse, search and download UPS and power equipment manuals by brand and model.",
};

export default function ManualsPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pps-stock/hero-datacenter-blue.jpg"
            alt="Server room infrastructure supporting critical power systems"
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
                MANUALS
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Manuals Library
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                Search by brand or model and download the manuals you need fast.
                All files are hosted locally for reliable access.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact#contact" className="btn-primary">
                Need Help Choosing a Manual?
              </Link>
              <Link href="/support" className="btn-secondary">
                Support & Aftercare Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-[#EEF3FB] py-20 text-[#0c1220] md:py-28">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#cad7ee]" />

        <div className="relative z-10 mx-auto max-w-[1352px] px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
            Manuals Database
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            Browse by brand, then search by model
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#41547a]">
            Use the search and filters to quickly find the exact PDF you need,
            then open or download it instantly.
          </p>

          <div className="mt-10">
            <ManualsLibrary manuals={manuals} />
          </div>
        </div>
      </section>
    </main>
  );
}
