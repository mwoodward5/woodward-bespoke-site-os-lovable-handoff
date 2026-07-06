import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scale-golden` — typography recipe. */
export const scale_golden_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scale-golden", cat: "typography" }));
