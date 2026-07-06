import { createServerFn } from "@tanstack/react-start";
/** Server fn for `feedback-widget`. */
export const feedback_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "feedback-widget" }));
