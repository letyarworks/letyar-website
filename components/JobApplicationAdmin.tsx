"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Application = {
  id: string; full_name: string; age: number; phone: string; address: string;
  position: string; skill_level: string; experience: string; accommodation: string;
  work_schedule: string; status: string; created_at: string;
  signed_files: Record<string,string>;
};

const statuses = [
  ["pending","အသစ်"],
  ["reviewed","စစ်ဆေးပြီး"],
  ["interview","လူတွေ့ခေါ်ရန်"],
  ["accepted","လက်ခံ"],
  ["rejected","မရွေးချယ်"],
  ["withdrawn","ရုပ်သိမ်း"],
];

export default function JobApplicationAdmin() {
  const [rows,setRows] = useState<Application[]>([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");
  const [filter,setFilter] = useState("all");
  const [busy,setBusy] = useState("");

  async function load() {
    setLoading(true); setError("");
    try {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) throw new Error("Admin login လိုအပ်ပါသည်။");
      const res = await fetch("/api/jobform", { headers: { Authorization: `Bearer ${session.access_token}` }, cache: "no-store" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "လျှောက်လွှာများ ရယူ၍မရပါ။");
      setRows(json.applications || []);
    } catch(e) { setError(e instanceof Error ? e.message : "အမှားဖြစ်နေပါသည်။"); }
    finally { setLoading(false); }
  }

  useEffect(() => { void load(); }, []);

  async function changeStatus(id:string,status:string) {
    setBusy(id); setError("");
    try {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch("/api/jobform", { method:"PATCH", headers: { "Content-Type":"application/json", Authorization:`Bearer ${session?.access_token || ""}` }, body:JSON.stringify({id,status}) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "အခြေအနေပြောင်း၍မရပါ။");
      await load();
    } catch(e) { setError(e instanceof Error ? e.message : "အမှားဖြစ်နေပါသည်။"); }
    finally { setBusy(""); }
  }

  const visible = filter === "all" ? rows : rows.filter(r=>r.status===filter);
  return <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><p className="font-mono text-xs uppercase tracking-widest text-cyan">Private HR workspace</p><h1 className="mt-2 font-mm text-2xl font-bold text-white sm:text-3xl">အလုပ်လျှောက်လွှာ စီမံခန့်ခွဲမှု</h1><p className="mt-2 font-mm text-xs text-mist">Admin ဝင်ရောက်ခွင့်ရှိသူများသာ ကြည့်ရှုနိုင်သည်။</p></div>
      <button onClick={()=>void load()} className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white hover:border-cyan">ပြန်လည်ရယူရန် ↻</button>
    </div>
    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[["စုစုပေါင်း",rows.length],["အသစ်",rows.filter(r=>r.status==="pending").length],["လူတွေ့",rows.filter(r=>r.status==="interview").length],["လက်ခံ",rows.filter(r=>r.status==="accepted").length]].map(([label,value])=><div key={String(label)} className="rounded-2xl border border-white/10 bg-[#101B33] p-4"><p className="font-mm text-xs text-mist">{label}</p><p className="mt-2 font-mono text-2xl font-semibold text-white">{value}</p></div>)}
    </div>
    <div className="mt-6 flex flex-wrap gap-2">{[["all","အားလုံး"],...statuses].map(([value,label])=><button key={value} onClick={()=>setFilter(value)} className={`rounded-full border px-3 py-2 font-mm text-xs ${filter===value?"border-cyan bg-cyan/10 text-cyan":"border-white/10 text-mist"}`}>{label}</button>)}</div>
    {error && <p className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-3 font-mm text-sm text-red-200">{error}</p>}
    {loading ? <p className="py-16 text-center font-mm text-sm text-mist">လျှောက်လွှာများ ရယူနေသည်...</p> : visible.length===0 ? <p className="py-16 text-center font-mm text-sm text-mist">လျှောက်လွှာ မရှိသေးပါ။</p> : <div className="mt-5 space-y-4">{visible.map(row=><article key={row.id} className="rounded-2xl border border-white/10 bg-[#101B33] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-mm text-lg font-semibold text-white">{row.full_name}</h2><p className="mt-1 font-mono text-xs text-cyan">{row.phone}</p><p className="mt-1 font-mm text-xs text-slate">{row.position} · {row.skill_level || "ကျွမ်းကျင်မှုမဖော်ပြ"}</p></div><select aria-label="လျှောက်လွှာအခြေအနေ" disabled={busy===row.id} value={row.status} onChange={e=>void changeStatus(row.id,e.target.value)} className="rounded-lg border border-white/15 bg-ink px-3 py-2 font-mm text-xs text-white">{statuses.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></div>
      <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2"><p className="font-mm text-mist">အသက် — {row.age}</p><p className="font-mm text-mist">နေစားငြိမ်း — {row.accommodation}</p><p className="font-mm text-mist">အလုပ်ချိန် — {row.work_schedule}</p><p className="font-mm text-mist">လျှောက်ထားသည့်နေ့ — {new Date(row.created_at).toLocaleString("my-MM")}</p></div>
      <p className="mt-3 whitespace-pre-wrap font-mm text-sm leading-7 text-mist">{row.experience || "အတွေ့အကြုံ မဖော်ပြထားပါ။"}</p>
      <div className="mt-4 flex flex-wrap gap-2">{Object.entries(row.signed_files || {}).map(([path,url])=><a key={path} href={url} target="_blank" rel="noreferrer" className="rounded-lg border border-cyan/30 px-3 py-2 font-mono text-[11px] text-cyan">ဖိုင်ကြည့်ရန် ↗</a>)}</div>
      <p className="mt-3 break-all font-mono text-[10px] text-slate">ID: {row.id}</p>
    </article>)}</div>}
  </div>;
}
