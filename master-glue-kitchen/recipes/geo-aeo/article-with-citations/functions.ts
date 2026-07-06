import { createServerFn } from "@tanstack/react-start";
/** Server fn for `article-with-citations` — geo-aeo recipe. */
export const article_with_citations_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "article-with-citations", cat: "geo-aeo" }));
