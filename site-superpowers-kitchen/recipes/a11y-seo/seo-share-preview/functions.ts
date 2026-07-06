import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-share-preview`. */
export const seo_share_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-share-preview" }));
