import { createServerFn } from "@tanstack/react-start";
/** Server fn for `service-area-schema` — local-seo recipe. */
export const service_area_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "service-area-schema", cat: "local-seo" }));
