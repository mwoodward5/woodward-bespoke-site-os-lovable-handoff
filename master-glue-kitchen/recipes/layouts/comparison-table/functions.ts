import { createServerFn } from "@tanstack/react-start";
/** Server fn for `comparison-table` — layouts recipe. */
export const comparison_table_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "comparison-table", cat: "layouts" }));
