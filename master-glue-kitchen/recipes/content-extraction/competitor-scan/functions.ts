import { createServerFn } from "@tanstack/react-start";
/** Server fn for `competitor-scan` — content-extraction recipe. */
export const competitor_scan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "competitor-scan", cat: "content-extraction" }));
