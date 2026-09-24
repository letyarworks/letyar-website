export type SiteTemplate = {
  slug: string;
  title: string;
  category: string;
  price: number;
  blurb: string;
  description: string;
  features: string[];
  preview: { color: string; icon: string };
};

export const templates: SiteTemplate[] = [
  {
    slug: "bazaar",
    title: "Bazaar",
    category: "Storefront",
    price: 45000,
    blurb: "Product grid storefront for shops selling directly to customers.",
    description: "Bazaar is built for a small shop going online: product grid, cart, and a checkout flow ready for KBZPay, Wave Pay or KBZ Bank.",
    features: ["Product grid & detail pages", "Cart & checkout flow", "Mobile-first, Myanmar payment ready", "Editable in the dashboard after signup"],
    preview: { color: "#F59E0B", icon: "🛍️" },
  },
  {
    slug: "front-desk",
    title: "Front Desk",
    category: "Booking",
    price: 55000,
    blurb: "Services list with a booking form, for clinics, salons and studios.",
    description: "Front Desk gives a services business a clean way to list offerings and take bookings — built for clinics, salons, repair shops and studios.",
    features: ["Services list with pricing", "Booking request form", "Staff / team section", "Editable in the dashboard after signup"],
    preview: { color: "#EC4899", icon: "📅" },
  },
  {
    slug: "menu",
    title: "Menu",
    category: "Restaurant",
    price: 40000,
    blurb: "Digital menu and ordering page for restaurants and cafés.",
    description: "Menu turns a printed menu into a page customers can browse and order from on their phone, with categories and a call-to-order flow.",
    features: ["Category-based menu layout", "Item photos & pricing", "Call-to-order / delivery CTA", "Editable in the dashboard after signup"],
    preview: { color: "#EF4444", icon: "🍽️" },
  },
  {
    slug: "folio",
    title: "Folio",
    category: "Portfolio",
    price: 35000,
    blurb: "Case-study portfolio for freelancers, designers and studios.",
    description: "Folio leads with work samples: a project grid, case-study pages, and an about section that puts your track record first.",
    features: ["Project grid & case studies", "About & contact section", "Resume / CV download link", "Editable in the dashboard after signup"],
    preview: { color: "#8B5CF6", icon: "🎨" },
  },
  {
    slug: "launch",
    title: "Launch",
    category: "Landing Page",
    price: 30000,
    blurb: "One-page launch site for a new product or early-stage business.",
    description: "Launch is a single scrollable page — hero, features, pricing and a contact form — for getting a new idea online fast.",
    features: ["Hero, features & pricing sections", "Contact / waitlist form", "Lightweight, fast-loading build", "Editable in the dashboard after signup"],
    preview: { color: "#06B6D4", icon: "🚀" },
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
    features: ["Up to 5 pages", "Mobile-first, responsive build", "Contact form", "Basic on-page SEO", "2 weeks turnaround"],
  },
  {
    name: "Growth",
    price: "$800",
    unit: "one-time",
    desc: "For a business that needs more structure — content, storefront, or a small tool.",
    features: ["Up to 12 pages or a small storefront", "CMS or admin panel", "Analytics & SEO setup", "1 automation workflow included", "3–4 weeks turnaround"],
    highlighted: true,
  },
  {
    name: "Product",
    price: "Custom",
    unit: "scoped",
    desc: "A full product build — software, dashboard, or multi-feature platform.",
    features: ["Custom scope & architecture", "Design system included", "API & integration work", "Ongoing support option", "Timeline scoped per project"],
  },
];

export const partners = [
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "Slack", icon: "slack" },
  { name: "Stripe", icon: "stripe" },
  { name: "Supabase", icon: "supabase" },
  { name: "AWS", icon: "aws" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Docker", icon: "docker" },
  { name: "Cloudflare", icon: "cloudflare" },
  { name: "Figma", icon: "figma" },
  { name: "Vite", icon: "vite" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "GraphQL", icon: "graphql" },
];

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
