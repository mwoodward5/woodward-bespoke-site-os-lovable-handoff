import { createServerFn } from "@tanstack/react-start";
/** Server fn for `local-nap-consistency` — local-seo recipe. */
export const local_nap_consistency_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "local-nap-consistency", cat: "local-seo" }));
