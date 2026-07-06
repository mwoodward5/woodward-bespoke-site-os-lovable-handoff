import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-poster` — typography recipe. */
export const kinetic_poster_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-poster", cat: "typography" }));
