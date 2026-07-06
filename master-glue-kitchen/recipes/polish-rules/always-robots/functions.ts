import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-robots` — polish-rules recipe. */
export const always_robots_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-robots", cat: "polish-rules" }));
