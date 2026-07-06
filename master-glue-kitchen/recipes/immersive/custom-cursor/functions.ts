import { createServerFn } from "@tanstack/react-start";
/** Server fn for `custom-cursor` — immersive recipe. */
export const custom_cursor_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "custom-cursor", cat: "immersive" }));
