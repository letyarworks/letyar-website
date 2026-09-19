import { WorkItem } from "@/lib/content";

function layoutFor(category: WorkItem["category"]) {
  switch (category) {
    case "Software":
      return (
        <>
          <rect x="6" y="6" width="24" height="88" rx="2" className="fill-white/10" />
          <rect x="36" y="6" width="118" height="14" rx="2" className="fill-white/10" />
          <rect x="36" y="26" width="56" height="30" rx="2" className="fill-cyan/25" />
          <rect x="98" y="26" width="56" height="30" rx="2" className="fill-white/10" />
          <rect x="36" y="62" width="118" height="32" rx="2" className="fill-white/10" />
        </>
      );
    case "Product":
      return (
        <>
          <rect x="6" y="6" width="148" height="10" rx="2" className="fill-white/10" />
          <rect x="6" y="22" width="70" height="72" rx="2" className="fill-cyan/25" />
          <rect x="82" y="22" width="72" height="34" rx="2" className="fill-white/10" />
          <rect x="82" y="60" width="72" height="34" rx="2" className="fill-white/10" />
        </>
      );
    case "Web":
    default:
      return (
        <>
          <rect x="6" y="6" width="148" height="12" rx="2" className="fill-white/10" />
          <rect x="30" y="26" width="100" height="22" rx="2" className="fill-white/10" />
          <rect x="55" y="52" width="50" height="12" rx="2" className="fill-cyan/25" />
          <rect x="6" y="74" width="45" height="20" rx="2" className="fill-white/10" />
          <rect x="57" y="74" width="45" height="20" rx="2" className="fill-white/10" />
          <rect x="108" y="74" width="45" height="20" rx="2" className="fill-white/10" />
        </>
      );
  }
}

export default function WorkPreview({ item }: { item: WorkItem }) {
  return (
    <div className="relative aspect-[8/5] w-full overflow-hidden rounded-sm bg-ink">
      <svg viewBox="0 0 160 100" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {layoutFor(item.category)}
      </svg>
      <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-white/15" />
      <span className="absolute right-2 top-2 h-2 w-2 border-r border-t border-white/15" />
      <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-white/15" />
      <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-white/15" />
      <span className="absolute right-3 top-3 rounded-sm bg-ink/70 px-1.5 py-0.5 font-mono text-[10px] text-gold">
        {item.category}
      </span>
    </div>
  );
}
