import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-empty-state` — polish-rules recipe. */
export const always_empty_state_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-empty-state", cat: "polish-rules" }));
