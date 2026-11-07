import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE = 2 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);
const clean = (v: FormDataEntryValue | null, max = 500) => typeof v === "string" ? v.trim().slice(0, max) : "";
const escapeHtml = (v: string) => v.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

function adminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("Job application database is not configured.");
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export async function POST(request: Request) {
  let supabase: ReturnType<typeof adminClient>;
  try {
    supabase = adminClient();
  } catch {
    return NextResponse.json({ ok: false, error: "လျှောက်လွှာစနစ်ကို ပြင်ဆင်နေဆဲဖြစ်ပါသည်။ နောက်မှပြန်လည်ကြိုးစားပါ။" }, { status: 503 });
  }

  try {
    const form = await request.formData();
    if (clean(form.get("website"), 200)) return NextResponse.json({ ok: true });
    const fullName = clean(form.get("full_name"), 120);
    const age = Number(clean(form.get("age"), 3));
    const phone = clean(form.get("phone"), 30);
    const address = clean(form.get("address"), 500);
    const position = clean(form.get("position"), 80);
    const consent = clean(form.get("consent"), 10);
    if (!fullName || !phone || !address || !position || consent !== "yes" || !Number.isInteger(age) || age < 18 || age > 65) {
      return NextResponse.json({ ok: false, error: "မဖြစ်မနေဖြည့်ရန် အချက်အလက်များကို စစ်ဆေးပါ။ အသက် ၁၈ နှစ်နှင့်အထက် ဖြစ်ရပါမည်။" }, { status: 400 });
    }
    const id = randomUUID();
    const attachments: Record<string, string> = {};
    for (const field of ["photo", "portfolio"]) {
      const file = form.get(field);
      if (file instanceof File && file.size > 0) {
        if (file.size > MAX_FILE || !ALLOWED.has(file.type)) {
          return NextResponse.json({ ok: false, error: "ဓာတ်ပုံ/PDF ဖိုင်သည် 2 MB အောက်နှင့် ခွင့်ပြုထားသော ဖိုင်အမျိုးအစား ဖြစ်ရပါမည်။" }, { status: 400 });
        }
        const ext = file.type === "image/jpeg" ? "jpg" : file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "pdf";
        const path = `${id}/${field}-${randomUUID()}.${ext}`;
        const { error } = await supabase.storage.from("job-applications").upload(path, Buffer.from(await file.arrayBuffer()), { contentType: file.type, upsert: false });
        if (error) throw error;
        attachments[field] = path;
      }
    }
    const record = {
      id, full_name: fullName, age, phone, alternate_phone: clean(form.get("alternate_phone"), 30),
      address, gender: clean(form.get("gender"), 40), marital_status: clean(form.get("marital"), 40),
      position, skill_level: clean(form.get("skill"), 40), experience: clean(form.get("experience"), 1500),
      machine_skills: clean(form.get("machine_skills"), 300), accommodation: clean(form.get("stay"), 60),
      work_schedule: clean(form.get("schedule"), 40), available_date: clean(form.get("available_date"), 20) || null,
      emergency_name: clean(form.get("emergency_name"), 120), emergency_phone: clean(form.get("emergency_phone"), 30),
      emergency_relation: clean(form.get("emergency_relation"), 80), attachments, status: "pending",
      consent_at: new Date().toISOString(),
    };
    const { error: insertError } = await supabase.from("job_applications").insert(record);
    if (insertError) throw insertError;

    let emailSent = false;
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.JOBFORM_NOTIFICATION_EMAIL || process.env.CONTACT_TO_EMAIL || "hello@letyarlabs.com";
    if (apiKey && from) {
      const html = `<h2>New job application</h2><p><b>Name:</b> ${escapeHtml(fullName)}</p><p><b>Position:</b> ${escapeHtml(position)}</p><p><b>Phone:</b> ${escapeHtml(phone)}</p><p><b>Age:</b> ${age}</p><p><b>Skill:</b> ${escapeHtml(record.skill_level)}</p><p><b>Experience:</b> ${escapeHtml(record.experience)}</p><p><b>Accommodation:</b> ${escapeHtml(record.accommodation)}</p><p><b>Application ID:</b> ${id}</p><p>Review in the private admin dashboard.</p>`;
      const mail = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], subject: `New job application: ${fullName}`, html }) });
      emailSent = mail.ok;
      if (!mail.ok) console.error("Job application email notification failed:", mail.status);
    }
    return NextResponse.json({ ok: true, id, emailSent });
  } catch (error) {
    console.error("Job application submission failed:", error);
    return NextResponse.json({ ok: false, error: "လျှောက်လွှာပေးပို့ရာတွင် အမှားဖြစ်နေပါသည်။ ဖိုင်အရွယ်အစားနှင့် အချက်အလက်များကို စစ်ဆေးပြီး ပြန်လည်ကြိုးစားပါ။" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const supabase = adminClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user?.email || user.email.toLowerCase() !== (process.env.JOBFORM_ADMIN_EMAIL || "").toLowerCase()) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const { data, error } = await supabase.from("job_applications").select("*").order("created_at", { ascending: false }).limit(100);
    if (error) throw error;
    const rows = await Promise.all((data || []).map(async row => {
      const links: Record<string, string> = {};
      for (const path of Object.values((row.attachments || {}) as Record<string, string>)) {
        const { data: signed } = await supabase.storage.from("job-applications").createSignedUrl(path, 300);
        if (signed?.signedUrl) links[path] = signed.signedUrl;
      }
      return { ...row, signed_files: links };
    }));
    return NextResponse.json({ ok: true, applications: rows });
  } catch {
    return NextResponse.json({ error: "Could not load applications." }, { status: 500 });
  }
}
