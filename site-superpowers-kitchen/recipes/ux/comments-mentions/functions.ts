import { createServerFn } from "@tanstack/react-start";
/** Server fn for `comments-mentions`. */
export const comments_mentions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "comments-mentions" }));
