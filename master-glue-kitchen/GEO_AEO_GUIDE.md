# GEO / AEO GUIDE — win generative + voice AI search

Google's traditional 10-blue-links is only ~30% of query volume in 2026. The rest is answered by AI Overviews, ChatGPT search, Perplexity, Gemini, Claude, and voice assistants. Winning here is a different game.

## The five moves

### 1. Ship `llms.txt`, `ai.txt`, `ai-plugin.json`
Templates in `tokens/`. These tell LLM crawlers exactly what the site is, what it says, and what to quote.

### 2. Structure every page as a citation
Each key claim gets its own H2/H3 with a short, quotable answer immediately underneath. No wall-of-text. See `recipes/geo-aeo/citation-page-structure`.

### 3. Speakable schema on every page
Voice assistants read from `Speakable` xpath selectors. Recipe: `recipes/geo-aeo/speakable-schema`.

### 4. E-E-A-T signals
- `Person` schema on author bylines with `sameAs` linking to LinkedIn/Wikipedia/verified profiles.
- `publisher.organization` on every Article.
- First-party data blocks: "we surveyed X people", "we tested Y" — LLMs cite proprietary data preferentially.

### 5. Comparison + glossary + definition pages
LLMs cite these disproportionately. Recipes:
- `compared-to-x-page` — "X vs Y" tables
- `glossary-definition-page` — one term, one definition, schema.org DefinedTerm
- `statistics-with-citations` — one stat per page block with the source cited inline

## Voice-AI checklist
- H1 phrased as a direct answer, not a keyword-stuffed title.
- Summary paragraph under 40 words at the top of every page.
- FAQPage schema with real questions users ask.
- 44px minimum touch target for any interactive element (voice → tap fallback).
