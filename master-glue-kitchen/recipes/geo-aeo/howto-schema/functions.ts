import { createServerFn } from "@tanstack/react-start";
/** Server fn for `howto-schema` — geo-aeo recipe. */
export const howto_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "howto-schema", cat: "geo-aeo" }));
