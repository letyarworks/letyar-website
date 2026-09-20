# Letyar Labs — website

Next.js 14 + Tailwind site for **Letyar (လက်ရာ)**, built against the brand
rules in [`letyarworks/letyar-brand`](https://github.com/letyarworks/letyar-brand).

## Brand decisions worth knowing about

The brand repo defines **two** color systems and this build had to reconcile them:

1. `assets/` "profile photo set" (the SVGs you supplied) — Ink / Cream /
   Lacquer, for social media avatars specifically.
2. `COLORS.md` — the **canonical digital palette** for the actual product/
   website: Deep Navy, Navy, Electric Cyan, Warm Gold, White, Mist, Slate,
   plus Lacquer Red as a sparing heritage accent.

This site uses **palette 2** (the official `COLORS.md` tokens) throughout,
since `COLORS.md` is explicitly the source of truth for digital surfaces.
The reference mockups you shared use an orange CTA color that isn't in
either official palette — `COLORS.md` reserves that "Heritage Lacquer" tone
for cultural context only and names **Electric Cyan as the primary
functional accent**, so buttons and links use cyan here, not orange. The
Cream avatar SVG you supplied for on-dark placements *is* used as-is (About
page, per `README.txt`'s own "→ dark UI" guidance).

`COLORS.md` also says to "keep backgrounds mostly solid; avoid unnecessary
gradients" — so instead of a gradient hero, the background carries a very
faint repeated version of the logo mark itself (`.ridge-watermark` in
`globals.css`). If you'd rather match the mockups' gradient-and-orange look
exactly instead of the official `COLORS.md` rules, say so and it's a quick
retint.

## Stack

- Next.js 14 (App Router) + TypeScript, Tailwind CSS
- Fonts: General Sans + Satoshi (Fontshare CDN, linked in `app/layout.tsx`
  — see "Fonts" below), JetBrains Mono + Noto Sans Myanmar (`next/font/google`)
- No backend yet — content lives in `lib/content.ts`; contact form, login
  and signup are UI-only (see "Next steps")

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Fonts

`General Sans` and `Satoshi` aren't on Google Fonts, so they're loaded from
Fontshare's CDN in `app/layout.tsx`. If Fontshare is blocked or slow on your
network, download the two families from https://www.fontshare.com and use
`next/font/local` instead — same `font-display` / `font-body` Tailwind
classes will keep working once the local `@font-face` is wired up.

## Push to GitHub

```bash
cd letyar
git init
git add .
git commit -m "Initial commit: Letyar Labs website"
git branch -M main
git remote add origin https://github.com/<your-username>/letyar-website.git
git push -u origin main
```

## Deploy to Vercel

1. https://vercel.com/new
2. Import the repo — Next.js is auto-detected, no config needed
3. Deploy

Every push to `main` redeploys automatically.

## Next steps (not wired up yet)

- **Viber button** (`components/ViberButton.tsx`) links to a placeholder
  number — swap `%2B959000000000` for the real one.
- **Contact form** (`components/ContactForm.tsx`) simulates a send. Wire it
  to a real endpoint — an `app/api/contact/route.ts` that emails you, or a
  service like Formspree/Resend.
- **Login / signup** are UI only. For real auth, Clerk or NextAuth.js both
  drop into the App Router with minimal changes to these two pages.
- **Partner logos** on the homepage marquee are text placeholders — swap
  `lib/content.ts`'s `partners` array for real logo images once you have
  permission to display them.
- **Work page** images are schematic placeholders
  (`components/WorkPreview.tsx`), consistent with your "make images
  placeholders" instruction — swap in real project screenshots as case
  studies are ready.

## Where things live

- `lib/content.ts` — services, pricing tiers, work items, testimonials, socials
- `components/RidgeMark.tsx` — the Yun Ridge logo mark (official colors, with a self-drawing hero variant)
- `tailwind.config.ts` — the eight brand color tokens, straight from `COLORS.md`
- `app/pricing/page.tsx` — full tiers + comparison table
- `app/contact/page.tsx` + `components/ContactForm.tsx` — the contact flow
