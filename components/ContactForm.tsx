"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const template = searchParams.get("template") || "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Your name is required.";
    if (!email) next.email = "Your email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Tell us a little about the project.";

    setErrors(next);
    setServerError("");
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType: String(data.get("projectType") || ""),
          template,
          message,
          website: String(data.get("website") || ""),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setServerError(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 border border-cyan/40 bg-navy p-8" role="status">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/15 text-cyan">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-display text-lg font-semibold text-paper">Message sent.</h3>
        <p className="font-body text-sm text-mist">
          Your enquiry has been sent to Letyar Labs. We&apos;ll reply as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 font-mono text-xs text-cyan hover:text-paper"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-slate">
          Your name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required maxLength={120}
          className="mt-2 w-full border border-white/15 bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="Aung Aung" aria-invalid={Boolean(errors.name)} />
        {errors.name && <p className="mt-1 font-mono text-xs text-lacquer">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-slate">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254}
          className="mt-2 w-full border border-white/15 bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="you@business.com" aria-invalid={Boolean(errors.email)} />
        {errors.email && <p className="mt-1 font-mono text-xs text-lacquer">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className="font-mono text-xs uppercase tracking-wider text-slate">
          Project type (optional)
        </label>
        <select id="projectType" name="projectType" defaultValue=""
          className="mt-2 w-full border border-white/15 bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan">
          <option value="" disabled>Select one</option>
          <option>Website</option>
          <option>Software / dashboard</option>
          <option>Product build</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="website" className="sr-only">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-slate">
          Tell us about the project
        </label>
        <textarea id="message" name="message" rows={5} required maxLength={5000}
          className="mt-2 w-full resize-none border border-white/15 bg-ink px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
          placeholder="What are you building, and what timeline are you working with?" aria-invalid={Boolean(errors.message)} />
        {errors.message && <p className="mt-1 font-mono text-xs text-lacquer">{errors.message}</p>}
      </div>

      {serverError && (
        <p className="font-body text-sm text-lacquer" role="alert">{serverError}</p>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="w-full rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
