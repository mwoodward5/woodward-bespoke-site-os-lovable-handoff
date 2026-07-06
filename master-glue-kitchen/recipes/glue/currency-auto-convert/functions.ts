import { createServerFn } from "@tanstack/react-start";
/** Server fn for `currency-auto-convert` — glue recipe. */
export const currency_auto_convert_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "currency-auto-convert", cat: "glue" }));
