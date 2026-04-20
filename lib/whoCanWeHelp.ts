export type WhoCanWeHelpBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type WhoCanWeHelpEntry = {
  slug:
    | "medium-business"
    | "corporate"
    | "government-and-local-council"
    | "universities-and-education"
    | "telecoms-business"
    | "healthcare-and-nhs";
  title: string;
  heroTitle: string;
  heroDescription: string;
  imageSrc: string;
  imageAlt: string;
  blocks: WhoCanWeHelpBlock[];
};

export const whoCanWeHelpEntries: WhoCanWeHelpEntry[] = [
  {
    slug: "medium-business",
    title: "Small and Medium Businesses",
    heroTitle: "Small and Medium Businesses",
    heroDescription: "Keep your business running when the power doesn't",
    imageSrc: "/who-we-help/smb-proxyclick-2451566.jpg",
    imageAlt: "Medium business office environment",
    blocks: [
      {
        type: "paragraph",
        text: "Modern small and medium-sized businesses rely on a distributed network of technology — rack-mount servers, internet gateways, storage systems, VoIP telephony, and more. Unlike the single central computer of the past, today's infrastructure is spread across multiple technical environments, many of which require continuous, stable power around the clock.",
      },
      {
        type: "paragraph",
        text: "A single power interruption can bring operations to a halt, corrupt critical data, damage hardware, and in the worst cases take hours or days to fully recover from. For a growing business, that kind of downtime has a direct impact on revenue, reputation, and customer confidence.",
      },
      {
        type: "paragraph",
        text: "UPS Power Keeper supplies and installs UPS solutions scaled for small and medium business environments — robust enough to protect your infrastructure, flexible enough to grow with your organisation. From initial site survey through to installation, commissioning, and ongoing maintenance, we manage the entire process so you don't have to.",
      },
      { type: "heading", text: "What we protect:" },
      {
        type: "list",
        items: [
          "Rack-mount servers and data storage systems",
          "Internet gateways and network infrastructure",
          "VoIP and communications systems",
          "Building management and security systems",
          "Any equipment requiring continuous, stable power",
        ],
      },
      {
        type: "paragraph",
        text: "Power problems don't announce themselves. Make sure your business is ready when they arrive.",
      },
    ],
  },
  {
    slug: "corporate",
    title: "Coorporate Organisations",
    heroTitle: "Coorporate Organisations",
    heroDescription: "Enterprise-grade power protection, without compromise",
    imageSrc: "/who-we-help/corporate-divinetechygirl-1181406.jpg",
    imageAlt: "Corporate office and enterprise operations",
    blocks: [
      {
        type: "paragraph",
        text: "For corporate organisations, the data centre is the beating heart of the business. Every network connection, every remote user, every transaction, and every customer interaction depends on it running without interruption. At this scale, even a brief power event can cascade rapidly — affecting operations across multiple sites, disrupting thousands of users, and resulting in significant financial and reputational damage.",
      },
      {
        type: "paragraph",
        text: "The stakes are too high for a reactive approach. Corporate infrastructure demands power protection that is properly specified, professionally installed, and actively maintained — with support available whenever it's needed, 24 hours a day, 365 days a year.",
      },
      {
        type: "paragraph",
        text: "UPS Power Keeper works with corporate organisations to design and deliver power protection solutions built around the specific demands of enterprise infrastructure. As an independent supplier, we're not tied to any single manufacturer — which means we recommend the solution that's genuinely right for your environment, not the one that's easiest to sell.",
      },
      { type: "heading", text: "What we deliver for corporate clients:" },
      {
        type: "list",
        items: [
          "Power protection solutions scaled for data centre and enterprise environments",
          "Full turnkey service from site survey and design through to installation and commissioning",
          "Ongoing maintenance contracts with guaranteed response times",
          "24/7/365 monitoring and support",
          "Independent, multi-brand product sourcing — always the right solution, never a compromise",
        ],
      },
    ],
  },
  {
    slug: "government-and-local-council",
    title: "Government and Local Council",
    heroTitle: "Government and Local Council",
    heroDescription: "Reliable power protection for critical public services",
    imageSrc: "/who-we-help/local-government-fotios-2130031.jpg",
    imageAlt: "Government and local council civic buildings",
    blocks: [
      {
        type: "paragraph",
        text: "Government bodies and local councils carry a unique responsibility — the people and services that depend on them can't afford disruption. From council IT systems and emergency service infrastructure to civic administration platforms and public health coordination, the consequences of power failure extend well beyond inconvenience.",
      },
      {
        type: "paragraph",
        text: "Procurement in the public sector also comes with its own demands: compliance requirements, value-for-money obligations, audit trails, and the need for suppliers who understand how to work within established frameworks and processes.",
      },
      {
        type: "paragraph",
        text: "UPS Power Keeper provides a full lifecycle power protection service — from initial consultation and system design through to installation, commissioning, and long-term maintenance. We work with a wide range of government departments and local authorities across the UK, delivering solutions that meet both the technical demands of the environment and the governance requirements of the organisation.",
      },
      { type: "heading", text: "Organisations we work with:" },
      {
        type: "list",
        items: [
          "Local councils and unitary authorities",
          "Central government departments",
          "Public service agencies",
          "Emergency services",
          "NHS and public health bodies",
          "Public sector IT and data infrastructure",
        ],
      },
      {
        type: "paragraph",
        text: "Power protection that serves the public interest — specified, installed, and maintained to the standards that public sector organisations require.",
      },
    ],
  },
  {
    slug: "universities-and-education",
    title: "Universities and Education",
    heroTitle: "Universities and Education",
    heroDescription:
      "Reliable power protection for schools, colleges, universities, and campus infrastructure",
    imageSrc: "/who-we-help/universities-ollie-8793386.jpg",
    imageAlt: "Universities and education campus buildings",
    blocks: [
      {
        type: "paragraph",
        text: "Education environments depend on always-on technology. From classroom delivery and campus Wi-Fi to data platforms, access control, and research systems, power interruptions can quickly disrupt teaching, administration, and student services.",
      },
      {
        type: "paragraph",
        text: "Whether you're managing a single school site or a multi-building university estate, resilience planning needs to balance compliance, budget, and practical uptime requirements across mixed legacy and modern infrastructure.",
      },
      {
        type: "paragraph",
        text: "UPS Power Keeper provides independent UPS design, supply, installation, and maintenance services tailored to education settings. We help you protect critical systems, reduce disruption, and keep your operations running during unstable mains events.",
      },
      { type: "heading", text: "Education environments we support:" },
      {
        type: "list",
        items: [
          "Primary and secondary schools",
          "Further education colleges",
          "Universities and research institutions",
          "Campus IT and communications infrastructure",
          "Administration, security, and access-control systems",
          "Teaching spaces, labs, and specialist facilities",
        ],
      },
      {
        type: "paragraph",
        text: "Practical power protection for education organisations that cannot afford unnecessary downtime.",
      },
    ],
  },
  {
    slug: "telecoms-business",
    title: "Telecoms Business",
    heroTitle: "Telecoms Business",
    heroDescription: "When network uptime is non-negotiable",
    imageSrc: "/who-we-help/it-cookiecutter-17489156.jpg",
    imageAlt: "Telecoms and communications infrastructure",
    blocks: [
      {
        type: "paragraph",
        text: "Telecoms infrastructure operates under some of the most demanding power requirements of any industry. Networks must stay live around the clock — any interruption, however brief, can affect thousands of users and trigger contractual, regulatory, and reputational consequences.",
      },
      {
        type: "paragraph",
        text: "Telecoms environments typically combine DC-powered battery banks with AC-powered equipment — servers, storage systems, routers, and inverters — each with specific power supply requirements. As networks continue to evolve through 5G rollout and expanding base station infrastructure, the complexity and criticality of power protection requirements grows with them.",
      },
      {
        type: "paragraph",
        text: "UPS Power Keeper supplies and installs UPS systems and inverters configured for the specific demands of telecoms environments — from network operations centres and server rooms to remote base stations and exchange buildings. Our independence from any single manufacturer means we can source and specify the most appropriate solution for your infrastructure, whatever the scale.",
      },
      { type: "heading", text: "What we provide for telecoms:" },
      {
        type: "list",
        items: [
          "UPS systems and inverters for AC-powered telecoms equipment",
          "Power protection for base stations and remote network sites",
          "Scalable solutions for network operations centres",
          "Ongoing maintenance and 24/7 support contracts",
          "Battery replacement and health check programmes",
        ],
      },
    ],
  },
  {
    slug: "healthcare-and-nhs",
    title: "Healthcare and NHS",
    heroTitle: "Healthcare and NHS",
    heroDescription: "Power protection where failure is simply not an option",
    imageSrc: "/who-we-help/hospitals-contact-13176450.jpg",
    imageAlt: "Healthcare and NHS clinical environment",
    blocks: [
      {
        type: "paragraph",
        text: "In healthcare environments, power protection is not an operational convenience — it is a clinical necessity. Medical UPS systems, batteries, and switchgear must adhere to strict regulations and operating standards specific to the healthcare sector, covering everything from patient vicinity leakage current limits to failsafe redundancy requirements.",
      },
      {
        type: "paragraph",
        text: "UPS Power Keeper has extensive experience delivering medical-grade UPS solutions across the NHS and private healthcare sector. Our knowledge of the operational demands, compliance requirements, and clinical sensitivities of this environment sets us apart from generalist suppliers.",
      },
      {
        type: "heading",
        text: "Our protection extends across the full breadth of healthcare infrastructure:",
      },
      {
        type: "list",
        items: [
          "Operating theatres and emergency rooms",
          "Operating theatre backup power and lighting",
          "Clinical laboratory equipment",
          "Patient monitoring systems",
          "Diagnostic devices and mobile apparatus",
          "Digital imaging systems",
          "IT infrastructure and administrative systems",
        ],
      },
      {
        type: "paragraph",
        text: "All of these rely on a continuous, stable power source. Malfunction, system error, or unplanned downtime in any of these environments carries consequences that go far beyond financial loss.",
      },
      { type: "heading", text: "Our experience in healthcare" },
      {
        type: "paragraph",
        text: "Trusted by leading healthcare authorities across the UK, we have completed over 100 three-phase UPS installations and delivered UPS solutions supporting operating theatres nationwide. (Client name to be confirmed before publishing.)",
      },
      { type: "heading", text: "Regulations we comply with:" },
      {
        type: "list",
        items: [
          "HTM (Health Technical Memorandum)",
          "BS7671 (British Standard)",
          "BS6290-4 (British Standard)",
          "IEC60601 (International Electrotechnical Commission)",
        ],
      },
      { type: "heading", text: "Medical UPS — designed for patient environments" },
      {
        type: "paragraph",
        text: "For medical systems used in the vicinity of a patient, or anywhere low leakage current is required, our medical Uninterruptible Power Manager (UPM) systems provide conditioned, uninterruptible power that meets the specific demands of clinical settings.",
      },
      {
        type: "paragraph",
        text: "North American models are listed to UL60601-1 3rd edition with RA and cUL22.2 No. 60601-1, and are suitable for patient vicinity applications. International models are listed to IEC60601-1 3rd edition with RA and carry the CE mark. All models reduce connected equipment leakage current to less than 300 amps.",
      },
      { type: "heading", text: "Key technical specifications:" },
      {
        type: "list",
        items: [
          "Product sizes from 420 VA to 3000 VA",
          "True sine-wave output with 0.9 power factor",
          "Low impedance isolation transformer with line interactive operation",
          "UL60601 3rd Edition with Risk Assessment",
          "UL1778 5th Edition",
          "True VA management",
          "Advanced SNMP communication capability",
          "User-friendly GUI interface and diagnostics",
          "Auto battery test and user hot-swappable battery",
          "Over temperature protection and alarm",
          "Switchable outlets via software",
          "Meets FCC Class A (optional Class B available)",
          "Meets NEMA, FAA, and DOT guidelines for transportation of UPS batteries",
          "Let-through voltage less than 10V normal mode and less than 0.5V neutral-to-ground (tested to ANSI/IEEE C62.41)",
          "UPS Power Keeper's five-year warranty (two-year on batteries) on parts and labour",
        ],
      },
    ],
  },
];

export const getWhoCanWeHelpEntryBySlug = (slug: string) =>
  whoCanWeHelpEntries.find((entry) => entry.slug === slug);
