# START HERE — Site Superpowers Kitchen

Companion to `razzle-fx-kitchen`. Where the fx-kitchen ships **visual ingredients**,
this ships **functional ingredients** — AI chatbots, voice narration, realtime,
auth, payments, RAG, search, and the modern behaviors that make a 2026 site
feel alive.

## Read in this order
1. `README.md` — what this is.
2. `INDEX.md` — full table of contents (or `index.json` for machines).
3. `WIRING_GUIDE.md` — env vars, Lovable Cloud, gateway keys, DB migrations.
4. `HOW_TO_ASK.md` — how to phrase requests so the mapper hits.
5. `STACK_COMPATIBILITY.md` — TanStack Start, Next, Remix, classic Vite.
6. `SECURITY_CHECKLIST.md` — never leak keys, always verify webhooks, always moderate outputs.
7. `COST_GUIDE.md` — per-recipe cost tier.
8. `REFUSAL_CRITERIA.md` — when NOT to apply a recipe.
9. `CODEX_HANDOFF.md` — copy-paste prompt for Codex / any agent.
10. Browse `recipes/<category>/<slug>/`.

## Machine-readable
- `index.json` — full recipe manifest
- `phrases.json` — 1,000 natural-language triggers → recipe paths
- `tokens/models.json`, `tokens/voices.json`, `tokens/system-prompts.json`, `tokens/moderation.json`, `tokens/rate-limits.json`, `tokens/guardrails.json`
- `prompts/*.md` — 200 reusable system prompts

## License
MIT.
