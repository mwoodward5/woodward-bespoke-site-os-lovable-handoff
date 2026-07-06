import { createServerFn } from "@tanstack/react-start";
/** Server fn for `vertical-rhythm-baseline` — typography recipe. */
export const vertical_rhythm_baseline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "vertical-rhythm-baseline", cat: "typography" }));
