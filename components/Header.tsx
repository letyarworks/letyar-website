import Link from "next/link";
import RidgeMark from "./RidgeMark";

const links = [
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <RidgeMark size={28} />
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            Letyar
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-body text-sm text-mist md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-paper">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden font-mono text-xs text-mist transition hover:text-paper sm:block"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-sm bg-cyan px-4 py-2 font-mono text-xs font-medium text-ink transition hover:bg-paper"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
