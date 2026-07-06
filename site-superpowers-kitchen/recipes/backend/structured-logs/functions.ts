import { createServerFn } from "@tanstack/react-start";
/** Server fn for `structured-logs`. */
export const structured_logs_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "structured-logs" }));
