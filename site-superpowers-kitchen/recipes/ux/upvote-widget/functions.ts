import { createServerFn } from "@tanstack/react-start";
/** Server fn for `upvote-widget`. */
export const upvote_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "upvote-widget" }));
