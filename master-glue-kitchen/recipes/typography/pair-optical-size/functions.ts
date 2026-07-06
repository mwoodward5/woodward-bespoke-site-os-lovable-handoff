import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-optical-size` — typography recipe. */
export const pair_optical_size_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-optical-size", cat: "typography" }));
