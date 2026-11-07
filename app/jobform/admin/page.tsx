import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import JobApplicationAdmin from "@/components/JobApplicationAdmin";

export const metadata = { title: "Job Applications — Letyar Admin", robots: { index: false, follow: false } };

export default async function JobApplicationAdminPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const allowed = (process.env.JOBFORM_ADMIN_EMAIL || "").toLowerCase();
  if (!allowed || user.email?.toLowerCase() !== allowed) {
    return <main className="min-h-[70vh] bg-ink px-6 py-20 text-center"><h1 className="font-mm text-2xl text-white">ဝင်ရောက်ခွင့်မရှိပါ</h1><p className="mt-3 font-mm text-sm text-mist">ဤစာမျက်နှာကို သတ်မှတ်ထားသော Admin အကောင့်သာ အသုံးပြုနိုင်ပါသည်။</p><a href="/dashboard" className="mt-6 inline-block text-cyan">Dashboard သို့ပြန်ရန်</a></main>;
  }
  return <main className="min-h-screen bg-ink"><JobApplicationAdmin/></main>;
}
