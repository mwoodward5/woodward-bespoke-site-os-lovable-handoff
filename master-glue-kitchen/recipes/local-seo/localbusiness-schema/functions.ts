import { createServerFn } from "@tanstack/react-start";
/** Server fn for `localbusiness-schema` — local-seo recipe. */
export const localbusiness_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "localbusiness-schema", cat: "local-seo" }));
