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
