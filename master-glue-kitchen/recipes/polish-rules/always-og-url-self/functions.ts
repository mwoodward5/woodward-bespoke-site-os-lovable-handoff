import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-og-url-self` — polish-rules recipe. */
export const always_og_url_self_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-og-url-self", cat: "polish-rules" }));
