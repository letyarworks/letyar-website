import { SiteTemplate } from "@/lib/content";

function layoutFor(category: string) {
  switch (category) {
    case "Storefront":
      return (
        <>
          <rect x="6" y="6" width="88" height="10" rx="2" className="fill-white/10" />
          <rect x="6" y="22" width="41" height="34" rx="2" className="fill-cyan/25" />
          <rect x="53" y="22" width="41" height="34" rx="2" className="fill-white/10" />
          <rect x="6" y="60" width="41" height="34" rx="2" className="fill-white/10" />
          <rect x="53" y="60" width="41" height="34" rx="2" className="fill-white/10" />
          <rect x="6" y="98" width="88" height="14" rx="2" className="fill-white/10" />
        </>
      );
    case "Booking":
      return (
        <>
          <rect x="6" y="6" width="88" height="16" rx="2" className="fill-white/10" />
          <rect x="6" y="28" width="88" height="18" rx="2" className="fill-cyan/25" />
          <rect x="6" y="50" width="88" height="18" rx="2" className="fill-white/10" />
          <rect x="6" y="72" width="88" height="18" rx="2" className="fill-white/10" />
          <rect x="6" y="98" width="88" height="14" rx="2" className="fill-gold/30" />
        </>
      );
    case "Restaurant":
      return (
        <>
          <rect x="6" y="6" width="88" height="12" rx="2" className="fill-white/10" />
          <circle cx="20" cy="34" r="10" className="fill-cyan/25" />
          <rect x="36" y="26" width="58" height="16" rx="2" className="fill-white/10" />
          <circle cx="20" cy="60" r="10" className="fill-white/10" />
          <rect x="36" y="52" width="58" height="16" rx="2" className="fill-white/10" />
          <circle cx="20" cy="86" r="10" className="fill-white/10" />
          <rect x="36" y="78" width="58" height="16" rx="2" className="fill-white/10" />
        </>
      );
    case "Portfolio":
      return (
        <>
          <rect x="6" y="6" width="88" height="10" rx="2" className="fill-white/10" />
          <rect x="6" y="22" width="88" height="48" rx="2" className="fill-cyan/25" />
          <rect x="6" y="74" width="41" height="34" rx="2" className="fill-white/10" />
          <rect x="53" y="74" width="41" height="34" rx="2" className="fill-white/10" />
        </>
      );
    case "Landing Page":
    default:
      return (
        <>
          <rect x="6" y="6" width="88" height="10" rx="2" className="fill-white/10" />
          <rect x="16" y="22" width="68" height="26" rx="2" className="fill-white/10" />
          <rect x="28" y="52" width="44" height="12" rx="2" className="fill-cyan/25" />
          <rect x="6" y="76" width="88" height="16" rx="2" className="fill-white/10" />
          <rect x="6" y="96" width="88" height="16" rx="2" className="fill-white/10" />
        </>
      );
  }
}

export default function TemplateCard9x16({
  t,
  className = "",
}: {
  t: SiteTemplate;
  className?: string;
}) {
  return (
    <div className={`w-36 shrink-0 md:w-40 ${className}`}>
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md border border-white/10 bg-ink transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/50">
        <svg viewBox="0 0 100 178" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
          {layoutFor(t.category)}
        </svg>
        <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-white/20" />
        <span className="absolute right-2 top-2 h-2 w-2 border-r border-t border-white/20" />
        <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-white/20" />
        <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-white/20" />
        <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-sm bg-ink/80 px-1.5 py-0.5 font-mono text-[9px] text-gold">
          {t.category}
        </span>
      </div>
      <p className="mt-2 font-display text-sm font-semibold text-paper">{t.title}</p>
      <p className="font-mono text-[11px] text-mist">{t.price.toLocaleString("en-US")} MMK</p>
    </div>
  );
}
