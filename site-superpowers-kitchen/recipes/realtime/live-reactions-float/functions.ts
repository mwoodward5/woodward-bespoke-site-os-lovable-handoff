import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-reactions-float`. */
export const live_reactions_float_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-reactions-float" }));
