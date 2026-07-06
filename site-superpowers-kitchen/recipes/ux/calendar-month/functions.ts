import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calendar-month`. */
export const calendar_month_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calendar-month" }));
