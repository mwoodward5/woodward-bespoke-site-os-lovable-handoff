import { createServerFn } from "@tanstack/react-start";
/** Server fn for `comparison-table-aiquote` — geo-aeo recipe. */
export const comparison_table_aiquote_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "comparison-table-aiquote", cat: "geo-aeo" }));
