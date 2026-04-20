"use client";

import { useEffect, useState } from "react";

export type AftercareServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  icon: "support" | "maintenance" | "health" | "generator" | "battery" | "repair" | "relocation";
};

type AftercareServicesSliderProps = {
  services: AftercareServiceItem[];
};

const getCardsPerView = (width: number) => {
  if (width < 768) {
    return 1;
  }

  if (width < 1200) {
    return 2;
  }

  return 3;
};

const AftercareServicesSlider = ({ services }: AftercareServicesSliderProps) => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxStep = Math.max(0, services.length - cardsPerView);
  const activeStep = Math.min(currentStep, maxStep);
  const progressWidth = `${((activeStep + 1) / (maxStep + 1)) * 100}%`;

  const AftercareIcon = ({ icon }: { icon: AftercareServiceItem["icon"] }) => {
    const iconClass = "h-6 w-6 stroke-current";

    switch (icon) {
      case "support":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <path
              d="M7.8 10.4a4.2 4.2 0 1 1 8.4 0v4.1a2.7 2.7 0 0 1-2.7 2.7h-3a2.7 2.7 0 0 1-2.7-2.7v-4.1Z"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M5.8 11.4v2.5M18.2 11.4v2.5M12 7.2v-1.4"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "maintenance":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <path
              d="M14.6 5.3a4.2 4.2 0 0 0-5.4 5.4l-4.7 4.7a1.8 1.8 0 1 0 2.5 2.5l4.7-4.7a4.2 4.2 0 0 0 5.4-5.4l-2.3 2.3-2.3-.4-.4-2.3 2.5-2.1Z"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "health":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" strokeWidth="1.8" />
            <path d="M12 8v8M8 12h8" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "generator":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <rect x="3.8" y="7.2" width="16.4" height="9.6" rx="2.2" strokeWidth="1.8" />
            <path
              d="M7.4 11.9h4.6M16.8 9.8v4.2M14.7 11.9h4.2M5.8 17.2v2M18.2 17.2v2"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        );
      case "battery":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <rect x="4" y="7" width="15.8" height="10" rx="2.2" strokeWidth="1.8" />
            <path d="M19.8 10h1.8v4h-1.8M10 9.5v5M7.5 12h5" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "repair":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <path
              d="M6 8.8h12M9.4 5.8h5.2M8.6 8.8l.9 9.2h5l.9-9.2"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10.2 13.2h3.6" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "relocation":
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
            <rect x="4.2" y="7.2" width="8.8" height="8.8" rx="1.6" strokeWidth="1.8" />
            <path
              d="M11.8 12h8M16.2 8.6 19.8 12l-3.6 3.4"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-10 flex items-center gap-6">
        <div className="h-1.5 flex-1 rounded-full bg-[#d7deeb]">
          <div
            className="h-full rounded-full bg-[#0066ff] transition-all duration-300"
            style={{ width: progressWidth }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous aftercare services"
            disabled={activeStep === 0}
            onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f]/45 text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next aftercare services"
            disabled={activeStep === maxStep}
            onClick={() => setCurrentStep((step) => Math.min(maxStep, step + 1))}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f] text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-visible pb-1 pl-6 md:pl-[max(1.5rem,calc((100vw-78rem)/2+1.5rem))]">
        <div className="overflow-visible">
          <div
            className="flex items-stretch transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(activeStep * 100) / cardsPerView}%)`,
            }}
          >
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative flex shrink-0 self-stretch px-3 pb-6"
                style={{ flexBasis: `${100 / cardsPerView}%` }}
              >
                <div className="flex h-full min-h-[29rem] flex-col rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 shadow-[0_14px_35px_rgba(15,25,45,0.1)] transition-all group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(0,102,255,0.16)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0ff] text-[#0066ff]">
                    <AftercareIcon icon={service.icon} />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0b1324]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#41547a]">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#41547a]">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066ff]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AftercareServicesSlider;
