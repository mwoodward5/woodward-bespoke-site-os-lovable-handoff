import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cron-daily`. */
export const cron_daily_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cron-daily" }));
