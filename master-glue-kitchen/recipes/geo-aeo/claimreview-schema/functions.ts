import { createServerFn } from "@tanstack/react-start";
/** Server fn for `claimreview-schema` — geo-aeo recipe. */
export const claimreview_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "claimreview-schema", cat: "geo-aeo" }));
