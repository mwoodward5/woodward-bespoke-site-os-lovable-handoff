import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-hreflang`. */
export const seo_hreflang_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-hreflang" }));
