import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-mood-extract` — content-rescue recipe. */
export const brand_mood_extract_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-mood-extract", cat: "content-rescue" }));
