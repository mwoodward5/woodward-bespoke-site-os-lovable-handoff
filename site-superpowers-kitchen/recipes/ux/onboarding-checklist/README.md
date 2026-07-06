# Onboarding Checklist

**Category:** `ux`  **Perf tier:** moderate  **Cost tier:** cheap  **Depends on Lovable Cloud:** optional

## What it does
Interactive UX primitive. Keyboard accessible, reduced-motion friendly.

## Files
- `README.md` — this file
- `component.tsx` — React drop-in (client)
- `functions.ts` — `createServerFn` implementation (server, if applicable)
- `route.ts` — server route (HTTP endpoint, if applicable)
- `snippet.html` — vanilla fallback where feasible
- `env.example` — required environment variables
- `sql.sql` — DB migration if the recipe needs a table (GRANTs + RLS included)
- `variants.md` — tuning knobs
- `preview.png` — 1200×750 poster

## Natural-language triggers
- "add a onboarding checklist"
- "give me a onboarding checklist"
- "wire up a onboarding checklist"
- "ship a onboarding checklist"
- "onboarding checklist"
- "onboarding checklist on the site"

## Wiring
1. Copy this folder into your project (or import via the kitchen index).
2. Copy any env vars from `env.example` into your project's secrets (Lovable Cloud handles this).
3. If `sql.sql` exists, run it as a migration.
4. Import `<component.tsx>` and drop it into a route, or wire the server fn from `functions.ts`.

## Refuse when
- The user is on a regulated surface without an audited pipeline (healthcare PHI, financial filings, government forms) — swap the LLM for a rules engine.
- The recipe is `voice` or `realtime` and the target audience needs a fully static fallback.
- The recipe emits user-generated content and moderation is not wired.

## Cross-references
Pair with visual recipes from `razzle-fx-kitchen` (e.g. combine `ai/chat-support-bot` with `fx-kitchen/recipes/decor/chat-bubble` and `fx-kitchen/tokens/palette-industrial-coal`).
