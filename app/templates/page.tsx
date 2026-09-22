import Link from "next/link";
import { templates } from "@/lib/content";
import TemplateCard9x16 from "@/components/TemplateCard9x16";

export const metadata = {
  title: "Templates",
  description: "Ready-made website starting points from Letyar Labs.",
};

export default function TemplatesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">
        Ready-made — {templates.length} templates
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Pick one, make it yours, publish it
      </h1>
      <p className="mt-4 max-w-lg font-body text-sm text-mist">
        Select a template → review the scope → customize it when the
        client workflow is connected → publish when ready.
      </p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-12">
        {templates.map((t) => (
          <Link key={t.slug} href={`/templates/${t.slug}`} className="group">
            <TemplateCard9x16 t={t} />
          </Link>
        ))}
      </div>
    </section>
  );
}
