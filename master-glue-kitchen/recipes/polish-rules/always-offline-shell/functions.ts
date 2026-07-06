import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-offline-shell` — polish-rules recipe. */
export const always_offline_shell_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-offline-shell", cat: "polish-rules" }));
