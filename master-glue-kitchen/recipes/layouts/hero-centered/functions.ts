import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hero-centered` — layouts recipe. */
export const hero_centered_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hero-centered", cat: "layouts" }));
