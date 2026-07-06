import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-live-comments`. */
export const ws_live_comments_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-live-comments" }));
