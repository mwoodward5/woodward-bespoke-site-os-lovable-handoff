import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-whiteboard-scaffold`. */
export const ws_whiteboard_scaffold_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-whiteboard-scaffold" }));
