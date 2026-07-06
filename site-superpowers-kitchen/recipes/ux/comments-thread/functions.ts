import { createServerFn } from "@tanstack/react-start";
/** Server fn for `comments-thread`. */
export const comments_thread_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "comments-thread" }));
