# Prompt: Content rescue only (v5)

Use when Firecrawl missed critical assets (logo, hours, reviews).

---

Load `packet.json`. Check `enrichment_sources` for fields with confidence
0 and no fallback. For each:

- Logo missing → run `asset-pipeline/logo-remaster.mjs` with a
  `proposed:true` mark generator. Notify operator via console; do not
  deploy until confirmed.
- Hours missing → apply §6 fallback: omit hours strip; do not invent.
- Reviews missing → swap Reviews section for Process section.
- Photos missing → use `asset-pipeline/gemini-still.mjs` for branded stills,
  never stock Unsplash.

Never fabricate awards, years in business, project counts, or team members.
