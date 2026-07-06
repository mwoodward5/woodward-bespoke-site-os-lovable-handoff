import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-morph` — typography recipe. */
export const kinetic_morph_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-morph", cat: "typography" }));
