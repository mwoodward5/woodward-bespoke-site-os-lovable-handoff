import { createServerFn } from "@tanstack/react-start";
/** Server fn for `tabs-pills`. */
export const tabs_pills_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "tabs-pills" }));
