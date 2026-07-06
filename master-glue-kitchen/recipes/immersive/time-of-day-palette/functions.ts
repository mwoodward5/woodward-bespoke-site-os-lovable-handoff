import { createServerFn } from "@tanstack/react-start";
/** Server fn for `time-of-day-palette` — immersive recipe. */
export const time_of_day_palette_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "time-of-day-palette", cat: "immersive" }));
