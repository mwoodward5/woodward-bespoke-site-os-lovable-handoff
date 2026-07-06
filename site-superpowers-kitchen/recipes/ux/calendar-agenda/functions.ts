import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calendar-agenda`. */
export const calendar_agenda_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calendar-agenda" }));
