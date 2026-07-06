import { createServerFn } from "@tanstack/react-start";
/** Server fn for `press-logo-strip` — layouts recipe. */
export const press_logo_strip_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "press-logo-strip", cat: "layouts" }));
