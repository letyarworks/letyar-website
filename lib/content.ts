export type SiteTemplate = {
  slug: string;
  title: string;
  category: string;
  price: number; // MMK
  blurb: string;
  description: string;
  features: string[];
};

// Add new templates here — every page (catalog, marquee, detail) reads from
// this one array, so adding an entry is the only step needed.
export const templates: SiteTemplate[] = [
  {
    slug: "bazaar",
    title: "Bazaar",
    category: "Storefront",
    price: 45000,
    blurb: "Product grid storefront for shops selling directly to customers.",
    description:
      "Bazaar is built for a small shop going online: product grid, cart-ready storefront structure with a clear path to connect your preferred payment workflow.",
    features: ["Product grid & detail pages", "Cart & checkout flow", "Mobile-first storefront structure", "Content handover included"],
  },
  {
    slug: "front-desk",
    title: "Front Desk",
    category: "Booking",
    price: 55000,
    blurb: "Services list with a booking form, for clinics, salons and studios.",
    description:
      "Front Desk gives a services business a clean way to list offerings and take bookings — built for clinics, salons, repair shops and studios.",
    features: ["Services list with pricing", "Booking request form", "Staff / team section", "Content handover included"],
  },
  {
    slug: "menu",
    title: "Menu",
    category: "Restaurant",
    price: 40000,
    blurb: "Digital menu and ordering page for restaurants and cafés.",
    description:
      "Menu turns a printed menu into a page customers can browse and order from on their phone, with categories and a call-to-order flow.",
    features: ["Category-based menu layout", "Item photos & pricing", "Call-to-order / delivery CTA", "Content handover included"],
  },
  {
    slug: "folio",
    title: "Folio",
    category: "Portfolio",
    price: 35000,
    blurb: "Case-study portfolio for freelancers, designers and studios.",
    description:
      "Folio leads with work samples: a project grid, case-study pages, and an about section that puts your track record first.",
    features: ["Project grid & case studies", "About & contact section", "Resume / CV download link", "Content handover included"],
  },
  {
    slug: "launch",
    title: "Launch",
    category: "Landing Page",
    price: 30000,
    blurb: "One-page launch site for a new product or early-stage business.",
    description:
      "Launch is a single scrollable page — hero, features, pricing and a contact form — for getting a new idea online fast.",
    features: ["Hero, features & pricing sections", "Contact / waitlist form", "Lightweight, fast-loading build", "Content handover included"],
  },
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}

export function formatMMK(n: number) {
  return `${n.toLocaleString("en-US")} MMK`;
}

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
      "3–4 weeks turnaround",
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

export const clients = ["Letyar Rates", "MeeNyo", "Pyaw", "SXOPOP"];

export type WorkItem = {
  slug: string;
  title: string;
  category: "Web" | "Software" | "Product";
  summary: string;
};

export const work: WorkItem[] = [
  { slug: "letyar-rates", title: "Letyar Rates", category: "Product", summary: "Android rates app for live USD/MMK and gold-rate information, built as a Letyar product." },
  { slug: "meenyo", title: "MeeNyo", category: "Product", summary: "Privacy-first social app concept with temporary Stories, built as an ongoing Letyar product." },
  { slug: "pyaw", title: "Pyaw", category: "Software", summary: "Chat application project exploring messaging, product architecture and mobile UX." },
  { slug: "sxopop", title: "SXOPOP Intelligent Hub", category: "Web", summary: "Web product and brand system for an intelligent digital hub." },
];



export const socials = [
  { label: "GitHub", href: "https://github.com/letyarworks" },
  { label: "X", href: "https://x.com/letyarworks" },
  { label: "Telegram", href: "https://t.me/letyarworks" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/letyarworks" },
];
