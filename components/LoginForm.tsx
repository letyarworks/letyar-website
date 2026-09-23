"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-slate">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="you@business.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="font-mono text-xs uppercase tracking-wider text-slate">
            Password
          </label>
          <Link href="/forgot-password" className="font-mono text-[11px] text-cyan hover:text-paper">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="Your password"
        />
      </div>

      {error && (
        <p role="alert" className="border border-lacquer/30 bg-lacquer/10 px-4 py-3 font-body text-sm text-paper">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper disabled:opacity-60"
      >
        {loading ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}
