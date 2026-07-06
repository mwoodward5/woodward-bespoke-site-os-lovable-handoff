import { createServerFn } from "@tanstack/react-start";
/** Server fn for `threejs-hero` — immersive recipe. */
export const threejs_hero_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "threejs-hero", cat: "immersive" }));
