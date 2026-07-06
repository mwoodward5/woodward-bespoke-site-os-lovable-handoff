import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-og-image`. */
export const seo_og_image_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-og-image" }));
