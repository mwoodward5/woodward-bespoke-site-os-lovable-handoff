import { createServerFn } from "@tanstack/react-start";
/** Server fn for `citation-page-structure` — geo-aeo recipe. */
export const citation_page_structure_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "citation-page-structure", cat: "geo-aeo" }));
