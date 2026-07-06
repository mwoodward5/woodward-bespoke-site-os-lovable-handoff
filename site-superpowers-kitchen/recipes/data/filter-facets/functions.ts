import { createServerFn } from "@tanstack/react-start";
/** Server fn for `filter-facets`. */
export const filter_facets_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "filter-facets" }));
