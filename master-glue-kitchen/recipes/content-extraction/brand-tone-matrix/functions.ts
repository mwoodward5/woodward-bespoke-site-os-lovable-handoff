import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-tone-matrix` — content-extraction recipe. */
export const brand_tone_matrix_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-tone-matrix", cat: "content-extraction" }));
