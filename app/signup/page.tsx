import Link from "next/link";
import RidgeMark from "@/components/RidgeMark";

export const metadata = {
  title: "Client portal — Letyar",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <Link href="/" className="mb-8 flex items-center gap-2.5">
        <RidgeMark size={28} />
        <span className="font-display text-lg font-semibold text-paper">Letyar</span>
      </Link>

      <p className="font-mono text-xs uppercase tracking-widest text-slate">
        Client portal
      </p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-paper">
        Client accounts are not open yet
      </h1>
      <p className="mt-3 font-body text-sm leading-relaxed text-mist">
        Accounts will be available when the project portal is ready. You can
        start a project now without an account by sending the details through
        the contact page.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-sm bg-cyan px-6 py-3 text-center font-mono text-sm font-medium text-ink transition hover:bg-paper"
        >
          Start a project
        </Link>
        <Link
          href="/"
          className="rounded-sm border border-white/15 px-6 py-3 text-center font-mono text-sm text-paper transition hover:border-white/40"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
