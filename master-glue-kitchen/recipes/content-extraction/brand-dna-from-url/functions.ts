import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-dna-from-url` — content-extraction recipe. */
export const brand_dna_from_url_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-dna-from-url", cat: "content-extraction" }));
