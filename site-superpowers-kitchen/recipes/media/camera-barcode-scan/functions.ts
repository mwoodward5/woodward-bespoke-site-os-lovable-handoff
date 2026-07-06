import { createServerFn } from "@tanstack/react-start";
/** Server fn for `camera-barcode-scan`. */
export const camera_barcode_scan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "camera-barcode-scan" }));
