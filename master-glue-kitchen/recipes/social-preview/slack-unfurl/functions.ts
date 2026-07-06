import { createServerFn } from "@tanstack/react-start";
/** Server fn for `slack-unfurl` — social-preview recipe. */
export const slack_unfurl_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "slack-unfurl", cat: "social-preview" }));
