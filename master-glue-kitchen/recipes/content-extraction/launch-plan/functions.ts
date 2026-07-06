import { createServerFn } from "@tanstack/react-start";
/** Server fn for `launch-plan` — content-extraction recipe. */
export const launch_plan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "launch-plan", cat: "content-extraction" }));
