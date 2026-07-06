import { createServerFn } from "@tanstack/react-start";
/** Server fn for `audit-log-table`. */
export const audit_log_table_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "audit-log-table" }));
