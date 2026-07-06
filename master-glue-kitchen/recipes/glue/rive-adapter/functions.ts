import { createServerFn } from "@tanstack/react-start";
/** Server fn for `rive-adapter` — glue recipe. */
export const rive_adapter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "rive-adapter", cat: "glue" }));
