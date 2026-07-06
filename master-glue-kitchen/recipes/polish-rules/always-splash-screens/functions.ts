import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-splash-screens` — polish-rules recipe. */
export const always_splash_screens_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-splash-screens", cat: "polish-rules" }));
