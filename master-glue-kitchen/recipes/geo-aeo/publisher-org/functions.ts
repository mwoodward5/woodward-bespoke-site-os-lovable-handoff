import { createServerFn } from "@tanstack/react-start";
/** Server fn for `publisher-org` — geo-aeo recipe. */
export const publisher_org_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "publisher-org", cat: "geo-aeo" }));
