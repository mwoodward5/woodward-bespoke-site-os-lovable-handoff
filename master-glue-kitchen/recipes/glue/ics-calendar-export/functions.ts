import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ics-calendar-export` — glue recipe. */
export const ics_calendar_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ics-calendar-export", cat: "glue" }));
