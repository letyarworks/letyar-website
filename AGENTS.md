# Letyar Website — Codex Project Rules

## Scope

These rules apply to work in this repository.

## Safety

- Never expose, print, commit, or hard-code secrets, API keys, OAuth client secrets, service-role keys, or access tokens.
- Never commit real values from .env files.
- Environment variable names may be documented; secret values must not be.
- Do not weaken authentication, authorization, RLS, CSRF/origin protections, or input validation to make a feature work.

## Authentication

- Use Supabase Auth as the source of truth for user authentication.
- Preserve secure server-side session handling with @supabase/ssr.
- Protected pages and APIs must verify the authenticated user server-side where authorization is required.
- OAuth callbacks must validate redirect destinations and message origins.
- Use the minimum OAuth scopes required for the feature.

## Supabase

- Never use a Supabase service-role key in browser/client code.
- Treat all database writes as untrusted input.
- Preserve or improve Row Level Security.
- Do not assume database schema or RLS policies from application code alone; flag uncertainty when the repository does not contain migrations/policies.
- Do not expose private database data to unauthenticated users.

## Contact and Booking APIs

- Contact and booking inputs must be validated and length-limited server-side.
- Keep Resend credentials server-side only.
- Do not report a successful send unless the backend request actually succeeds.
- Public endpoints that can trigger email or database writes should have appropriate abuse protection such as rate limiting, CAPTCHA/Turnstile, or equivalent controls.
- Avoid logging sensitive form data.

## GitHub / CMS

- GitHub OAuth access tokens must never be exposed to an untrusted origin.
- Validate postMessage sender origins before accepting or sending sensitive data.
- Keep CMS configuration aligned with this repository and the Letyar production domain.
- Do not silently point CMS configuration at unrelated legacy repositories or domains.

## Production

- Prefer minimal, targeted changes.
- Do not introduce breaking changes to existing production routes, authentication, or public APIs without explicit approval.
- Do not remove working functionality merely to simplify implementation.
- Preserve existing bilingual/user-facing behavior unless the task explicitly changes it.
- Before recommending merge, run the relevant lint, typecheck, and build/test commands when available.
- Report failures honestly; never claim tests passed unless they were actually run.

## Dependencies and Configuration

- Do not add dependencies unless necessary.
- Keep package-lock.json synchronized with package.json.
- Avoid duplicate configuration files when one authoritative configuration is sufficient.
- Do not change framework versions as part of unrelated fixes.

## Code Review

Focus on concrete defects and regressions, especially:
1. Security vulnerabilities
2. Authentication/authorization failures
3. Data exposure
4. Broken production behavior
5. API validation and abuse risks
6. Incorrect environment/configuration references
7. Type/build/test failures

Do not make speculative claims. Distinguish confirmed findings from items that require verification outside the repository.
