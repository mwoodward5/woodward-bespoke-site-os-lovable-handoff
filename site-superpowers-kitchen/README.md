# Site Superpowers Kitchen

- **Recipes:** 416 across 11 categories
- **Composed apps:** 24
- **Tokens & config files:** 32
- **Reusable prompt templates:** 200
- **Phrase mappings:** 1000 (curated) / 2496 (exhaustive)

Every recipe ships:
- `component.tsx` — React drop-in
- `functions.ts` — `createServerFn` implementation
- `route.ts` — HTTP route (where applicable)
- `snippet.html` — vanilla fallback
- `env.example`, `sql.sql` (when needed), `variants.md`, `preview.png`
- `README.md` with phrase triggers + refusal criteria + cost tier

## Non-negotiables
- Server-side keys only. `LOVABLE_API_KEY` never touches the client.
- Streaming (SSE) is the default for chat + TTS.
- Long text gets chunked before TTS.
- Every new DB table ships with GRANTs + RLS.
- Every auth-protected server fn uses `requireSupabaseAuth`.
- Reduced-motion honored everywhere.
- Compatible with `razzle-fx-kitchen` — recipes cross-reference visual effects.
