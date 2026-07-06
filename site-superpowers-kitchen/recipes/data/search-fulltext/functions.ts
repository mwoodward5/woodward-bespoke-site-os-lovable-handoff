import { createServerFn } from "@tanstack/react-start";
/** Server fn for `search-fulltext`. */
export const search_fulltext_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "search-fulltext" }));
