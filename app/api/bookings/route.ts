import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120);
    const contact = clean(body.contact, 120);
    const projectType = clean(body.projectType, 80);
    const brief = clean(body.brief, 3000);
    const bookingDate = clean(body.bookingDate, 10);
    const bookingTime = clean(body.bookingTime, 5);
    const website = clean(body.website, 200);

    if (website) return NextResponse.json({ ok: true });

    if (!name || !contact || !projectType || !brief || !/^\d{4}-\d{2}-\d{2}$/.test(bookingDate) || !/^\d{2}:\d{2}$/.test(bookingTime)) {
      return NextResponse.json({ ok: false, error: "Please complete all booking fields." }, { status: 400 });
    }

    const supabase = createClient();
    const { error } = await supabase.from("project_bookings").insert({
      name,
      contact,
      project_type: projectType,
      brief,
      booking_date: bookingDate,
      booking_time: bookingTime,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ ok: false, error: "That time is already booked. Please choose another time." }, { status: 409 });
      }
      console.error("Booking insert failed:", error);
      return NextResponse.json({ ok: false, error: "Booking service is temporarily unavailable." }, { status: 503 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "hello@letyarlabs.com";
    const from = process.env.CONTACT_FROM_EMAIL;

    if (apiKey && from) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `New project call booking — ${name}`,
          text: [
            "New Letyar Labs project call booking",
            "",
            `Name: ${name}`,
            `Contact: ${contact}`,
            `Project: ${projectType}`,
            `Date: ${bookingDate}`,
            `Time: ${bookingTime} MMT`,
            "",
            "Brief:",
            brief,
          ].join("\n"),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not process the booking." }, { status: 400 });
  }
}
