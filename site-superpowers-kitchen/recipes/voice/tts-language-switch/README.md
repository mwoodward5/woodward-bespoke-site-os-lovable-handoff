# Tts Language Switch

**Category:** `voice`  **Perf tier:** free  **Cost tier:** moderate  **Depends on Lovable Cloud:** yes

## What it does
Voice / audio capability. Streams over SSE for low latency. Chunks long input.

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
- "let the site tts language switch"
- "read aloud with tts language switch"
- "narrate with tts language switch"
- "use tts language switch"
- "tts language switch"
- "tts language switch on the site"

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
