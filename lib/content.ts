export const services = [
  {
    key: "web",
    title: "Web",
    body: "Marketing sites, storefronts and web apps — built fast, built to last.",
    items: ["Marketing & landing sites", "E-commerce storefronts", "Web app front-ends"],
  },
  {
    key: "software",
    title: "Software",
    body: "Internal tools, dashboards and automation that remove repeat work.",
    items: ["Admin dashboards", "Workflow automation", "API integrations"],
  },
  {
    key: "product",
    title: "Product",
    body: "From idea to a shipped v1 — scoped, built, and handed over clean.",
    items: ["MVP builds", "Design systems", "Ongoing product work"],
  },
];

export type Tier = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$300",
    unit: "one-time",
    desc: "A focused site for a business that needs to be found and trusted online.",
    features: [
      "Up to 5 pages",
      "Mobile-first, responsive build",
      "Contact form",
      "Basic on-page SEO",
      "2 weeks turnaround",
    ],
  },
  {
    name: "Growth",
    price: "$800",
    unit: "one-time",
    desc: "For a business that needs more structure — content, storefront, or a small tool.",
    features: [
      "Up to 12 pages or a small storefront",
      "CMS or admin panel",
      "Analytics & SEO setup",
      "1 automation workflow included",
      "3-4 weeks turnaround",
    ],
    highlighted: true,
  },
  {
    name: "Product",
    price: "Custom",
    unit: "scoped",
    desc: "A full product build — software, dashboard, or multi-feature platform.",
    features: [
      "Custom scope & architecture",
      "Design system included",
      "API & integration work",
      "Ongoing support option",
      "Timeline scoped per project",
    ],
  },
];

export const partners = ["Partner 01", "Partner 02", "Partner 03", "Partner 04", "Partner 05", "Partner 06"];

export type WorkItem = {
  slug: string;
  title: string;
  category: "Web" | "Software" | "Product";
  summary: string;
};

export const work: WorkItem[] = [
  { slug: "riverline-storefront", title: "Riverline Storefront", category: "Web", summary: "E-commerce site for a home goods brand, built for mobile-first checkout." },
  { slug: "atlas-ops-dashboard", title: "Atlas Ops Dashboard", category: "Software", summary: "Internal operations dashboard replacing three spreadsheets and a shared inbox." },
  { slug: "fieldnote-mvp", title: "Fieldnote MVP", category: "Product", summary: "First shipped version of a field-reporting app for a logistics team." },
  { slug: "harbor-landing", title: "Harbor Landing Page", category: "Web", summary: "Launch page for an early-stage product, built and live within a week." },
  { slug: "ledger-automation", title: "Ledger Automation", category: "Software", summary: "Automated invoice-to-spreadsheet workflow, removing a weekly manual task." },
  { slug: "kiosk-product-build", title: "Kiosk Product Build", category: "Product", summary: "End-to-end build of a single-product storefront concept, from scope to launch." },
];

export const testimonials = [
  {
    quote: "The site was live in under three weeks and it actually matched what we asked for the first time.",
    name: "Small business owner, Yangon",
  },
  {
    quote: "Letyar automated a task our team did by hand every Monday. That alone paid for the project.",
    name: "Operations manager, logistics",
  },
  {
    quote: "Direct, no wasted meetings. We scoped it once and it shipped on the date we agreed.",
    name: "Founder, early-stage product",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/letyarworks" },
  { label: "X", href: "https://x.com/letyarworks" },
  { label: "Telegram", href: "https://t.me/letyarworks" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/letyarworks" },
];
