import { createServerFn } from "@tanstack/react-start";
/** Server fn for `segment-adapter` — glue recipe. */
export const segment_adapter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "segment-adapter", cat: "glue" }));
