import { createServerFn } from "@tanstack/react-start";
/** Server fn for `first-party-data-block` — geo-aeo recipe. */
export const first_party_data_block_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "first-party-data-block", cat: "geo-aeo" }));
