import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-split-flap` — typography recipe. */
export const kinetic_split_flap_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-split-flap", cat: "typography" }));
