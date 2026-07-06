# Prompt For Lovable - Grade And Optimize The Builder Engine

Paste this into Lovable Plan mode.

---

We have a repo for the Woodward Bespoke Site OS builder engine. Please inspect it like a teacher grading our homework, then patch the engine so future generated sites reach A+ quality.

Repo:
`https://github.com/mwoodward5/woodward-bespoke-site-os-lovable-handoff`

Live examples from the current engine:

- Landscape Connection: https://wss-ca-landscape-landscape-connection-inc.vercel.app
- AJP Landscape: https://wss-ca-landscape-ajp-landscape-inc.vercel.app
- Barriga Landscaping: https://wss-ca-landscape-barriga-landscaping.vercel.app
- Signature Landscape: https://wss-ca-landscape-signature-landscape.vercel.app
- Richard Diaz Landscape: https://wss-ca-landscape-richard-diaz-landscape.vercel.app

Context:

This is not a SaaS product we sell to agencies. This is our internal automated local website agency machine. The system mines local businesses, finds weak web presence, generates reports, prebuilds a better preview site, follows up with engaged prospects through AI calling/text/email, and sells the business a managed website subscription.

The current sites have improved from C-/D to about B/B+, but they are not A+. The taste level is getting closer, but the shapes, hero structures, card grammar, buttons, and some typography still feel too related across the batch.

Please inspect these files first:

- `README.md`
- `engine/BUILDER_ENGINE_SPEC.md`
- `CODEX_MASTER_HANDOFF.md`
- `docs/LOVABLE_A_PLUS_META_PROMPT_V4_SOURCE.txt`
- `factory/build-ca-landscape-aplus-sites.mjs`
- `generated-sites/`
- `proof/`
- `master-glue-kitchen/polish-rules.json`
- `master-glue-kitchen/`
- `razzle-fx-kitchen/`
- `site-superpowers-kitchen/`

What we need from you:

1. Grade each live site honestly against an A+ local-business website rubric.
2. Identify the exact code patterns causing the B/B+ ceiling.
3. Patch the builder engine so an operator can paste a prompt/business packet, click **Create Site**, and get a deployed preview without Codex manually designing every site.
4. Make the generated sites feel completely organic and one-of-a-kind:
   - no repeated hero silhouettes,
   - no repeated button grammar,
   - no repeated first-four-section structures,
   - no same-looking tiles/cards across a batch,
   - no SaaS-dashboard feel for brick-and-mortar sites.
5. Upgrade hero composition:
   - use organic/non-rectangular shapes,
   - add 8-12 visible first-viewport layers,
   - include cinematic video or motion background,
   - include remastered/source logo as a major design object,
   - make logos feel designed and integrated, around 72-80 px when appropriate,
   - add local map/geo/proof/service detail in the hero without clutter.
6. Improve source enrichment:
   - search for the business,
   - scrape the current website with Firecrawl,
   - find GBP data when available,
   - extract logo, colors, photos, hours, services, reviews, NAP, and service areas,
   - rescue/remaster images,
   - generate fallback assets only after source media is exhausted.
7. Improve video generation prompts:
   - create Veo/Gemini-style prompts per business,
   - include source details and local service context,
   - avoid generic stock-like landscape clips,
   - keep motion layered, subtle, and cinematic.
8. Add stronger verification gates:
   - screenshot desktop/mobile,
   - compare all five sites for repeated structure,
   - fail if hero shapes are too similar,
   - fail if the logo is weak or too small,
   - fail if no meaningful media/video layer exists,
   - fail if the output looks like a template.

Rules:

- Do not include real secrets.
- Do not invent fake claims, fake reviews, fake awards, or fake certifications.
- Keep preview sites noindex until sold/approved.
- Do not expose internal terms on public sites: kitchen, LeadMiner, Codex, Lovable, proof board, migration, PageHub, or internal build language.
- These are local-business preview sites, not SaaS pages.

Output requested:

- A grade report for the five current sites.
- A patch or PR that improves the builder engine itself.
- A short explanation of exactly why the current outputs are B/B+ and what changed to make them A.
- A repeatable operator flow: prompt/input -> enrichment -> design direction -> build -> QA -> Vercel URL.
- A screenshot-based before/after proof packet.

