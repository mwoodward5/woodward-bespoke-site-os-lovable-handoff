import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cron-pg-cron`. */
export const cron_pg_cron_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cron-pg-cron" }));
