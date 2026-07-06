import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-sitemap` — polish-rules recipe. */
export const always_sitemap_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-sitemap", cat: "polish-rules" }));
