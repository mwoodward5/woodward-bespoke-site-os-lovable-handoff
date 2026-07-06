import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-typewriter` — typography recipe. */
export const kinetic_typewriter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-typewriter", cat: "typography" }));
