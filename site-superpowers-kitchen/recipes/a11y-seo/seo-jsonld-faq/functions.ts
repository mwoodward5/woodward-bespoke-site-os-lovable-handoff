import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-jsonld-faq`. */
export const seo_jsonld_faq_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-jsonld-faq" }));
