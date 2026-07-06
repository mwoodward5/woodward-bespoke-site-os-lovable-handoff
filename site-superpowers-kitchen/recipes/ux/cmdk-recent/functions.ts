import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cmdk-recent`. */
export const cmdk_recent_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cmdk-recent" }));
