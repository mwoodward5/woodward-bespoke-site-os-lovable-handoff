import { createServerFn } from "@tanstack/react-start";
/** Server fn for `web-push-setup` — glue recipe. */
export const web_push_setup_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "web-push-setup", cat: "glue" }));
