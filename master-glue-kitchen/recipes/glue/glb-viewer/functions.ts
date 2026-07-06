import { createServerFn } from "@tanstack/react-start";
/** Server fn for `glb-viewer` — glue recipe. */
export const glb_viewer_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "glb-viewer", cat: "glue" }));
