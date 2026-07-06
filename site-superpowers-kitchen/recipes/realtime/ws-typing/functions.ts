import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-typing`. */
export const ws_typing_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-typing" }));
