import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cron-hourly`. */
export const cron_hourly_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cron-hourly" }));
