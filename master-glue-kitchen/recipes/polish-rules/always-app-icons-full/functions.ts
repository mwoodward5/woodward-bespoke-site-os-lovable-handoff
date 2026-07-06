import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-app-icons-full` — polish-rules recipe. */
export const always_app_icons_full_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-app-icons-full", cat: "polish-rules" }));
