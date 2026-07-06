import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-script-plus-neutral` — typography recipe. */
export const pair_script_plus_neutral_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-script-plus-neutral", cat: "typography" }));
