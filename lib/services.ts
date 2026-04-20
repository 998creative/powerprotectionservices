export type ServiceIcon =
  | "survey"
  | "lighting"
  | "installation"
  | "relocation"
  | "fullInstallation"
  | "battery";

export type Service = {
  title: string;
  heroTitle: string;
  slug: string;
  href: `/services/${string}/`;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: ServiceIcon;
  highlights: string[];
};

const buildServiceHref = (slug: string): `/services/${string}/` =>
  `/services/${slug}/`;

export const services: Service[] = [
  {
    title: "Site Surveys & System Health Checks",
    heroTitle: "Site Surveys & System Health Checks",
    slug: "site-surveys",
    href: buildServiceHref("site-surveys"),
    description:
      "On-site technical assessments to define critical load, constraints, and the right protection plan.",
    imageSrc: "/pps-stock-images/services-site-surveys.jpg",
    imageAlt: "Site assessment taking place in a commercial environment",
    icon: "survey",
    highlights: [
      "Critical load and resilience review",
      "Access, logistics, and installation planning",
      "Clear recommendations for next steps",
    ],
  },
  {
    title: "Emergency Lighting",
    heroTitle: "Emergency Lighting",
    slug: "emergency-lighting",
    href: buildServiceHref("emergency-lighting"),
    description:
      "Emergency lighting design, testing, and support to keep facilities safe and compliant.",
    imageSrc: "/pps-stock-images/services-standby.jpg",
    imageAlt: "Critical power infrastructure used in emergency backup systems",
    icon: "lighting",
    highlights: [
      "Emergency lighting assessments and upgrades",
      "Routine testing and compliance support",
      "Installation and ongoing maintenance options",
    ],
  },
  {
    title: "Electrical Installation",
    heroTitle: "Electrical Installation",
    slug: "electrical-installation",
    href: buildServiceHref("electrical-installation"),
    description:
      "Commercial electrical installation works delivered by qualified engineers to current standards.",
    imageSrc: "/pps-stock-images/services-electrical-installation.jpg",
    imageAlt: "Commercial electrical installation works in progress",
    icon: "installation",
    highlights: [
      "Electrical installation and integration",
      "Commissioning and certification",
      "Coordinated delivery around live operations",
    ],
  },
  {
    title: "Equipment Relocation",
    heroTitle: "Equipment Relocation",
    slug: "equipment-relocation",
    href: buildServiceHref("equipment-relocation"),
    description:
      "Safe de-commissioning, transport, and re-commissioning for UPS and related critical equipment.",
    imageSrc: "/pps-stock-images/services-relocation-pexels-2804929.jpg",
    imageAlt: "Logistics and transport planning for equipment relocation",
    icon: "relocation",
    highlights: [
      "Planned de-commissioning and move sequencing",
      "Secure transport and controlled re-installation",
      "Post-move testing and handover support",
    ],
  },
  {
    title: "UPS Installation",
    heroTitle: "UPS Installation",
    slug: "full-installation",
    href: buildServiceHref("full-installation"),
    description:
      "Complete end-to-end delivery from survey and design through installation, commissioning, and handover.",
    imageSrc: "/pps-stock-images/services-full-installation.jpg",
    imageAlt: "Technician installing power protection systems on site",
    icon: "fullInstallation",
    highlights: [
      "Survey, design, supply, and installation",
      "Commissioning and acceptance testing",
      "Documentation and operational handover",
    ],
  },
  {
    title: "UPS Battery Replacement",
    heroTitle: "UPS Battery Replacement",
    slug: "ups-battery-replacement",
    href: buildServiceHref("ups-battery-replacement"),
    description:
      "Battery testing, supply, and replacement to protect runtime and overall UPS reliability.",
    imageSrc: "/pps-stock-images/services-batteries.jpg",
    imageAlt: "UPS battery system components and power infrastructure",
    icon: "battery",
    highlights: [
      "Battery health checks and condition reporting",
      "Scheduled and reactive replacement",
      "Performance validation after installation",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
