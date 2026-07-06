import { createServerFn } from "@tanstack/react-start";
/** Server fn for `qr-generator` — glue recipe. */
export const qr_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "qr-generator", cat: "glue" }));
