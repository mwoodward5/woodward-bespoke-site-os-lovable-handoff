# Exact Codex patch list — engine (priority order)

Scope guard: the Ghost Agency handoff session is actively patching prompt
extraction in `scripts/forge.mjs` (testimonial-as-name bug, extraction
priority). Coordinate before touching that file; everything below is additive
or in files that session isn't holding.

## P1 — Premier multi-page renderer (`factory/pipeline/05-build.mjs` + `factory/templates/`)
`build_type` accepts `multi-page` but renderSite() emits one index.html. Ship real sub-pages:
`/services/<service>/`, `/about/`, `/contact/`, `/service-areas/<city>/` — each with own head()/title/description/OG, BreadcrumbList + Service JSON-LD, cross-linked nav, sitemap entries. Reuse section renderers; hero variants must derive from the same layout seed so multi-page stays one-of-one. QC additions: per-page OG uniqueness, nav integrity, orphan-page check. Evidence hook: SaaS labels multi-page honestly until this lands (`app/views/pages-app.mjs` wizard hint — flip the copy when done).

## P2 — Trade-aware headline generator (`factory/pipeline/05-build.mjs` copy tables)
Observed: roofing demo headline "Sharper yards for Golden."; excavation demo "A calmer landscape path for Boise." Headline pool ignores trade. Key copy pools by trade (roofing/excavation/electrical/plumbing/hvac/painting/…), assert trade-noun presence in H1 or subhead, add a QC check `headline-trade-affinity` (fail when the H1's noun set ∩ trade lexicon = ∅).

## P3 — Layout-seed diversity hardening (`factory/lib/hero-seed.mjs`, `04-design.mjs`)
The anti-template gate correctly caught 2 of 6 demo builds colliding at depth-4 (hamming ≤ 4). Good gate, weak divergence. Widen entropy: family-specific section grammars (not one shuffled pool), per-family button/card geometry tables, seed-driven z-order variance in hero layers. Acceptance: 20 consecutive builds across 6 families, zero collisions at hamming ≤ 6.

## P4 — Name extraction robustness (`scripts/forge.mjs` — COORDINATE, see scope guard)
`for <Name> in` regex rejects lowercase connectors and ampersands: "Cedar and Stone Hardscapes" / "Cedar & Stone" fail entirely. Allow `(?:and|&|of|the)` as interior tokens with A-Z anchors on first/last word; keep the quoted-testimonial demotion the other session is shipping. Add regression fixtures: the two names above + testimonial-first prompts.

## P5 — GBP + reviews + SERP enrichment (`factory/pipeline/01-discover.mjs` + `asset-pipeline/`)
Wire `gbp_url` → hours/photos/review snippets/geo with `source:"gbp", confidence:1.0`; public review citations (link, never fabricate, render as quoted citations); optional Bright Data SERP competitor snapshot into `seo.json.gaps`. The SaaS discovery screen already renders whatever lands in the asset rows.

## P6 — Veo/Gemini asset automation (`asset-pipeline/veo-prompt.mjs` → runner)
veo_prompt.json is emitted but submission is manual. Add a runner step: submit → poll → write `media/hero.mp4` + poster frame; fall back to gemini-still. Gate cost per COST_GUIDE (`ask before high`).

## P7 — Runner service wrapper (new `runner/`, spec in `docs/SITEFORGE_SAAS_PLAN.md`)
Headless box: poll `jobs` (or ghost-agency orchestrate tickets) → execute the same stage sequence as `app/lib/engine-adapter.mjs` → stream events to a webhook → store bundles (S3/Supabase storage) → per-site Vercel project deploy (code path exists: `publishToVercel`). Exit-0-equals-grade-A stays the billing contract.

## P8 — QC completeness (`qc-audit/qc.mjs`)
Implement the two placeholder batch checks for real: `grammar-dedup` (button radius/padding/border + card aspect/shadow/gap signatures) and `image-dedup` (pHash). Add `lighthouse.mjs` (spec §7 lists it; not in runner today) behind an env flag for CI boxes with Chrome.
