import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cursor-trails` — immersive recipe. */
export const cursor_trails_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cursor-trails", cat: "immersive" }));
