import Link from "next/link";
import { tiers } from "@/lib/content";

export const metadata = { title: "Pricing — Letyar" };

const compareRows = [
  { label: "Pages / scope", values: ["Up to 5 pages", "Up to 12 pages or small store", "Custom scope"] },
  { label: "CMS or admin panel", values: ["—", "Included", "Included"] },
  { label: "Automation workflow", values: ["—", "1 included", "Scoped per project"] },
  { label: "Design system", values: ["—", "—", "Included"] },
  { label: "Turnaround", values: ["2 weeks", "3–4 weeks", "Scoped per project"] },
  { label: "Support after launch", values: ["Email, 30 days", "Email, 60 days", "Ongoing option"] },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Pricing</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Three ways to work with Letyar
      </h1>
      <p className="mt-4 max-w-xl font-body text-sm text-mist">
        Every project starts with a scope call. These prices are a starting
        point — the number you get in writing is the number you pay.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col border p-6 ${
              t.highlighted ? "border-cyan bg-navy" : "border-white/10 bg-navy/40"
            }`}
          >
            {t.highlighted && (
              <span className="mb-3 inline-block w-fit rounded-sm bg-cyan px-2 py-1 font-mono text-[10px] font-medium text-ink">
                MOST CHOSEN
              </span>
            )}
            <p className="font-mono text-xs uppercase tracking-wider text-slate">{t.name}</p>
            <p className="mt-3 font-display text-3xl font-semibold text-paper">
              {t.price}
              <span className="ml-1.5 font-body text-sm font-normal text-mist">/ {t.unit}</span>
            </p>
            <p className="mt-3 font-body text-sm text-mist">{t.desc}</p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2 font-body text-sm text-mist">
                  <span className="text-gold">＋</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-8 rounded-sm px-5 py-2.5 text-center font-mono text-xs font-medium transition ${
                t.highlighted
                  ? "bg-cyan text-ink hover:bg-paper"
                  : "border border-white/15 text-paper hover:border-white/40"
              }`}
            >
              Start with {t.name}
            </Link>
          </div>
        ))}
      </div>

      {/* COMPARISON TABLE */}
      <div className="mt-20 overflow-x-auto">
        <h2 className="font-display text-xl font-semibold text-paper">Compare tiers</h2>
        <table className="mt-6 w-full min-w-[560px] border-collapse font-body text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-slate">
              <th className="py-3 pr-4 font-mono text-xs font-medium uppercase tracking-wider">Feature</th>
              {tiers.map((t) => (
                <th key={t.name} className="py-3 pr-4 font-mono text-xs font-medium uppercase tracking-wider">
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.label} className="border-b border-white/5">
                <td className="py-3 pr-4 text-mist">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="py-3 pr-4 text-paper">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <div className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
        <div>
          <p className="font-body text-sm font-medium text-paper">What if my project doesn't fit a tier?</p>
          <p className="mt-1 font-body text-sm text-mist">
            Most Product-tier work is scoped individually. Book a scope call
            and we'll send a fixed price before anything starts.
          </p>
        </div>
        <div>
          <p className="font-body text-sm font-medium text-paper">How does payment work?</p>
          <p className="mt-1 font-body text-sm text-mist">
            50% to start, 50% on delivery for fixed-price tiers. Larger
            Product builds can be split into milestones.
          </p>
        </div>
        <div>
          <p className="font-body text-sm font-medium text-paper">Do you work with clients outside Myanmar?</p>
          <p className="mt-1 font-body text-sm text-mist">
            Yes — Letyar is based in Yangon and works with clients remotely,
            across time zones.
          </p>
        </div>
        <div>
          <p className="font-body text-sm font-medium text-paper">What happens after launch?</p>
          <p className="mt-1 font-body text-sm text-mist">
            Every tier includes a support window after delivery. Ongoing
            retainers are available for continued work.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-4 border border-white/10 bg-navy p-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-lg font-semibold text-paper">Not sure which tier fits?</h2>
          <p className="mt-1 font-body text-sm text-mist">Tell us what you're building — we'll recommend one.</p>
        </div>
        <Link
          href="/contact"
          className="whitespace-nowrap rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
        >
          Talk to us
        </Link>
      </div>
    </section>
  );
}
