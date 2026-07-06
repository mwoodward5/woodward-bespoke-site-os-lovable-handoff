import { createServerFn } from "@tanstack/react-start";
/** Server fn for `webxr-button` — immersive recipe. */
export const webxr_button_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "webxr-button", cat: "immersive" }));
