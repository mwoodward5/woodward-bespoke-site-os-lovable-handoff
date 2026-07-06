import { createServerFn } from "@tanstack/react-start";
/** Server fn for `reactions-widget`. */
export const reactions_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "reactions-widget" }));
