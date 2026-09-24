import { launchTemplateDefaults } from "@/lib/templates/launch";

export const metadata = {
  title: "Launch — Letyar",
  description: "Fast startup website template for Myanmar businesses",
};

export default function LaunchTemplate() {
  const t = launchTemplateDefaults;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{ backgroundColor: t.hero.backgroundColor }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            {t.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10">
            {t.hero.subheadline}
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition"
            style={{ backgroundColor: t.hero.accentColor, color: "#0F172A" }}
          >
            {t.hero.ctaText}
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">စလုပ်ငန်းအားလုံးအတွက်</h2>
        <button
          className="px-10 py-4 text-lg font-bold rounded-lg"
          style={{ backgroundColor: t.hero.accentColor, color: "#0F172A" }}
        >
          ယခုအမှာစာထည့်သွင်းပါ
        </button>
      </section>
    </div>
  );
}
