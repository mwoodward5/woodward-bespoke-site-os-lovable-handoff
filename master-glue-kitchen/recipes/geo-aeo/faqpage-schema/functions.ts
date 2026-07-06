import { createServerFn } from "@tanstack/react-start";
/** Server fn for `faqpage-schema` — geo-aeo recipe. */
export const faqpage_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "faqpage-schema", cat: "geo-aeo" }));
