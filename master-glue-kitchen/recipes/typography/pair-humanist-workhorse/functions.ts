import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-humanist-workhorse` — typography recipe. */
export const pair_humanist_workhorse_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-humanist-workhorse", cat: "typography" }));
