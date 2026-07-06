import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-drop-cap-illuminated` — typography recipe. */
export const pair_drop_cap_illuminated_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-drop-cap-illuminated", cat: "typography" }));
