import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dns-records` — deploy recipe. */
export const dns_records_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dns-records", cat: "deploy" }));
