import { createServerFn } from "@tanstack/react-start";
/** Server fn for `website-schema` — geo-aeo recipe. */
export const website_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "website-schema", cat: "geo-aeo" }));
