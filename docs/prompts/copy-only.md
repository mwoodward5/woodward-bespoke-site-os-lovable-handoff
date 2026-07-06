# Prompt: Copy rewrite only (v5)

Use when structure and assets are fine but copy sounds generator-voiced.

---

Load `packet.json` + rendered HTML. Sweep for any phrase in
`copy-voice/ban-list.json`. For each hit, use the matching prompt in
`copy-voice/rewrite-prompts/` to produce a replacement in the
`voice_persona.tone`, drawing from `voice_persona.first_person_snippets`.

Never invent facts. Every substituted claim must trace to
`enrichment_sources`. If no source exists for the claim, delete the
sentence.

Re-run `qc-audit/copy-ban-scan.mjs` and `qc-audit/enrichment.mjs` until both
pass.
