import { createServerFn } from "@tanstack/react-start";
/** Server fn for `breadcrumb-schema` — geo-aeo recipe. */
export const breadcrumb_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "breadcrumb-schema", cat: "geo-aeo" }));
