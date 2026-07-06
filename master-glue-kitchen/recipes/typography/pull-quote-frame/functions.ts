import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pull-quote-frame` — typography recipe. */
export const pull_quote_frame_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pull-quote-frame", cat: "typography" }));
