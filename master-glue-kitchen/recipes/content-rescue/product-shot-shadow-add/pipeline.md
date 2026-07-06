# Pipeline — Product Shot Shadow Add

Runs at build time. Codex reads this and executes each step against user-provided input.

## Input
- Client-provided assets (see `slot_map` below)

## Steps
1. Detect asset type and quality (dimensions, tone, focal point).
2. If dimensions < 1600px on long edge → upscale via `openai/gpt-image-1-mini` edit path.
3. If noisy → denoise via image-edit prompt ("clean noise, preserve texture").
4. If subject bleeds off frame → outpaint to hero ratio (16:9 or 3:2 depending on layout).
5. If background is cluttered and asset is a logo/subject-only → background-remove.
6. Color-grade to match brand palette from `tokens/palette-*.json` in fx-kitchen.
7. Emit LQIP + BlurHash for progressive loading.
8. Write final to `/public/assets/rescued/<hash>.webp` and record source→final mapping in report.

## Output
Writes final assets under `/public/assets/rescued/` (or specified path) and a JSON report at
`/mnt/documents/product-shot-shadow-add-report.json`.

## Fallback
If AI step fails, keep the original asset and log the failure in the QC report — never ship broken output.

## slot_map
```json
{
  "input": "user_provided",
  "output": "/public/assets/rescued/product-shot-shadow-add"
}
```
