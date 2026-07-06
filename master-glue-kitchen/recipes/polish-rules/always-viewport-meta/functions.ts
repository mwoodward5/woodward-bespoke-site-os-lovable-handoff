import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-viewport-meta` — polish-rules recipe. */
export const always_viewport_meta_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-viewport-meta", cat: "polish-rules" }));
