import { createServerFn } from "@tanstack/react-start";
/** Server fn for `countdown-timer` — glue recipe. */
export const countdown_timer_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "countdown-timer", cat: "glue" }));
