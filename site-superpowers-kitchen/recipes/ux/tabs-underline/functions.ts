import { createServerFn } from "@tanstack/react-start";
/** Server fn for `tabs-underline`. */
export const tabs_underline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "tabs-underline" }));
