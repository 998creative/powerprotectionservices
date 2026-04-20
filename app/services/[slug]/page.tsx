import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "../../../lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Power Protection Services",
    };
  }

  return {
    title: `${service.title} | Power Protection Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#EEF3FB] text-[#0b1324]">
      <section className="relative overflow-hidden border-b border-[#d9e1f1] bg-[#0c162b] text-white">
        <div className="mx-auto flex min-h-[32rem] max-w-[1352px] items-center px-6 py-16 sm:min-h-[36rem] sm:py-20 lg:min-h-[40rem]">
          <div>
            <div className="max-w-4xl border-l-4 border-[#0066ff] pl-6 sm:pl-8">
              <p className="mb-6 text-sm uppercase tracking-[0.22em] text-zinc-400">
                SERVICES
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {service.heroTitle}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
                {service.description}
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact#contact" className="btn-primary">
                Request a Free Quote
              </Link>
              <Link href="/#services" className="btn-secondary">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9e1f1]">
        <div className="mx-auto max-w-[1352px] px-6 py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What this service includes
          </h2>
          <ul className="mt-7 grid gap-4 md:grid-cols-3">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[#d6dff0] bg-[#f8fbff] p-5 text-base leading-relaxed text-[#41547a]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
