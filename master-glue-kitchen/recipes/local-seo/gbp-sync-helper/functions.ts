import { createServerFn } from "@tanstack/react-start";
/** Server fn for `gbp-sync-helper` — local-seo recipe. */
export const gbp_sync_helper_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "gbp-sync-helper", cat: "local-seo" }));
