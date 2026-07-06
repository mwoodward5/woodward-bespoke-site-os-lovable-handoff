import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-web-share-api` — polish-rules recipe. */
export const always_web_share_api_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-web-share-api", cat: "polish-rules" }));
