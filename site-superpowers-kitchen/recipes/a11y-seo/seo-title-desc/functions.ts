import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-title-desc`. */
export const seo_title_desc_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-title-desc" }));
