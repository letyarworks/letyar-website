import JobApplicationForm from "@/components/JobApplicationForm";

export const metadata = {
  title: "အလုပ်လျှောက်လွှာ — Letyar Labs",
  description: "ရိုးမရိပ်သာ အိမ်တွင်းအထည်ချုပ်လုပ်ငန်းအတွက် ဝန်ထမ်းလျှောက်လွှာ",
  robots: { index: false, follow: false },
};

const gallery = [
  { title: "အပ်ချုပ်စက်နှင့် လုပ်ငန်းခွင်", note: "လုပ်ငန်း၏ တကယ့်ဓာတ်ပုံ ထည့်ရန်", src: "/jobform/workshop-01.jpg" },
  { title: "အထည်ဖြတ်လုပ်ငန်း", note: "လုပ်ငန်း၏ တကယ့်ဓာတ်ပုံ ထည့်ရန်", src: "/jobform/cutting-01.jpg" },
  { title: "နေထိုင်ရန်နေရာ", note: "နေထိုင်ခန်း၏ တကယ့်ဓာတ်ပုံ ထည့်ရန်", src: "/jobform/accommodation-01.jpg" },
];

export default function JobFormPage() {
  return <main className="min-h-screen bg-ink pb-20 text-paper">
    <section className="border-b border-white/10 bg-[#101B33]">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="font-display text-lg font-bold tracking-wide text-white">LETYAR <span className="text-cyan">LABS</span></a>
          <span className="rounded-full border border-cyan/30 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan">CAREERS</span>
        </div>
        <div className="mt-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Join our workshop</p>
          <h1 className="mt-4 font-mm text-3xl font-bold leading-relaxed text-white sm:text-5xl">အလုပ်အကိုင် လျှောက်ထားရန်</h1>
          <p className="mt-4 font-mm text-base leading-8 text-mist">ပိတ်ဖြတ်ကျွမ်းကျင် ဝန်ထမ်းနှင့် သင်ယူလိုစိတ်ရှိသူများကို ခေါ်ယူနေပါသည်။ ကျား/မ မရွေး လျှောက်ထားနိုင်ပါသည်။</p>
          <div className="mt-7 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-4 py-2 font-mm text-mist">နေစားငြိမ်း</span>
            <span className="rounded-full bg-white/10 px-4 py-2 font-mm text-mist">ရိုးမရိပ်သာ</span>
            <span className="rounded-full bg-white/10 px-4 py-2 font-mm text-mist">အတွေ့အကြုံရှိသူ / သင်ယူလိုသူ</span>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-5 pt-10 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {gallery.map(item => <div key={item.title} className="overflow-hidden rounded-2xl border border-dashed border-white/20 bg-[#101B33]">
          <div className="flex aspect-[16/9] items-center justify-center bg-white/[0.03] p-5 text-center">
            <div><div className="text-3xl text-cyan">＋</div><p className="mt-2 font-mm text-sm text-white">{item.title}</p><p className="mt-1 font-mm text-xs text-slate">{item.note}</p></div>
          </div>
          <div className="border-t border-white/10 px-4 py-3"><p className="font-mm text-xs text-mist">{item.title}</p><p className="mt-1 font-mono text-[10px] text-slate">{item.src}</p></div>
        </div>)}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#101B33] p-5">
          <p className="font-mm text-sm font-semibold text-white">လုပ်ငန်းတည်နေရာ</p>
          <p className="mt-2 font-mm text-sm text-mist">ရိုးမရိပ်သာ</p>
          <p className="mt-1 font-mm text-xs text-slate">အတိအကျလိပ်စာနှင့် Google Maps Pin ကို လုပ်ငန်းရှင်က အတည်ပြုပြီးမှ ထည့်သွင်းမည်။</p>
          <a href="https://www.google.com/maps/search/?api=1&query=ရိုးမရိပ်သာ" target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-lg border border-cyan/30 px-4 py-2 font-mm text-xs text-cyan hover:bg-cyan/10">Google Maps တွင်ရှာရန် ↗</a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#101B33] p-5">
          <p className="font-mm text-sm font-semibold text-white">ခန့်အပ်မှုအဆင့်များ</p>
          <ol className="mt-2 list-inside list-decimal space-y-1 font-mm text-xs leading-6 text-mist"><li>လျှောက်လွှာလက်ခံခြင်း</li><li>လူတွေ့နှင့် လက်တွေ့ကျွမ်းကျင်မှုစစ်ဆေးခြင်း</li><li>သင်တန်း / အစမ်းခန့်စာချုပ်</li><li>ကျွမ်းကျင်ပြီးနောက် ပုတ်ပြတ်နှုန်း သဘောတူခြင်း</li></ol>
        </div>
      </div>
      <div className="mt-12"><JobApplicationForm/></div>
    </section>
  </main>;
}
