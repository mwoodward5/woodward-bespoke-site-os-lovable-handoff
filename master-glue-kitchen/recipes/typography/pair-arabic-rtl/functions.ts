import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-arabic-rtl` — typography recipe. */
export const pair_arabic_rtl_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-arabic-rtl", cat: "typography" }));
