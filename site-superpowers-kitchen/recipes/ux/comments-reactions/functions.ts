import { createServerFn } from "@tanstack/react-start";
/** Server fn for `comments-reactions`. */
export const comments_reactions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "comments-reactions" }));
