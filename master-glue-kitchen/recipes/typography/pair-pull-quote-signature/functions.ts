import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-pull-quote-signature` — typography recipe. */
export const pair_pull_quote_signature_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-pull-quote-signature", cat: "typography" }));
