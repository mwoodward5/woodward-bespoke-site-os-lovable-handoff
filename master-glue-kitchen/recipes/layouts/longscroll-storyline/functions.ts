import { createServerFn } from "@tanstack/react-start";
/** Server fn for `longscroll-storyline` — layouts recipe. */
export const longscroll_storyline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "longscroll-storyline", cat: "layouts" }));
