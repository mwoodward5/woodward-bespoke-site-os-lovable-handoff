import { createServerFn } from "@tanstack/react-start";
/** Server fn for `lightning-bolt-shader` — immersive recipe. */
export const lightning_bolt_shader_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "lightning-bolt-shader", cat: "immersive" }));
