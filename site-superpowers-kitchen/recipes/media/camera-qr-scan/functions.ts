import { createServerFn } from "@tanstack/react-start";
/** Server fn for `camera-qr-scan`. */
export const camera_qr_scan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "camera-qr-scan" }));
