import { createServerFn } from "@tanstack/react-start";
/** Server fn for `touch-target-mobile` — qc-audit recipe. */
export const touch_target_mobile_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "touch-target-mobile", cat: "qc-audit" }));
