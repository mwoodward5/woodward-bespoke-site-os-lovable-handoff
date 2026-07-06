import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-presence`. */
export const ws_presence_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-presence" }));
