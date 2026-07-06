import { createServerFn } from "@tanstack/react-start";
/** Server fn for `feature-flags`. */
export const feature_flags_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "feature-flags" }));
