import Link from "next/link";
import RidgeMark from "@/components/RidgeMark";

export const metadata = { title: "Log in — Letyar" };

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <Link href="/" className="mb-8 flex items-center gap-2.5">
        <RidgeMark size={28} />
        <span className="font-display text-lg font-semibold text-paper">Letyar</span>
      </Link>

      <h1 className="font-display text-2xl font-semibold text-paper">Log in</h1>
      <p className="mt-2 font-body text-sm text-mist">
        Access your project dashboard and files.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-slate">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
            placeholder="you@business.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="font-mono text-xs uppercase tracking-wider text-slate">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 font-body text-sm text-mist">
        Do not have an account?{" "}
        <Link href="/signup" className="text-cyan hover:text-paper">
          Sign up
        </Link>
      </p>
    </section>
  );
}
