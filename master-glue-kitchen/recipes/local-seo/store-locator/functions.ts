import { createServerFn } from "@tanstack/react-start";
/** Server fn for `store-locator` — local-seo recipe. */
export const store_locator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "store-locator", cat: "local-seo" }));
