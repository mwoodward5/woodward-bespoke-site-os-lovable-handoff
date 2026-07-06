import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-dna-from-logo-and-paragraph` — content-extraction recipe. */
export const brand_dna_from_logo_and_paragraph_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-dna-from-logo-and-paragraph", cat: "content-extraction" }));
