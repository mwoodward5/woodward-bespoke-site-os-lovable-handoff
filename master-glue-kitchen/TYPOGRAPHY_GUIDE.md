# TYPOGRAPHY GUIDE

## Pick from `tokens/font-pairs.json`
26 curated pairs. Each has a `heading` and `body` stack. Match to the brand archetype:
- Editorial / boutique → serif pairs
- Industrial / SaaS → grotesk / mono
- Magazine / longform → display serif + humanist body
- Cyber / tech → mono heading + geometric body

## Scale
Pick from `tokens/type-scales.json`. Default: perfect-fourth for editorial, major-second for utility.

## Fluid type
Use `clamp(min, preferred, max)` for every heading — never fixed pixel sizes. Baseline formula:
```css
font-size: clamp(1.75rem, 0.75rem + 4vw, 3.5rem);
```

## OpenType features
Every recipe under `recipes/typography/opentype-*` shows how to enable ligatures, tabular nums, small caps, stylistic sets, fractions.

## Cross-language
Never ship a Latin-only font stack for a site with CJK/Arabic/Devanagari content. Use the `cjk-safe`, `arabic-rtl`, `devanagari` pairs.
