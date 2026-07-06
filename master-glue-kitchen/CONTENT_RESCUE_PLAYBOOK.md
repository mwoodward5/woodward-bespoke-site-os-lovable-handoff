# CONTENT RESCUE PLAYBOOK

## When to run
Every new site build, before generating routes.

## The four rescue tracks

### 1. Photo rescue
1. Detect: dimensions, EXIF tone, subject bounding box, background clutter.
2. Fix: upscale to ≥1600px on long edge, denoise, color-grade to brand palette, outpaint to hero ratio if needed, smart-crop to rule-of-thirds around the detected subject.
3. Emit: WebP + AVIF, LQIP + BlurHash, alt text via AI.
4. Report: `source → final` mapping, quality score, any fallbacks.

### 2. Gallery rescue
1. Group photos by subject.
2. Normalize aspect ratios to a single visual language (e.g. all 4:3).
3. Tone-unify (match white balance + contrast to the strongest photo).
4. Perceptual-hash dedupe near-identical shots.
5. Reorder for visual rhythm (avoid two similar photos side-by-side).

### 3. Logo rescue
1. If raster and monochrome-safe → vectorize.
2. Normalize padding (10% negative-space rule).
3. Generate lockups: horizontal, stacked, mark-only, monochrome, reversed.
4. Generate favicon set (12 files) from the mark.

### 4. Content extraction
1. Parse client input (paragraph, PDF, CSV, URL).
2. Extract: brand name, one-liner, services, hours, address, phone, testimonials, FAQ.
3. Fill missing slots with `[NEEDS INPUT]` markers, never with fabrication.
4. Emit meta tags, JSON-LD, sitemap fragment, alt text pool.

## Fallback rule
If any AI step fails, keep the original asset, log the failure, ship the site with a QC-report flag — never ship broken output.
