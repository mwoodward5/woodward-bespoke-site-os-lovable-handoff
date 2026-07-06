import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dkim-spf-dmarc` — deploy recipe. */
export const dkim_spf_dmarc_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dkim-spf-dmarc", cat: "deploy" }));
