import ContactForm from "@/components/ContactForm";
import { socials, getTemplate } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Contact Letyar Labs about a website, software or digital product project.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { template?: string };
}) {
  const requestedTemplate = searchParams?.template ? getTemplate(searchParams.template) : undefined;
  const template = requestedTemplate?.title || "";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-slate">Get in touch</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
            Tell us what you're building
          </h1>
          <p className="mt-4 font-body text-sm text-mist">
            Send a few lines about the project and we&apos;ll follow up with questions,
            scope and a price.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate">Email</p>
              <a href="mailto:hello@letyarlabs.com" className="mt-1 block font-body text-sm text-paper hover:text-cyan">
                hello@letyarlabs.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate">Based in</p>
              <p className="mt-1 font-body text-sm text-paper">Yangon, Myanmar</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate">Elsewhere</p>
              <ul className="mt-1 space-y-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-paper hover:text-cyan">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm template={template} />
        </div>
      </div>
    </section>
  );
}
