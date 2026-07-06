import { createServerFn } from "@tanstack/react-start";
/** Server fn for `comments-resolve`. */
export const comments_resolve_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "comments-resolve" }));
