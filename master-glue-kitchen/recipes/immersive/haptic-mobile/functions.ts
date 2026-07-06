import { createServerFn } from "@tanstack/react-start";
/** Server fn for `haptic-mobile` — immersive recipe. */
export const haptic_mobile_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "haptic-mobile", cat: "immersive" }));
