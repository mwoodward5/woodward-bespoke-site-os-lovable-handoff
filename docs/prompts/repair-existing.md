# Prompt: Repair an existing generated site (v5)

Paste into Codex when a v4 or earlier site needs to reach A+.

---

Read `engine/BUILDER_ENGINE_SPEC.md`. Load the existing site's `packet.json`.
Do NOT re-run discover unless the operator says so — trust the existing
enrichment sources. Run stages in this order:

```
rescue → design → build → qc
```

Rescue must remaster the logo (72–80px) and dedup images. Design must
choose a hero family that has NOT already been used in this repair batch.
Build must pass §1 non-negotiables. QC exit 1 on any fail — read
`qc-report.html` and fix the category, not the instance.

If §7 checks fail after 2 retries, escalate to the operator with the
`qc-report.html` link and stop.
