import { createServerFn } from "@tanstack/react-start";
/** Server fn for `fireworks-canvas` — immersive recipe. */
export const fireworks_canvas_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "fireworks-canvas", cat: "immersive" }));
