import { createServerFn } from "@tanstack/react-start";
/** Server fn for `salesforce-adapter` — glue recipe. */
export const salesforce_adapter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "salesforce-adapter", cat: "glue" }));
