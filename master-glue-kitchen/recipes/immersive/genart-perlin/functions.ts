import { createServerFn } from "@tanstack/react-start";
/** Server fn for `genart-perlin` — immersive recipe. */
export const genart_perlin_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "genart-perlin", cat: "immersive" }));
