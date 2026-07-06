import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-chat-room`. */
export const live_chat_room_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-chat-room" }));
