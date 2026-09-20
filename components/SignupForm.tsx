"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm({ template }: { template?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // No auth backend yet — this simulates account creation. Wire this to
    // Clerk/NextAuth (see README "Adding auth") and keep the redirect below.
    window.setTimeout(() => {
      const q = template ? `?template=${encodeURIComponent(template)}` : "";
      router.push(`/dashboard${q}`);
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-slate">
          Full name
        </label>
        <input
          id="name"
          type="text"
          required
          className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="Aung Aung"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-slate">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
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
          required
          minLength={8}
          className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="At least 8 characters"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper disabled:opacity-60"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
