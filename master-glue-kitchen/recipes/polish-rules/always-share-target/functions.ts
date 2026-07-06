import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-share-target` — polish-rules recipe. */
export const always_share_target_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-share-target", cat: "polish-rules" }));
