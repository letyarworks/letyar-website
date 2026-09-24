export const metadata = { title: "About — Letyar" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">About</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Letyar means workmanship
      </h1>
      <p className="mt-6 font-body text-base leading-relaxed text-mist">
        Letyar (လက်ရာ) is a Myanmar word for workmanship — the distinctive
        mark a craftsperson leaves on something they built by hand. That&apos;s
        the standard this studio holds its work to, whether it&apos;s a five-page
        site or a full product build.
      </p>
      <p className="mt-4 font-body text-base leading-relaxed text-mist">
        Technology is the material. Design is the structure. Engineering is
        the craft. Every project gets scoped honestly, built without
        disappearing for weeks, and handed over in a state someone else could
        pick up and maintain.
      </p>

      <div className="mt-14 flex items-center gap-5 border-t border-white/10 pt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/avatar-cream.svg"
          alt="Letyar founder avatar mark"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <p className="font-display text-base font-semibold text-paper">Aung</p>
          <p className="font-mono text-xs text-slate">Founder, Letyar Labs — Yangon, Myanmar</p>
          <a
            href="https://aungbobokyaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-mono text-xs text-cyan hover:text-paper"
          >
            aungbobokyaw.com ↗
          </a>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
        {[
          { title: "Clear", body: "No jargon, no padded scope. What's being built is written down before it starts." },
          { title: "Practical", body: "Solutions fit the resources at hand — lightweight, mobile-friendly, maintainable." },
          { title: "Shipped", body: "A finished, live build beats a polished plan that never launches." },
        ].map((v) => (
          <div key={v.title}>
            <p className="font-mono text-xs text-gold">{v.title}</p>
            <p className="mt-2 font-body text-sm text-mist">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
