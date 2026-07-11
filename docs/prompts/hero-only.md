# Prompt: Hero-only regeneration (v5)

Use when copy and sections are fine but the hero reads templated.

---

Load `packet.json`. Do NOT rerun discover/scrape. In `04-design.mjs`, force
a different `hero_family` from the current value. Re-derive the layout
seed by appending a version suffix to the slug (`<slug>__v2`). Rebuild
only the hero via `factory/templates/hero/<family>.tsx`. Re-run QC — every
§7 check that touches the hero (`hero-anatomy`, `layout-signature`,
`logo-size`, `motion`) must pass.
