import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-focus-ring` — polish-rules recipe. */
export const always_focus_ring_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-focus-ring", cat: "polish-rules" }));
