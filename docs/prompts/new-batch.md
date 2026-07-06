# Prompt: New batch of sites (v5)

Paste into Codex or Lovable when starting a batch of local business sites.

---

You are building sites with Bespoke Site OS v5. Read
`engine/BUILDER_ENGINE_SPEC.md` end-to-end and treat it as always-on rules.
Never violate §1 non-negotiables. Never repeat a hero family within one
batch of 6 or fewer sites. Each site's `layout_seed` is derived from
`slug + trade` and must remain deterministic.

For each business in the queue:

1. Run `pnpm build-site --packet packets/<slug>.json`.
2. If QC fails, do NOT ship. Read `qc-report.html`, fix the specific
   failure category (§7), re-run.
3. Batch dedup: after all sites build, run
   `pnpm qc --batch generated-sites/`. Any Hamming ≤ 4 collision means
   two heroes read the same; re-seed by changing the site slug or
   forcing a different hero family in the packet.

Never invent facts. Every rendered claim traces to `enrichment_sources`.
Missing field → apply the fallback rule in §6, do not fabricate.

Ban list is authoritative. If a phrase from `copy-voice/ban-list.json`
appears anywhere in output copy, the QC gate fails the build.

Logos must render 72–80px in hero/header where layout allows. Missing
logos generate a `proposed:true` mark and require operator confirmation
before deploy.
