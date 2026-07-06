import { createServerFn } from "@tanstack/react-start";
/** Server fn for `chat-bubble-launcher`. */
export const chat_bubble_launcher_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "chat-bubble-launcher" }));
