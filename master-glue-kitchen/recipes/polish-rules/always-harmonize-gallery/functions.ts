import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-harmonize-gallery` — polish-rules recipe. */
export const always_harmonize_gallery_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-harmonize-gallery", cat: "polish-rules" }));
