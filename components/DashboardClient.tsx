"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTemplate, formatMMK } from "@/lib/content";

const accents = [
  { name: "Cyan", hex: "#19D3E6" },
  { name: "Gold", hex: "#E0B04B" },
  { name: "Lacquer", hex: "#B23A22" },
  { name: "Mist", hex: "#CBD5E1" },
];

const paymentMethods = [
  { key: "kbzpay", name: "KBZPay", note: "Auto-verified via API" },
  { key: "wavepay", name: "Wave Pay", note: "Auto-verified via API" },
  { key: "kbzbank", name: "KBZ Bank", note: "Auto-verified via API" },
];

type Step = "edit" | "publish" | "success";

export default function DashboardClient() {
  const params = useSearchParams();
  const slug = params.get("template") ?? undefined;
  const template = slug ? getTemplate(slug) : undefined;

  const [step, setStep] = useState<Step>("edit");
  const [siteName, setSiteName] = useState(template?.title ?? "My Business");
  const [tagline, setTagline] = useState(template?.blurb ?? "");
  const [accent, setAccent] = useState(accents[0].hex);
  const [method, setMethod] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);

  const siteSlug = siteName.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "your-site";

  function handlePublish() {
    if (!method) return;
    setPaying(true);
    // No payment backend yet — this simulates a KBZPay / Wave Pay / KBZ
    // Bank confirmation. Wiring a real one needs merchant accounts with
    // each provider and a server route that verifies the callback/webhook
    // before marking the site as published. See README "Wiring payments".
    window.setTimeout(() => {
      setPaying(false);
      setStep("success");
    }, 1100);
  }

  if (!template) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">Dashboard</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-paper">No template selected yet</h1>
        <p className="mt-3 font-body text-sm text-mist">
          Pick a template first, then it&apos;ll open here ready to customize.
        </p>
        <Link
          href="/templates"
          className="mt-8 inline-block rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
        >
          Browse templates
        </Link>
      </section>
    );
  }

  if (step === "success") {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan/15 text-cyan">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h1 className="mt-5 font-display text-2xl font-semibold text-paper">Your site is live.</h1>
        <p className="mt-2 font-mono text-sm text-cyan">{siteSlug}.letyarlabs.com</p>
        <p className="mt-4 font-body text-sm text-mist">
          Paid via {paymentMethods.find((m) => m.key === method)?.name} — {formatMMK(template.price)}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/templates" className="rounded-sm border border-white/15 px-6 py-3 font-mono text-sm text-paper transition hover:border-white/40">
            Browse more templates
          </Link>
          <Link href="/" className="rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Dashboard</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper">
        Editing <span className="text-cyan">{template.title}</span>
      </h1>

      <div className="mt-6 flex gap-2 font-mono text-xs">
        <span className={`rounded-full px-3 py-1 ${step === "edit" ? "bg-cyan text-ink" : "border border-white/15 text-slate"}`}>
          1. Customize
        </span>
        <span className={`rounded-full px-3 py-1 ${step === "publish" ? "bg-cyan text-ink" : "border border-white/15 text-slate"}`}>
          2. Publish
        </span>
      </div>

      {step === "edit" && (
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate">Site name</label>
              <input
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate">Tagline</label>
              <textarea
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                rows={3}
                className="mt-2 w-full resize-none border border-white/15 bg-navy px-4 py-3 font-body text-sm text-paper outline-none transition focus:border-cyan"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-slate">Accent color</label>
              <div className="mt-3 flex gap-3">
                {accents.map((a) => (
                  <button
                    key={a.hex}
                    type="button"
                    onClick={() => setAccent(a.hex)}
                    aria-label={a.name}
                    className={`h-9 w-9 rounded-full transition ${accent === a.hex ? "ring-2 ring-paper ring-offset-2 ring-offset-ink" : ""}`}
                    style={{ backgroundColor: a.hex }}
                  />
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setStep("publish")}
              className="w-full rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper"
            >
              Continue to publish
            </button>
          </div>

          {/* live-ish preview */}
          <div className="border border-white/10 bg-ink p-6" style={{ borderTopColor: accent, borderTopWidth: 3 }}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Live preview</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-paper">{siteName}</h3>
            <p className="mt-2 font-body text-sm text-mist">{tagline}</p>
            <span className="mt-4 inline-block rounded-sm px-4 py-2 font-mono text-xs" style={{ backgroundColor: accent, color: "#0B1220" }}>
              Get started
            </span>
          </div>
        </div>
      )}

      {step === "publish" && (
        <div className="mt-10 max-w-md">
          <p className="font-body text-sm text-mist">
            Publishing <strong className="text-paper">{siteName}</strong> — {formatMMK(template.price)}, one-time.
          </p>

          <div className="mt-6 space-y-3">
            {paymentMethods.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setMethod(m.key)}
                className={`flex w-full items-center justify-between border px-4 py-3 text-left transition ${
                  method === m.key ? "border-cyan bg-navy" : "border-white/15 bg-navy/40 hover:border-white/30"
                }`}
              >
                <span>
                  <span className="block font-display text-sm font-semibold text-paper">{m.name}</span>
                  <span className="block font-mono text-[11px] text-slate">{m.note}</span>
                </span>
                <span
                  className={`h-4 w-4 rounded-full border ${method === m.key ? "border-cyan bg-cyan" : "border-white/25"}`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handlePublish}
            disabled={!method || paying}
            className="mt-6 w-full rounded-sm bg-cyan px-6 py-3 font-mono text-sm font-medium text-ink transition hover:bg-paper disabled:opacity-50"
          >
            {paying ? "Confirming payment…" : `Pay ${formatMMK(template.price)} & publish`}
          </button>
          <button
            type="button"
            onClick={() => setStep("edit")}
            className="mt-3 w-full font-mono text-xs text-slate hover:text-paper"
          >
            ← Back to customize
          </button>
        </div>
      )}
    </section>
  );
}
