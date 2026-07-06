import { createServerFn } from "@tanstack/react-start";
/** Server fn for `product-schema` — geo-aeo recipe. */
export const product_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "product-schema", cat: "geo-aeo" }));
