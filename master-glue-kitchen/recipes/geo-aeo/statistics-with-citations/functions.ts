import { createServerFn } from "@tanstack/react-start";
/** Server fn for `statistics-with-citations` — geo-aeo recipe. */
export const statistics_with_citations_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "statistics-with-citations", cat: "geo-aeo" }));
