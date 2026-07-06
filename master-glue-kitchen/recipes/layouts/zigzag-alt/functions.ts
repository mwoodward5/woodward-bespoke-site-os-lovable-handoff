import { createServerFn } from "@tanstack/react-start";
/** Server fn for `zigzag-alt` — layouts recipe. */
export const zigzag_alt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "zigzag-alt", cat: "layouts" }));
