import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sitemap-suggest` — content-extraction recipe. */
export const sitemap_suggest_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sitemap-suggest", cat: "content-extraction" }));
