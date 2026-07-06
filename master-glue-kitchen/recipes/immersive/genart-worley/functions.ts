import { createServerFn } from "@tanstack/react-start";
/** Server fn for `genart-worley` — immersive recipe. */
export const genart_worley_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "genart-worley", cat: "immersive" }));
