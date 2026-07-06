import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cmdk-actions`. */
export const cmdk_actions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cmdk-actions" }));
