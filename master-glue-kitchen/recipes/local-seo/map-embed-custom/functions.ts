import { createServerFn } from "@tanstack/react-start";
/** Server fn for `map-embed-custom` — local-seo recipe. */
export const map_embed_custom_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "map-embed-custom", cat: "local-seo" }));
