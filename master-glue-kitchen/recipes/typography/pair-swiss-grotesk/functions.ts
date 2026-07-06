import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-swiss-grotesk` — typography recipe. */
export const pair_swiss_grotesk_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-swiss-grotesk", cat: "typography" }));
