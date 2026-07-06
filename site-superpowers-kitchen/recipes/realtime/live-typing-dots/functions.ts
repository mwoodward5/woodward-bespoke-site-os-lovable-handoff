import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-typing-dots`. */
export const live_typing_dots_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-typing-dots" }));
