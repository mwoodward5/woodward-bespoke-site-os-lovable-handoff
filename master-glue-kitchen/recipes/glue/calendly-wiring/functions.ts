import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calendly-wiring` — glue recipe. */
export const calendly_wiring_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calendly-wiring", cat: "glue" }));
