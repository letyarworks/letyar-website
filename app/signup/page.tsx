import Link from "next/link";
import RidgeMark from "@/components/RidgeMark";
import SignupForm from "@/components/SignupForm";
import TemplateCard9x16 from "@/components/TemplateCard9x16";
import { getTemplate } from "@/lib/content";

export const metadata = {\n  title: "Sign up — Letyar",\n  robots: { index: false, follow: false },\n};

export default function SignupPage({
  searchParams,
}: {
  searchParams: { template?: string };
}) {
  const template = searchParams.template ? getTemplate(searchParams.template) : undefined;

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <Link href="/" className="mb-8 flex items-center gap-2.5">
        <RidgeMark size={28} />
        <span className="font-display text-lg font-semibold text-paper">Letyar</span>
      </Link>

      <h1 className="font-display text-2xl font-semibold text-paper">Create an account</h1>
      <p className="mt-2 font-body text-sm text-mist">
        Client accounts will be available when the project portal is ready.
      </p>

      {template && (
        <div className="mt-6 flex items-center gap-4 border border-cyan/30 bg-navy p-4">
          <TemplateCard9x16 t={template} className="w-16" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-slate">Selected template</p>
            <p className="font-display text-sm font-semibold text-paper">{template.title}</p>
          </div>
        </div>
      )}

      <SignupForm template={template?.slug} />

      <p className="mt-6 font-body text-sm text-mist">
        Already have an account?{" "}
        <Link href="/login" className="text-cyan hover:text-paper">
          Log in
        </Link>
      </p>

      <p className="mt-10 font-mono text-[11px] text-slate">
        Not wired to real authentication yet — see README &ldquo;Adding auth&rdquo;.
      </p>
    </section>
  );
}
