import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ready-check`. */
export const ready_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ready-check" }));
