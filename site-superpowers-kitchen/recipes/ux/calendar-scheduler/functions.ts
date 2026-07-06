import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calendar-scheduler`. */
export const calendar_scheduler_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calendar-scheduler" }));
