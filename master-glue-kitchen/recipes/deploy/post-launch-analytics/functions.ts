import { createServerFn } from "@tanstack/react-start";
/** Server fn for `post-launch-analytics` — deploy recipe. */
export const post_launch_analytics_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "post-launch-analytics", cat: "deploy" }));
