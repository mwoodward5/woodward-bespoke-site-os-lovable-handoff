import { createServerFn } from "@tanstack/react-start";
/** Server fn for `headshot-restyle-editorial` — content-rescue recipe. */
export const headshot_restyle_editorial_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "headshot-restyle-editorial", cat: "content-rescue" }));
