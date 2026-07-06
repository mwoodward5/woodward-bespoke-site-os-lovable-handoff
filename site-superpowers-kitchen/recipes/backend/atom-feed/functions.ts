import { createServerFn } from "@tanstack/react-start";
/** Server fn for `atom-feed`. */
export const atom_feed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "atom-feed" }));
