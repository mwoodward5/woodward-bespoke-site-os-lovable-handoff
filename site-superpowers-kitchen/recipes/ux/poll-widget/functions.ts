import { createServerFn } from "@tanstack/react-start";
/** Server fn for `poll-widget`. */
export const poll_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "poll-widget" }));
