import { createServerFn } from "@tanstack/react-start";
/** Server fn for `review-schema` — geo-aeo recipe. */
export const review_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "review-schema", cat: "geo-aeo" }));
