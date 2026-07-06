import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cookie-scan` — legal recipe. */
export const cookie_scan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cookie-scan", cat: "legal" }));
