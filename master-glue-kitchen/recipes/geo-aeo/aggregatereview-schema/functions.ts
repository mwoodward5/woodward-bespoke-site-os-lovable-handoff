import { createServerFn } from "@tanstack/react-start";
/** Server fn for `aggregatereview-schema` — geo-aeo recipe. */
export const aggregatereview_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "aggregatereview-schema", cat: "geo-aeo" }));
