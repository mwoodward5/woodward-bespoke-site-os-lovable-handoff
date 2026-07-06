import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-shuffle` — typography recipe. */
export const kinetic_shuffle_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-shuffle", cat: "typography" }));
