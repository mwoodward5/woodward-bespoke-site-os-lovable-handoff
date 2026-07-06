import { createServerFn } from "@tanstack/react-start";
/** Server fn for `broken-link-crawler` — qc-audit recipe. */
export const broken_link_crawler_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "broken-link-crawler", cat: "qc-audit" }));
