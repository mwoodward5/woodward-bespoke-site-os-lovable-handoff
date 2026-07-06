import { createServerFn } from "@tanstack/react-start";
/** Server fn for `webhook-github`. */
export const webhook_github_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "webhook-github" }));
