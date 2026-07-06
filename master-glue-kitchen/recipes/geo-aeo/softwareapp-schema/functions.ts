import { createServerFn } from "@tanstack/react-start";
/** Server fn for `softwareapp-schema` — geo-aeo recipe. */
export const softwareapp_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "softwareapp-schema", cat: "geo-aeo" }));
