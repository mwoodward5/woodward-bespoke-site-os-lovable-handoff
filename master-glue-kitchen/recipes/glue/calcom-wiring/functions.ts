import { createServerFn } from "@tanstack/react-start";
/** Server fn for `calcom-wiring` — glue recipe. */
export const calcom_wiring_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "calcom-wiring", cat: "glue" }));
