# Letyar Labs — website

Next.js 14 + Tailwind site for **Letyar (လက်ရာ)**.

## Stack

- Next.js 14 App Router + TypeScript + Tailwind CSS
- Supabase Auth with `@supabase/ssr`
- Resend-backed contact form
- Vercel deployment

## Run locally

Create `.env.local` from `.env.example`, then add the Supabase project URL and publishable key.

```bash
npm install
npm run dev
```

## Authentication

Login and signup are wired to the **Letyar Labs Supabase project** using cookie-based SSR auth.

- `/signup` creates an email/password account.
- Signup stores the user's full name and selected template in Auth user metadata.
- Email confirmation returns through `/auth/callback`.
- `/login` signs users in with email/password.
- `/dashboard` requires an authenticated user.
- `/logout` signs the current user out.
- `middleware.ts` refreshes Supabase sessions.

The browser only receives the Supabase publishable key. No service-role key belongs in the repository or browser environment.

For production, configure these Vercel environment variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

Supabase's current Next.js guidance recommends `@supabase/ssr` with cookie-based sessions for App Router applications.

## Template marketplace

The current template flow is:

1. `/templates` — browse templates.
2. `/templates/[slug]` — select a template.
3. `/signup?template=<slug>` — create an account and preserve the selected template.
4. `/dashboard?template=<slug>` — authenticated customization flow.

The payment step is **not yet a real payment integration**. It is intentionally separate from authentication so real merchant/API verification can be added without pretending that a payment occurred.

## Contact

The contact flow uses the existing Resend configuration. Keep API credentials in Vercel environment variables, never in source control.

## Brand

The website uses the Letyar brand assets and the official logomark from the brand repository.
