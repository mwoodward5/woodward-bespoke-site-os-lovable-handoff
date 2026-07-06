import { createServerFn } from "@tanstack/react-start";
/** Server fn for `masonry-normalize` — layouts recipe. */
export const masonry_normalize_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "masonry-normalize", cat: "layouts" }));
