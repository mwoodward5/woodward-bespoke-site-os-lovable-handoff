import { createServerFn } from "@tanstack/react-start";
/** Server fn for `google-reviews-import` — glue recipe. */
export const google_reviews_import_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "google-reviews-import", cat: "glue" }));
