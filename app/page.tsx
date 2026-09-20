import Link from "next/link";
import RidgeMark from "@/components/RidgeMark";
import { services, tiers, partners, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden ridge-watermark">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex items-center gap-3">
            <RidgeMark size={40} animated />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan">
              Web · Software · Product
            </span>
          </div>
          <h1 className="mt-7 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-paper md:text-6xl">
            Every build carries
            <br />a fingerprint.
          </h1>
          <p className="mt-3 font-mm text-base text-mist/80 md:text-lg">
            ကိုယ်ပိုင်လက်ရာနဲ့ တည်ဆောက်ပါတယ်။
          </p>
          <p className="mt-6 max-w-lg font-body text-base text-mist md:text-lg">
            Letyar (လက်ရာ) is a Yangon-based studio building websites, software
            and products with the same care a craftsperson puts into their
            work — clear, useful, and shipped.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
            >
              View our work
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-white/15 px-6 py-3 font-mono text-sm font-medium text-paper transition hover:border-white/40"
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* PARTNERS MARQUEE — placeholder wordmarks, swap for real logos */}
        <div className="border-t border-white/5 bg-navy/60 py-6">
          <p className="mx-auto max-w-6xl px-6 font-mono text-[11px] uppercase tracking-widest text-slate">
            Trusted by teams building in Myanmar and beyond
          </p>
          <div className="relative mt-4 overflow-hidden">
            <div className="flex w-max animate-marquee gap-16">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="font-display text-lg text-slate/70 whitespace-nowrap">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">What we build</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-paper md:text-3xl">
          Three disciplines, one studio
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.key}
              className="animate-rise border border-white/10 bg-navy p-6"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <h3 className="font-display text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-mist">{s.body}</p>
              <ul className="mt-4 space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2 font-body text-sm text-mist/80">
                    <span className="text-gold">·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TEMPLATES TEASER */}
      <section className="border-y border-white/5 bg-navy/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate">Coming soon</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-paper">
              Templates for your business
            </h2>
            <p className="mt-2 max-w-md font-body text-sm text-mist">
              Ready-made site templates from the same studio, for teams that
              want to launch without a custom build.
            </p>
          </div>
          <span className="whitespace-nowrap rounded-sm border border-white/15 px-5 py-2.5 font-mono text-xs text-mist">
            Notify me — coming soon
          </span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">Process</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-paper md:text-3xl">
          Scoped once, shipped on time
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Scope", body: "We define exactly what's being built and what it costs, before any work starts." },
            { title: "Build", body: "Regular check-ins as the work progresses — no disappearing for weeks at a time." },
            { title: "Ship", body: "Deployed, handed over, and documented — with a clear path for what comes next." },
          ].map((s) => (
            <div key={s.title} className="border-l-2 border-gold/60 pl-5">
              <h3 className="font-display text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-mist">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="border-y border-white/5 bg-navy/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate">Pricing</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-paper md:text-3xl">
                Clear pricing, no surprise invoices
              </h2>
            </div>
            <Link href="/pricing" className="hidden font-mono text-sm text-cyan hover:text-paper md:block">
              Full pricing →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col border p-6 ${
                  t.highlighted ? "border-cyan bg-ink" : "border-white/10 bg-ink/60"
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-slate">{t.name}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-paper">
                  {t.price}
                  <span className="ml-1.5 font-body text-sm font-normal text-mist">/ {t.unit}</span>
                </p>
                <p className="mt-2 font-body text-sm text-mist">{t.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-8 inline-block font-mono text-sm text-cyan hover:text-paper md:hidden"
          >
            Full pricing →
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">From past projects</p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-l-2 border-cyan/50 pl-5">
              <blockquote className="font-body text-sm text-mist">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 font-mono text-xs text-slate">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-navy p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper">
              Have a build in mind?
            </h2>
            <p className="mt-2 max-w-md font-body text-sm text-mist">
              Tell us what you're building. We'll reply with a scope and a price.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
