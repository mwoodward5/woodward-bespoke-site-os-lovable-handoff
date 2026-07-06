import { createServerFn } from "@tanstack/react-start";
/** Server fn for `headshot-bg-cleanup` — content-rescue recipe. */
export const headshot_bg_cleanup_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "headshot-bg-cleanup", cat: "content-rescue" }));
