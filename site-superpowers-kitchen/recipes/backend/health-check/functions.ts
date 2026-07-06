import { createServerFn } from "@tanstack/react-start";
/** Server fn for `health-check`. */
export const health_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "health-check" }));
