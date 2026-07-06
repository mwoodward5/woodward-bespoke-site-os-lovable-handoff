# Builder Console

Reusable front door for Bespoke Site OS v5. Turns a business packet + prompt
into a built site with zero per-site hand design.

## Run

```bash
pnpm --filter console install
pnpm --filter console dev   # http://localhost:5173
```

## Headless (batch mode)

```bash
pnpm build-site --packet packets/signature-landscape.json
```

Same pipeline, no UI. The console just wraps `pnpm build-site` with an SSE
timeline and an output panel.

## Environment

Copy `.env.example` → `.env.local` and fill:

```
FIRECRAWL_API_KEY=...
LOVABLE_API_KEY=...
VERCEL_DEPLOY_HOOK_URL=...
```

Never commit `.env.local`. See root `APPLY_INSTRUCTIONS.md` §Secrets.

## What the console does

1. Operator fills the form (prompt, business, URLs, source platform, build
   type, toggles).
2. Clicks **Create Site**. Console POSTs `/api/build` with the packet.
3. `/api/build` calls the pipeline stages in order, streaming SSE events for
   the timeline: `discover → scrape → rescue → design → build → qc → deploy`.
4. On completion, the output panel shows:
   - Vercel preview URL (from `07-deploy.mjs`)
   - Screenshots grid (desktop + mobile hero/mid/footer)
   - Letter grade (from `qc-report.json`)
   - Downloadable JSON packet
   - Error log if any stage failed

## Repair mode

Any stage is independently callable via `?stage=design` etc., useful for
rerunning after a copy tweak without a fresh Firecrawl scrape.
