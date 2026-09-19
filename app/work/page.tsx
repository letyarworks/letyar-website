import Link from "next/link";
import { work } from "@/lib/content";
import WorkPreview from "@/components/WorkPreview";

export const metadata = { title: "Work — Letyar" };

export default function WorkPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const cats = ["Web", "Software", "Product"] as const;
  const active = searchParams.category;
  const list = active ? work.filter((w) => w.category === active) : work;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Selected work</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Built, shipped, and still running
      </h1>
      <p className="mt-4 max-w-lg font-body text-sm text-mist">
        Project imagery below is a placeholder schematic — real case-study
        screenshots go here as projects are published.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/work"
          className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
            !active ? "border-cyan bg-cyan text-ink" : "border-white/15 text-mist hover:border-white/40"
          }`}
        >
          All
        </Link>
        {cats.map((c) => (
          <Link
            key={c}
            href={`/work?category=${c}`}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
              active === c ? "border-cyan bg-cyan text-ink" : "border-white/15 text-mist hover:border-white/40"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((w) => (
          <div key={w.slug}>
            <WorkPreview item={w} />
            <h3 className="mt-3 font-display text-base font-semibold text-paper">{w.title}</h3>
            <p className="mt-1 font-body text-sm text-mist">{w.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
