import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-copy-link-fallback` — polish-rules recipe. */
export const always_copy_link_fallback_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-copy-link-fallback", cat: "polish-rules" }));
