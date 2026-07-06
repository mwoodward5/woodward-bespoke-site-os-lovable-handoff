import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calendar-ics-export`. */
export const calendar_ics_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calendar-ics-export" }));
