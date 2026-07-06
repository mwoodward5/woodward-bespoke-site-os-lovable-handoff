import { createServerFn } from "@tanstack/react-start";
/** Server fn for `robots-txt`. */
export const robots_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "robots-txt" }));
