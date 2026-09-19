import Link from "next/link";
import RidgeMark from "./RidgeMark";
import { socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <RidgeMark size={26} />
              <span className="font-display text-lg font-semibold text-paper">Letyar</span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm text-mist">
              Every build carries a fingerprint.
            </p>
            <p className="mt-1 font-mm text-sm text-mist/80">
              ကိုယ်ပိုင်လက်ရာနဲ့ တည်ဆောက်ပါတယ်။
            </p>
            <p className="mt-4 font-mono text-xs text-slate">Web, Software &amp; Product — Yangon, Myanmar</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate">Studio</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-mist">
              <li><Link href="/work" className="hover:text-paper">Work</Link></li>
              <li><Link href="/pricing" className="hover:text-paper">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate">Connect</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-mist">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-xs text-slate md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Letyar Labs. All rights reserved.</span>
          <span>letyarlabs.com</span>
        </div>
      </div>
    </footer>
  );
}
