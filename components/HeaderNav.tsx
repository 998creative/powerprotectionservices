"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services, type ServiceIcon } from "../lib/services";
import { whoCanWeHelpEntries } from "../lib/whoCanWeHelp";

const navItems = [
  { label: "About Us", href: "/about" },
];

const supportCards = [
  {
    title: "Support & Aftercare Services",
    description: "Ongoing technical support, maintenance, and rapid assistance.",
    href: "/support",
    icon: "support",
  },
  {
    title: "Manuals",
    description: "Search and download equipment manuals by brand and model.",
    href: "/manuals",
    icon: "manuals",
  },
  {
    title: "FAQs",
    description: "Answers to common questions on UPS systems, service, and support.",
    href: "/faqs",
    icon: "faq",
  },
  {
    title: "Blog",
    description: "Articles, guides, and updates. Coming soon.",
    icon: "blog",
    isDisabled: true,
  },
] as const;

const serviceCards = services;
const sectorCards = whoCanWeHelpEntries.map((entry) => ({
  title: entry.title,
  description: entry.heroDescription,
  imageSrc: entry.imageSrc,
  href: `/who-can-we-help/${entry.slug}/`,
}));

type ServiceIconType = ServiceIcon;

const ServiceIcon = ({ icon }: { icon: ServiceIconType }) => {
  const iconClass = "h-7 w-7 stroke-white";

  switch (icon) {
    case "survey":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="5.2" y="4.2" width="13.6" height="15.6" rx="2" strokeWidth="1.8" />
          <path d="m8.4 10.3 1.8 1.8 3.6-3.6M8.4 15.2h7.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "lighting":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M12 4.2a5.1 5.1 0 0 0-3.6 8.7c.9.9 1.4 2 1.4 3.2h4.4c0-1.2.5-2.3 1.4-3.2A5.1 5.1 0 0 0 12 4.2Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9.7 18.2h4.6M10.4 20.1h3.2" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "installation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M12 3.8 5.2 7.2v9.6l6.8 3.4 6.8-3.4V7.2L12 3.8Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 8.4v7.2M8.6 10.1 12 12l3.4-1.9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "relocation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="4.2" y="7.2" width="8.8" height="8.8" rx="1.6" strokeWidth="1.8" />
          <path d="M11.8 12h8M16.2 8.6 19.8 12l-3.6 3.4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "fullInstallation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M12 3.8 5.4 6.8v5.7c0 4 2.9 6.8 6.6 7.8 3.7-1 6.6-3.8 6.6-7.8V6.8L12 3.8Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="m9.1 12.1 2 2 3.8-3.8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "battery":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="4" y="7" width="15.8" height="10" rx="2.2" strokeWidth="1.8" />
          <path d="M19.8 10h1.8v4h-1.8M10 9.5v5M7.5 12h5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

const SectorIcon = () => {
  const iconClass = "h-7 w-7 stroke-white";

  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <rect x="4.5" y="4.8" width="15" height="14.4" rx="2" strokeWidth="1.8" />
      <path d="M9 8.4h.01M12 8.4h.01M15 8.4h.01M9 12h.01M12 12h.01M15 12h.01M9 15.6h6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

type SupportIconType = (typeof supportCards)[number]["icon"];

const SupportIcon = ({ icon }: { icon: SupportIconType }) => {
  const iconClass = "h-7 w-7 stroke-white";

  switch (icon) {
    case "support":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path
            d="M6.8 12.7v2.7a2 2 0 0 0 2 2h.9M17.2 12.7v2.7a2 2 0 0 1-2 2h-.9M7 12a5 5 0 0 1 10 0"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="4.8" y="11.5" width="2.8" height="4.8" rx="1.2" strokeWidth="1.8" />
          <rect x="16.4" y="11.5" width="2.8" height="4.8" rx="1.2" strokeWidth="1.8" />
        </svg>
      );
    case "manuals":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path
            d="M7 3.8h7.8l4.2 4.2V20a1.8 1.8 0 0 1-1.8 1.8H7A1.8 1.8 0 0 1 5.2 20V5.6A1.8 1.8 0 0 1 7 3.8Z"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M14.8 3.8V8h4.2M8.6 12.5h6.8M8.6 16h6.8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "faq":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path
            d="M8.2 9.2a3.8 3.8 0 1 1 6.1 3c-.8.6-1.4 1-1.7 1.8M12 17h.01"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="8.2" strokeWidth="1.8" />
        </svg>
      );
    case "blog":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path
            d="M6 5.2h8.8L18.8 9v9.8a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8V7a1.8 1.8 0 0 1 1.8-1.8Z"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M14.8 5.2V9h4M8.1 12h6.8M8.1 15.4h6.8"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isSectorsMenuOpen, setIsSectorsMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);
  const servicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectorsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const supportCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearServicesCloseTimeout = () => {
    if (!servicesCloseTimeoutRef.current) {
      return;
    }
    clearTimeout(servicesCloseTimeoutRef.current);
    servicesCloseTimeoutRef.current = null;
  };

  const clearSectorsCloseTimeout = () => {
    if (!sectorsCloseTimeoutRef.current) {
      return;
    }
    clearTimeout(sectorsCloseTimeoutRef.current);
    sectorsCloseTimeoutRef.current = null;
  };

  const clearSupportCloseTimeout = () => {
    if (!supportCloseTimeoutRef.current) {
      return;
    }
    clearTimeout(supportCloseTimeoutRef.current);
    supportCloseTimeoutRef.current = null;
  };

  const openServicesMenu = () => {
    clearServicesCloseTimeout();
    clearSectorsCloseTimeout();
    clearSupportCloseTimeout();
    setIsSectorsMenuOpen(false);
    setIsSupportMenuOpen(false);
    setIsServicesMenuOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    clearServicesCloseTimeout();
    servicesCloseTimeoutRef.current = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 220);
  };

  const openSectorsMenu = () => {
    clearSectorsCloseTimeout();
    clearServicesCloseTimeout();
    clearSupportCloseTimeout();
    setIsServicesMenuOpen(false);
    setIsSupportMenuOpen(false);
    setIsSectorsMenuOpen(true);
  };

  const scheduleCloseSectorsMenu = () => {
    clearSectorsCloseTimeout();
    sectorsCloseTimeoutRef.current = setTimeout(() => {
      setIsSectorsMenuOpen(false);
    }, 220);
  };

  const openSupportMenu = () => {
    clearSupportCloseTimeout();
    clearServicesCloseTimeout();
    clearSectorsCloseTimeout();
    setIsServicesMenuOpen(false);
    setIsSectorsMenuOpen(false);
    setIsSupportMenuOpen(true);
  };

  const scheduleCloseSupportMenu = () => {
    clearSupportCloseTimeout();
    supportCloseTimeoutRef.current = setTimeout(() => {
      setIsSupportMenuOpen(false);
    }, 220);
  };

  const closeMenu = () => {
    clearServicesCloseTimeout();
    clearSectorsCloseTimeout();
    clearSupportCloseTimeout();
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileSectorsOpen(false);
    setIsMobileSupportOpen(false);
    setIsServicesMenuOpen(false);
    setIsSectorsMenuOpen(false);
    setIsSupportMenuOpen(false);
  };

  useEffect(() => {
    return () => {
      clearServicesCloseTimeout();
      clearSectorsCloseTimeout();
      clearSupportCloseTimeout();
    };
  }, []);

  return (
    <>
      {isServicesMenuOpen || isSectorsMenuOpen || isSupportMenuOpen ? (
        <button
          type="button"
          aria-label="Close menus"
          onClick={() => {
            setIsServicesMenuOpen(false);
            setIsSectorsMenuOpen(false);
            setIsSupportMenuOpen(false);
          }}
          className="fixed inset-0 z-50 hidden animate-[overlay-fade-in_240ms_ease-out] bg-black/45 lg:block"
        />
      ) : null}

      <header className="sticky inset-x-0 top-0 z-[60] border-b border-white/10 bg-[#090b12]">
        <div className="mx-auto flex h-20 w-full max-w-[1352px] items-center justify-between px-6">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-3"
            onClick={closeMenu}
          >
            <Image
              src="/PPS%20LOGO.svg"
              alt="Power Protection Services"
              width={556}
              height={469}
              className="h-16 w-auto object-contain object-left sm:h-20 lg:h-24"
              priority
            />
            <span className="hidden whitespace-nowrap text-sm font-semibold tracking-[0.08em] text-white sm:inline">
              Power Protection Services
            </span>
          </Link>

          <nav className="relative hidden items-center gap-8 lg:flex">
            <div
              className="relative"
              onMouseEnter={openServicesMenu}
              onMouseLeave={scheduleCloseServicesMenu}
            >
              <button
                type="button"
                aria-expanded={isServicesMenuOpen}
                onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                onFocus={openServicesMenu}
                className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
              >
                Services
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isServicesMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {isServicesMenuOpen ? (
                <div
                  className="fixed left-1/2 top-20 z-[70] w-[calc(100vw-3rem)] max-w-[1352px] -translate-x-1/2 animate-[overlay-fade-in_240ms_ease-out] pt-3"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={scheduleCloseServicesMenu}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0d111b] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                        Services
                      </p>
                      <Link
                        href="/#services"
                        onClick={closeMenu}
                        className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0066ff] transition-colors hover:text-white"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {serviceCards.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeMenu}
                          className="group overflow-hidden rounded-md border border-white/10 bg-[#121b2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/70 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)]"
                        >
                          <div className="relative h-40 w-full">
                            <Image
                              src={service.imageSrc}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[#020611]/72" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 group-focus-visible:-translate-y-2 group-focus-visible:opacity-0">
                              <ServiceIcon icon={service.icon} />
                              <h3 className="text-sm font-semibold leading-snug text-zinc-100">
                                {service.title}
                              </h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                              <p className="max-w-[15.5rem] text-sm leading-relaxed text-zinc-100">
                                {service.description}
                              </p>
                              <span className="inline-flex items-center rounded-md border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[#0066ff] hover:bg-[#0066ff] group-hover:border-[#0066ff] group-hover:bg-[#0066ff]">
                                Learn More
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className="relative"
              onMouseEnter={openSectorsMenu}
              onMouseLeave={scheduleCloseSectorsMenu}
            >
              <button
                type="button"
                aria-expanded={isSectorsMenuOpen}
                onClick={() => setIsSectorsMenuOpen((prev) => !prev)}
                onFocus={openSectorsMenu}
                className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
              >
                Who We Help
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isSectorsMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {isSectorsMenuOpen ? (
                <div
                  className="fixed left-1/2 top-20 z-[70] w-[calc(100vw-3rem)] max-w-[1352px] -translate-x-1/2 animate-[overlay-fade-in_240ms_ease-out] pt-3"
                  onMouseEnter={openSectorsMenu}
                  onMouseLeave={scheduleCloseSectorsMenu}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0d111b] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                        Sectors
                      </p>
                      <Link
                        href="/who-we-help"
                        onClick={closeMenu}
                        className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0066ff] transition-colors hover:text-white"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {sectorCards.map((sector) => (
                        <Link
                          key={sector.title}
                          href={sector.href}
                          onClick={closeMenu}
                          className="group overflow-hidden rounded-md border border-white/10 bg-[#121b2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/70 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)]"
                        >
                          <div className="relative h-40 w-full">
                            <Image
                              src={sector.imageSrc}
                              alt={sector.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[#020611]/72" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 group-focus-visible:-translate-y-2 group-focus-visible:opacity-0">
                              <SectorIcon />
                              <h3 className="text-sm font-semibold leading-snug text-zinc-100">
                                {sector.title}
                              </h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                              <p className="max-w-[15.5rem] text-sm leading-relaxed text-zinc-100">
                                {sector.description}
                              </p>
                              <span className="inline-flex items-center rounded-md border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[#0066ff] hover:bg-[#0066ff] group-hover:border-[#0066ff] group-hover:bg-[#0066ff]">
                                Learn More
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className="relative"
              onMouseEnter={openSupportMenu}
              onMouseLeave={scheduleCloseSupportMenu}
            >
              <button
                type="button"
                aria-expanded={isSupportMenuOpen}
                onClick={() => setIsSupportMenuOpen((prev) => !prev)}
                onFocus={openSupportMenu}
                className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
              >
                Support
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isSupportMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {isSupportMenuOpen ? (
                <div
                  className="fixed left-1/2 top-20 z-[70] w-[calc(100vw-3rem)] max-w-[1352px] -translate-x-1/2 animate-[overlay-fade-in_240ms_ease-out] pt-3"
                  onMouseEnter={openSupportMenu}
                  onMouseLeave={scheduleCloseSupportMenu}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0d111b] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                        Support
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {supportCards.map((item) =>
                        !("href" in item) ? (
                          <div
                            key={item.title}
                            className="group overflow-hidden rounded-md border border-white/10 bg-[#121b2a]/70 opacity-80"
                          >
                            <div className="relative h-40 w-full">
                              <div className="pointer-events-none absolute inset-0 bg-[#020611]/72" />
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
                                <SupportIcon icon={item.icon} />
                                <h3 className="text-sm font-semibold leading-snug text-zinc-100">
                                  {item.title}
                                </h3>
                                <span className="inline-flex items-center rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-200">
                                  Coming Soon
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={closeMenu}
                            className="group overflow-hidden rounded-md border border-white/10 bg-[#121b2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/70 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)]"
                          >
                            <div className="relative h-40 w-full">
                              <div className="pointer-events-none absolute inset-0 bg-[#020611]/72" />
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 group-focus-visible:-translate-y-2 group-focus-visible:opacity-0">
                                <SupportIcon icon={item.icon} />
                                <h3 className="text-sm font-semibold leading-snug text-zinc-100">
                                  {item.title}
                                </h3>
                              </div>
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                                <p className="max-w-[15.5rem] text-sm leading-relaxed text-zinc-100">
                                  {item.description}
                                </p>
                                <span className="inline-flex items-center rounded-md border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[#0066ff] hover:bg-[#0066ff] group-hover:border-[#0066ff] group-hover:bg-[#0066ff]">
                                  Learn More
                                </span>
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
            <Link href="/contact#contact" className="btn-primary">
              Book a Free Site Survey
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-zinc-200 transition-colors hover:border-white/40 hover:text-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6 stroke-current"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-[#090b12] px-6 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              <button
                type="button"
                aria-expanded={isMobileServicesOpen}
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                className="inline-flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                Services
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              {isMobileServicesOpen ? (
                <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {serviceCards.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={closeMenu}
                      className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                aria-expanded={isMobileSectorsOpen}
                onClick={() => setIsMobileSectorsOpen((prev) => !prev)}
                className="inline-flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                Who We Help
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isMobileSectorsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              {isMobileSectorsOpen ? (
                <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  <Link
                    href="/who-we-help"
                    onClick={closeMenu}
                    className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    View all sectors
                  </Link>
                  {sectorCards.map((sector) => (
                    <Link
                      key={sector.title}
                      href={sector.href}
                      onClick={closeMenu}
                      className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {sector.title}
                    </Link>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                aria-expanded={isMobileSupportOpen}
                onClick={() => setIsMobileSupportOpen((prev) => !prev)}
                className="inline-flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                Support
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isMobileSupportOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              {isMobileSupportOpen ? (
                <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {supportCards.map((item) => (
                    !("href" in item) ? (
                      <span
                        key={item.title}
                        className="rounded-md px-3 py-2 text-sm text-zinc-500"
                      >
                        {item.title} (Coming soon)
                      </span>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeMenu}
                        className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.title}
                      </Link>
                    )
                  ))}
                </div>
              ) : null}

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="/contact" onClick={closeMenu} className="btn-secondary w-full">
                Contact
              </Link>
              <Link
                href="/contact#contact"
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                Book a Free Site Survey
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default HeaderNav;
