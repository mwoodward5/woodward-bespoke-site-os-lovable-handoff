import { createServerFn } from "@tanstack/react-start";
/** Server fn for `framer-adapter` — glue recipe. */
export const framer_adapter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "framer-adapter", cat: "glue" }));
