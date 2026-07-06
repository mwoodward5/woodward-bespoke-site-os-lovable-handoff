import { createServerFn } from "@tanstack/react-start";
/** Server fn for `gallery-aspect-harmonize-layout` — layouts recipe. */
export const gallery_aspect_harmonize_layout_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "gallery-aspect-harmonize-layout", cat: "layouts" }));
