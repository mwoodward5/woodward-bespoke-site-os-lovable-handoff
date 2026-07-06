import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-error-state` — polish-rules recipe. */
export const always_error_state_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-error-state", cat: "polish-rules" }));
