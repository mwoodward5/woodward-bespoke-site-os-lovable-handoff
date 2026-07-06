# REFUSAL CRITERIA

Do NOT deploy a recipe when:

- The recipe is `ai/*` or `voice/*` and the surface is a **regulated vertical** (medical diagnosis, legal filing, financial advice) — swap the LLM for a rules engine and a human reviewer.
- The recipe emits user-generated content and **moderation is not wired**.
- The recipe requires an external API key the user has not supplied.
- The recipe is `realtime/*` and the target audience is on a fully static / no-JS surface.
- The recipe is `voice/*` and the target user cannot enable audio (kiosks, meetings, silent contexts) — always ship a text fallback.
- Any recipe that would enable scraping personal data, bypassing paywalls, or evading moderation.
