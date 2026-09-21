import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120);
    const email = clean(body.email, 254);
    const projectType = clean(body.projectType, 80);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);

    // Honeypot: real visitors leave this empty.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required fields with a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "hello@letyarlabs.com";
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error("Contact email is not configured.");
      return NextResponse.json(
        { ok: false, error: "Contact service is temporarily unavailable. Please email hello@letyarlabs.com directly." },
        { status: 503 }
      );
    }

    const text = [
      "New enquiry from letyarlabs.com",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType || "Not specified"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Letyar Labs enquiry — ${name}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend request failed:", response.status);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please email hello@letyarlabs.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "We couldn't process your message. Please try again or email hello@letyarlabs.com directly." },
      { status: 400 }
    );
  }
}
