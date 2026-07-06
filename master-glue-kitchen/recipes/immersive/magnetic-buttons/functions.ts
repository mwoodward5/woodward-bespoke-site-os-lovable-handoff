import { createServerFn } from "@tanstack/react-start";
/** Server fn for `magnetic-buttons` — immersive recipe. */
export const magnetic_buttons_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "magnetic-buttons", cat: "immersive" }));
