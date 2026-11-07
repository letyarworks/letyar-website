"use client";

import { useState } from "react";
const inputClass = "mt-2 w-full rounded-xl border border-white/15 bg-[#101B33] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan focus:outline-none";
const labelClass = "block text-sm font-medium text-white";
const sectionClass = "rounded-2xl border border-white/10 bg-[#101B33]/80 p-5 sm:p-7";

function Field({ label, children, required = false }: { label: string; children: React.ReactNode; required?: boolean }) {
  return <label className={labelClass}>{label}{required && <span className="ml-1 text-cyan">*</span>}{children}</label>;
}

function Choice({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">{options.map(option => <label key={option} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-3 text-sm transition ${value === option ? "border-cyan bg-cyan/10 text-white" : "border-white/10 bg-ink/50 text-mist hover:border-white/30"}`}><input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} className="accent-cyan"/>{option}</label>)}</div>;
}

export default function JobApplicationForm() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState("ကျွမ်းကျင်");
  const [experience, setExperience] = useState("");
  const [stay, setStay] = useState("လက်ခံနိုင်သည်");
  const [marital, setMarital] = useState("");
  const [schedule, setSchedule] = useState("အချိန်ပြည့်");
  const [consent, setConsent] = useState(false);
  const [files, setFiles] = useState<{ photo?: File; portfolio?: File }>({});

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!consent) return setError("ကိုယ်ရေးအချက်အလက်အသုံးပြုမှုနှင့် စည်းကမ်းချက်များကို သဘောတူရန် လိုအပ်ပါသည်။");
    const form = new FormData(event.currentTarget);
    form.set("gender", gender);
    form.set("skill", skill);
    form.set("experience", experience);
    form.set("stay", stay);
    form.set("marital", marital);
    form.set("schedule", schedule);
    form.set("consent", "yes");
    if (files.photo) form.set("photo", files.photo);
    if (files.portfolio) form.set("portfolio", files.portfolio);
    setBusy(true);
    try {
      const response = await fetch("/api/jobform", { method: "POST", body: form });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "လျှောက်လွှာပေးပို့၍ မရပါ။");
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setError(e instanceof Error ? e.message : "အမှားတစ်ခု ဖြစ်ပွားခဲ့သည်။");
    } finally {
      setBusy(false);
    }
  }

  if (done) return <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-3xl text-emerald-300">✓</div><h2 className="mt-5 font-mm text-2xl font-semibold text-white">လျှောက်လွှာ လက်ခံရရှိပါပြီ</h2><p className="mt-3 font-mm text-sm leading-7 text-mist">လျှောက်လွှာကို စစ်ဆေးပြီးနောက် ဆက်သွယ်ပေးပါမည်။ ကျေးဇူးတင်ပါသည်။</p><button onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-cyan px-5 py-3 text-sm font-semibold text-ink">နောက်ထပ်လျှောက်ထားရန်</button></div>;

  return <form onSubmit={submit} className="space-y-6">
    <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-4 font-mm text-sm leading-7 text-mist">
      <strong className="text-white">လျှောက်ထားရန် မတိုင်မီ ဖတ်ရှုပါ။</strong><br/>
      နေစားငြိမ်းဖြင့် နေထိုင်နိုင်သူ၊ ပိတ်ဖြတ်လုပ်ငန်းကို စိတ်ဝင်စားသူများ လျှောက်ထားနိုင်ပါသည်။ ကျား/မ မရွေး လျှောက်ထားနိုင်ပါသည်။ အိမ်ထောင်ရေးအခြေအနေသည် အလုပ်ခန့်ထားမှုအတွက် အရည်အချင်းသတ်မှတ်ချက် မဟုတ်ပါ။
    </div>

    <section className={sectionClass}>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan">01 / Personal details</p>
      <h2 className="mt-2 font-mm text-xl font-semibold text-white">ကိုယ်ရေးအချက်အလက်</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="အမည်အပြည့်အစုံ" required><input name="full_name" required maxLength={120} className={inputClass} placeholder="အမည်နှင့် မျိုးရိုးအမည်"/></Field>
        <Field label="အသက်" required><input name="age" required type="number" min="18" max="65" className={inputClass} placeholder="အသက် (၁၈ နှစ်နှင့်အထက်)"/></Field>
        <Field label="ဖုန်းနံပါတ်" required><input name="phone" required inputMode="tel" maxLength={30} className={inputClass} placeholder="09xxxxxxxxx"/></Field>
        <Field label="အခြားဆက်သွယ်ရန်ဖုန်း"><input name="alternate_phone" inputMode="tel" maxLength={30} className={inputClass} placeholder="ရှိပါက ဖြည့်ပါ"/></Field>
        <div className="sm:col-span-2"><Field label="လက်ရှိနေရပ်လိပ်စာ" required><textarea name="address" required maxLength={500} rows={2} className={inputClass} placeholder="မြို့နယ်၊ ရပ်ကွက်၊ လမ်း"/></Field></div>
        <Field label="ကျား / မ" required><Choice name="gender" options={["ကျား","မ","အခြား / မဖော်ပြလို"]} value={gender} onChange={setGender}/></Field>
        <Field label="အိမ်ထောင်ရေးအခြေအနေ (မဖြစ်မနေမဟုတ်)"><Choice name="marital" options={["အိမ်ထောင်မရှိ","အိမ်ထောင်ရှိ","မဖော်ပြလို"]} value={marital} onChange={setMarital}/></Field>
      </div>
    </section>

    <section className={sectionClass}>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan">02 / Skills & experience</p>
      <h2 className="mt-2 font-mm text-xl font-semibold text-white">ကျွမ်းကျင်မှုနှင့် အတွေ့အကြုံ</h2>
      <div className="mt-5 space-y-4">
        <Field label="လျှောက်ထားသည့်ရာထူး" required><select name="position" required className={inputClass}><option value="ပိတ်ဖြတ်ကျွမ်းကျင်">ပိတ်ဖြတ်ကျွမ်းကျင်</option><option value="အထည်ချုပ်သင်တန်းသား">အထည်ချုပ်သင်တန်းသား</option><option value="အထည်ချုပ်ကျွမ်းကျင်">အထည်ချုပ်ကျွမ်းကျင်</option><option value="အထည်ချုပ်အကူ">အထည်ချုပ်အကူ</option></select></Field>
        <Field label="လက်ရှိကျွမ်းကျင်မှု" required><Choice name="skill" options={["ကျွမ်းကျင်","အလယ်အလတ်","အခြေခံ","အတွေ့အကြုံမရှိ"]} value={skill} onChange={setSkill}/></Field>
        <Field label="လုပ်ငန်းအတွေ့အကြုံ"><textarea value={experience} onChange={e=>setExperience(e.target.value)} maxLength={1500} rows={3} className={inputClass} placeholder="ယခင်လုပ်ကိုင်ခဲ့သည့်နေရာ၊ လုပ်သက်၊ ကျွမ်းကျင်သည့်အလုပ်များ"/></Field>
        <Field label="အသုံးပြုဖူးသည့် စက်အမျိုးအစား"><input name="machine_skills" maxLength={300} className={inputClass} placeholder="ဥပမာ - ပိတ်ဖြတ်စက်၊ Overlock၊ Single Needle"/></Field>
      </div>
    </section>

    <section className={sectionClass}>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan">03 / Work & accommodation</p>
      <h2 className="mt-2 font-mm text-xl font-semibold text-white">အလုပ်ချိန်နှင့် နေထိုင်မှု</h2>
      <div className="mt-5 space-y-4">
        <Field label="နေစားငြိမ်းဖြင့် နေထိုင်နိုင်ပါသလား" required><Choice name="stay" options={["လက်ခံနိုင်သည်","အသေးစိတ်သိလိုသည်","လက်မခံနိုင်ပါ"]} value={stay} onChange={setStay}/></Field>
        <Field label="အလုပ်လုပ်နိုင်သည့်ပုံစံ"><Choice name="schedule" options={["အချိန်ပြည့်","အချိန်ပိုင်း"]} value={schedule} onChange={setSchedule}/></Field>
        <Field label="အလုပ်စတင်နိုင်မည့်ရက်"><input name="available_date" type="date" className={inputClass}/></Field>
        <Field label="အရေးပေါ်ဆက်သွယ်ရန်အမည်"><input name="emergency_name" maxLength={120} className={inputClass} placeholder="အမည်"/></Field>
        <Field label="အရေးပေါ်ဆက်သွယ်ရန်ဖုန်း"><input name="emergency_phone" inputMode="tel" maxLength={30} className={inputClass} placeholder="ဖုန်းနံပါတ်"/></Field>
        <Field label="အရေးပေါ်ဆက်သွယ်သူနှင့် တော်စပ်ပုံ"><input name="emergency_relation" maxLength={80} className={inputClass} placeholder="ဥပမာ - မိဘ၊ မောင်နှမ"/></Field>
      </div>
    </section>

    <section className={sectionClass}>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan">04 / Documents & photos</p>
      <h2 className="mt-2 font-mm text-xl font-semibold text-white">ဓာတ်ပုံနှင့် အထောက်အထား</h2>
      <p className="mt-2 font-mm text-xs leading-6 text-mist">အောက်ပါဖိုင်များကို လိုအပ်သည့်အတိုင်းသာ တင်ပါ။ မှတ်ပုံတင်နှင့် အိမ်ထောင်စုစာရင်းကို ပထမအဆင့်တွင် မတောင်းပါ။ ရွေးချယ်ခံရပြီးမှ လိုအပ်ပါက လုံခြုံစွာ စစ်ဆေးမည်။</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="ကိုယ်ပိုင်ဓာတ်ပုံ (JPG / PNG)"><input type="file" accept="image/jpeg,image/png,image/webp" onChange={e=>setFiles(p=>({...p,photo:e.target.files?.[0]}))} className={inputClass}/></Field>
        <Field label="ချုပ်လုပ်ထားသည့် လက်ရာဓာတ်ပုံ (optional)"><input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={e=>setFiles(p=>({...p,portfolio:e.target.files?.[0]}))} className={inputClass}/></Field>
      </div>
      <p className="mt-3 font-mono text-[11px] text-slate">ဖိုင်တစ်ခုလျှင် 2 MB အများဆုံး။</p>
    </section>

    <section className={sectionClass}>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan">05 / Terms & consent</p>
      <h2 className="mt-2 font-mm text-xl font-semibold text-white">အလုပ်စည်းကမ်းနှင့် သဘောတူညီချက်</h2>
      <div className="mt-5 space-y-4 font-mm text-sm leading-7 text-mist">
        <div><strong className="text-white">၁။ အစမ်းခန့်ကာလ</strong><p>အလုပ်သင်ကြားမှုနှင့် အစမ်းခန့်ကာလကို သီးခြားသဘောတူညီချက်ဖြင့် သတ်မှတ်မည်။ အစမ်းခန့်ကာလ ၁ လအတွက် လစာ ၂၀၀,၀၀၀ ကျပ်ဟု အဆိုပြုထားပြီး သက်ဆိုင်ရာ အနည်းဆုံးလုပ်ခနှင့် ဥပဒေအရ ရပိုင်ခွင့်များကို စစ်ဆေးပြီးမှ အပြီးသတ်စာချုပ်ချုပ်ဆိုမည်။</p></div>
        <div><strong className="text-white">၂။ ကျွမ်းကျင်ပြီးနောက် အထည်စားစနစ်</strong><p>လုပ်ငန်းနှင့် ဝန်ထမ်းနှစ်ဖက် သဘောတူပါက အထည်အမျိုးအစားအလိုက် ပုတ်ပြတ်နှုန်း သတ်မှတ်မည်။ အလုပ်အပ်နှံမှု၊ အရည်အသွေးစံနှုန်း၊ စားစရိတ်နှင့် ငွေရှင်းရက်ကို စာဖြင့် သီးခြားသတ်မှတ်မည်။ ပုတ်ပြတ်ခစနစ်ဖြင့် ဥပဒေအရ ရပိုင်ခွင့်ရှိသော အနည်းဆုံးလုပ်ခနှင့် အခြားအခွင့်အရေးများကို မပယ်ဖျက်ပါ။</p></div>
        <div><strong className="text-white">၃။ နေထိုင်မှုနှင့် အိမ်တွင်းစည်းကမ်း</strong><p>နေထိုင်ရာနေရာ၊ အစားအသောက်၊ အနားယူချိန်၊ ကိုယ်ပိုင်ပစ္စည်းလုံခြုံရေး၊ ဧည့်သည်ဝင်ထွက်မှုနှင့် ကိုယ်ရေးကိုယ်တာလေးစားမှုတို့ကို နှစ်ဖက်သဘောတူထားသော စည်းကမ်းစာအုပ်တွင် ဖော်ပြမည်။ လွတ်လပ်စွာ အလုပ်ထွက်ခွင့်နှင့် အပြင်ထွက်ခွင့်ကို မတားမြစ်ရ။</p></div>
        <div><strong className="text-white">၄။ လုပ်ငန်းခွင်လုံခြုံရေး</strong><p>စက်အသုံးပြုနည်း၊ အပ်နှင့် ဖြတ်စက်အန္တရာယ်ကာကွယ်ရေး၊ မီးဘေးနှင့် လျှပ်စစ်လုံခြုံရေးညွှန်ကြားချက်များကို လိုက်နာရမည်။</p></div>
        <div><strong className="text-white">၅။ ကိုယ်ရေးအချက်အလက်</strong><p>လျှောက်လွှာအချက်အလက်နှင့် ဖိုင်များကို ခန့်အပ်ရေးအတွက်သာ အသုံးပြုပြီး သက်ဆိုင်ရာတာဝန်ရှိသူများသာ ဝင်ရောက်ကြည့်ရှုနိုင်မည်။ မရွေးချယ်ခံရသူများ၏ အချက်အလက်ကို သတ်မှတ်ကာလအပြီး ဖျက်သိမ်းမည်။</p></div>
      </div>
      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-ink/50 p-4 text-sm text-white"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-cyan"/><span className="font-mm leading-7">အထက်ပါအချက်အလက်များကို ဖတ်ရှုနားလည်ပြီး လျှောက်လွှာစစ်ဆေးရေးအတွက် ကိုယ်ရေးအချက်အလက်များ အသုံးပြုခြင်းကို သဘောတူပါသည်။</span></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true"/>
    </section>

    {error && <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 font-mm text-sm text-red-200">{error}</div>}
    <button disabled={busy} type="submit" className="w-full rounded-xl bg-cyan px-6 py-4 font-mm text-base font-semibold text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">{busy ? "ပေးပို့နေသည်..." : "လျှောက်လွှာ ပေးပို့မည်"}</button>
    <p className="text-center font-mm text-xs leading-6 text-slate">ပေးပို့ပြီးနောက် လျှောက်လွှာလက်ခံရရှိကြောင်း အတည်ပြုချက်ကို ဤစာမျက်နှာတွင် ပြသပါမည်။</p>
  </form>;
}
