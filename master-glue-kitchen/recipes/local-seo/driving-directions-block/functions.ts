import { createServerFn } from "@tanstack/react-start";
/** Server fn for `driving-directions-block` — local-seo recipe. */
export const driving_directions_block_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "driving-directions-block", cat: "local-seo" }));
