import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-parallax` — typography recipe. */
export const kinetic_parallax_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-parallax", cat: "typography" }));
