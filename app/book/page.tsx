"use client";

import { FormEvent, useMemo, useState } from "react";

const slots = ["10:00", "11:30", "14:00", "15:30", "17:00"];

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          contact: form.get("contact"),
          projectType: form.get("projectType"),
          brief: form.get("brief"),
          bookingDate: date,
          bookingTime: time,
          website: form.get("website"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Booking failed.");
      }

      event.currentTarget.reset();
      setDate("");
      setTime("");
      setStatus("success");
      setMessage("Booking request sent. We will confirm the time with you.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Booking failed. Please try again.");
    }
  }

  return (
    <section className="ridge-watermark mx-auto min-h-[calc(100vh-5rem)] max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">Book a project call</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-paper md:text-5xl">
          Let&apos;s talk about what you&apos;re building.
        </h1>
        <p className="mt-4 max-w-2xl font-body text-sm leading-6 text-mist">
          Choose a date and time, then send a short project brief. Calls are based on Yangon time (MMT, UTC+06:30).
        </p>

        <form onSubmit={submit} className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate">Name</span>
              <input name="name" required maxLength={120} className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-paper outline-none focus:border-cyan" placeholder="Your name" />
            </label>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate">Viber / Phone</span>
              <input name="contact" required maxLength={120} className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-paper outline-none focus:border-cyan" placeholder="Contact number" />
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-xs uppercase tracking-wider text-slate">Project Type</span>
            <select name="projectType" required defaultValue="" className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-4 py-3 text-sm text-paper outline-none focus:border-cyan">
              <option value="" disabled>Select one</option>
              <option>Website</option>
              <option>Web App</option>
              <option>Mobile App</option>
              <option>AI Product</option>
              <option>Custom Template</option>
              <option>Other</option>
            </select>
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate">Date</span>
              <input type="date" required min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-paper outline-none focus:border-cyan" />
            </label>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wider text-slate">Time</span>
              <select required value={time} onChange={(e) => setTime(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-4 py-3 text-sm text-paper outline-none focus:border-cyan">
                <option value="" disabled>Select a time</option>
                {slots.map((slot) => <option key={slot} value={slot}>{slot} MMT</option>)}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-xs uppercase tracking-wider text-slate">Project Brief</span>
            <textarea name="brief" required maxLength={3000} rows={6} className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-paper outline-none focus:border-cyan" placeholder="What do you want to build?" />
          </label>

          {message && (
            <p className={status === "success" ? "text-sm text-cyan" : "text-sm text-red-300"}>{message}</p>
          )}

          <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-cyan px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#0B1220] transition hover:opacity-90 disabled:opacity-50">
            {status === "loading" ? "Sending..." : "Book a Project Call"}
          </button>
        </form>
      </div>
    </section>
  );
}
