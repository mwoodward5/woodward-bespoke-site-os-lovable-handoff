import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-cursors`. */
export const ws_cursors_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-cursors" }));
