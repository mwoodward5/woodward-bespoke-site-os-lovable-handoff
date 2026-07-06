import { createServerFn } from "@tanstack/react-start";
/** Server fn for `local-citations-list` — local-seo recipe. */
export const local_citations_list_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "local-citations-list", cat: "local-seo" }));
