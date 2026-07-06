import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bio-to-hero` — content-extraction recipe. */
export const bio_to_hero_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bio-to-hero", cat: "content-extraction" }));
