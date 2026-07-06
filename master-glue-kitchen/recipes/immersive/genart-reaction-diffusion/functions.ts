import { createServerFn } from "@tanstack/react-start";
/** Server fn for `genart-reaction-diffusion` — immersive recipe. */
export const genart_reaction_diffusion_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "genart-reaction-diffusion", cat: "immersive" }));
