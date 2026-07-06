import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calendar-week`. */
export const calendar_week_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calendar-week" }));
