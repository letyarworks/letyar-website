import Link from "next/link";
import { launchTemplateDefaults } from "@/lib/templates/launch";

export const metadata = {
  title: "Launch — Letyar Template Preview",
  description:
    "A responsive, Myanmar-ready landing page template for small businesses and new products.",
};

const products = [
  { number: "01", title: "Clear first impression", body: "Explain what you offer and who it helps in a few seconds." },
  { number: "02", title: "Built for mobile", body: "A responsive layout designed for customers browsing on their phones." },
  { number: "03", title: "Simple next step", body: "Guide visitors to contact you, request a quote, or start an order." },
];

export default function LaunchTemplate() {
  const t = launchTemplateDefaults;

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172126]">
      <div className="border-b border-[#172126]/10 bg-[#172126] px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
        Letyar Template Preview · Launch
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/templates" className="font-display text-xl font-bold tracking-tight">
          {t.title.replace(" Template", "")}<span className="text-[#087e8b]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[#172126]/70 md:flex">
          <a href="#features" className="transition hover:text-[#087e8b]">Features</a>
          <a href="#about" className="transition hover:text-[#087e8b]">About</a>
          <a href="#contact" className="transition hover:text-[#087e8b]">Contact</a>
        </nav>
        <Link href="/contact" className="rounded-full bg-[#087e8b] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#06636d]">
          Get in touch ↗
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:items-center md:px-8 md:pb-28 md:pt-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087e8b]/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#087e8b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#087e8b]" />
            Made for your next step
          </p>
          <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#172126]/65 md:text-lg">
            {t.hero.subheadline}. A clear, professional website that helps customers understand your business and take action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-[#087e8b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#06636d]">
              {t.hero.ctaText} ↗
            </a>
            <a href="#features" className="rounded-full border border-[#172126]/20 px-6 py-3.5 text-sm font-semibold transition hover:border-[#087e8b] hover:text-[#087e8b]">
              Explore features
            </a>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#172126]/45">
            Responsive · Lightweight · Customizable
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-[#087e8b]/10 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#172126]/10 bg-white shadow-xl shadow-[#172126]/10">
            <div className="flex items-center justify-between border-b border-[#172126]/10 px-5 py-4">
              <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#e8a15b]" /><span className="h-2 w-2 rounded-full bg-[#087e8b]/50" /><span className="h-2 w-2 rounded-full bg-[#172126]/20" /></div>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#172126]/45">Your business website</span>
            </div>
            <div className="bg-[#172126] px-6 py-10 text-white md:px-9 md:py-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7bd3d5]">A better way to begin</p>
              <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight md:text-4xl">Make your next idea real.</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">Show your products, tell your story, and make it easy for customers to reach you.</p>
              <div className="mt-7 inline-flex rounded-full bg-[#7bd3d5] px-5 py-3 text-xs font-semibold text-[#172126]">Let’s talk ↗</div>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4 md:p-5">
              {products.map((item) => (
                <div key={item.number} className="rounded-xl bg-[#f7f5ef] p-3 md:p-4">
                  <span className="font-mono text-[10px] text-[#087e8b]">{item.number}</span>
                  <p className="mt-2 text-xs font-semibold leading-4">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-[#172126]/10 bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#087e8b]">What you get</p>
          <div className="mt-4 grid gap-8 md:grid-cols-3 md:gap-12">
            {t.features.map((feature, index) => (
              <article key={feature.title} className="border-t border-[#172126]/15 pt-5">
                <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{products[index]?.title ?? feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#172126]/65">{products[index]?.body ?? feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#087e8b]">Designed to adapt</p>
        <div>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">Start with a solid foundation. Make it yours.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#172126]/65">Use this layout for a startup, local service, personal brand, or a new product. Replace the sample copy, brand colors, images, and contact details with your own before publishing.</p>
        </div>
      </section>

      <section id="contact" className="bg-[#172126] px-5 py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7bd3d5]">Ready when you are</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight md:text-5xl">Let’s build your next step.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">This is a working design preview. Contact Letyar to customize this template for your business.</p>
          </div>
          <Link href="/contact" className="inline-flex w-fit rounded-full bg-[#7bd3d5] px-6 py-3.5 text-sm font-semibold text-[#172126] transition hover:bg-white">
            Contact Letyar ↗
          </Link>
        </div>
      </section>

      <footer className="flex flex-col gap-2 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[#172126]/50 md:flex-row md:items-center md:justify-between md:px-8">
        <span>Launch Template · Letyar</span>
        <Link href="/templates" className="transition hover:text-[#087e8b]">Browse all templates →</Link>
      </footer>
    </main>
  );
}
