import { createServerFn } from "@tanstack/react-start";
/** Server fn for `qapage-schema` — geo-aeo recipe. */
export const qapage_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "qapage-schema", cat: "geo-aeo" }));
