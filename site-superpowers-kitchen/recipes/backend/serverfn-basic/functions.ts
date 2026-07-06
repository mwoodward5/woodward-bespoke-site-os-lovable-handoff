import { createServerFn } from "@tanstack/react-start";
/** Server fn for `serverfn-basic`. */
export const serverfn_basic_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "serverfn-basic" }));
