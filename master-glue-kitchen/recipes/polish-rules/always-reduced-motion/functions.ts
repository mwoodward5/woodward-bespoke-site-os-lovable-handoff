import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-reduced-motion` — polish-rules recipe. */
export const always_reduced_motion_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-reduced-motion", cat: "polish-rules" }));
