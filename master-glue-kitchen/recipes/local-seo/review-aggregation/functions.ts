import { createServerFn } from "@tanstack/react-start";
/** Server fn for `review-aggregation` — local-seo recipe. */
export const review_aggregation_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "review-aggregation", cat: "local-seo" }));
