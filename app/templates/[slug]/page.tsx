import { notFound } from "next/navigation";
import Link from "next/link";
import { templates, getTemplate, formatMMK } from "@/lib/content";
import TemplateCard9x16 from "@/components/TemplateCard9x16";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = getTemplate(params.slug);
  if (!t) return {};
  return { title: `${t.title} — Letyar Templates` };
}

export default function TemplateDetail({ params }: { params: { slug: string } }) {
  const t = getTemplate(params.slug);
  if (!t) return notFound();

  const others = templates.filter((x) => x.slug !== t.slug).slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/templates" className="font-mono text-xs text-slate hover:text-paper">
        ← All templates
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="flex justify-center lg:col-span-2 lg:justify-start">
          <div className="w-52">
            <TemplateCard9x16 t={t} className="w-full" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-xs uppercase tracking-widest text-slate">{t.category}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-paper">{t.title}</h1>
          <p className="mt-3 font-body text-sm text-mist">{t.description}</p>

          <div className="mt-6 flex items-center justify-between border-y border-white/10 py-4">
            <span className="font-mono text-2xl font-medium text-paper">{formatMMK(t.price)}</span>
            <span className="font-mono text-xs text-slate">One-time, pay on publish</span>
          </div>

          <Link
            href={`/contact?template=${t.slug}`}
            className="mt-6 block w-full rounded-sm bg-cyan px-6 py-3 text-center font-mono text-sm font-medium text-ink transition hover:bg-paper"
          >
            Request this template
          </Link>
          <p className="mt-3 font-body text-xs text-slate">
            Tell us which template you want. We’ll confirm the scope, customize it for your business, and send the final price before work starts.
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate">What&apos;s included</p>
            <ul className="mt-3 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2 font-body text-sm text-mist">
                  <span className="mt-1 text-gold">＋</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <div className="mt-24">
          <p className="font-mono text-xs uppercase tracking-widest text-slate">Also available</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-paper">Other templates</h2>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-10">
            {others.map((o) => (
              <Link key={o.slug} href={`/templates/${o.slug}`} className="group">
                <TemplateCard9x16 t={o} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
