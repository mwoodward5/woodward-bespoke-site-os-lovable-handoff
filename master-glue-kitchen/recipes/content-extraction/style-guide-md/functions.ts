import { createServerFn } from "@tanstack/react-start";
/** Server fn for `style-guide-md` — content-extraction recipe. */
export const style_guide_md_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "style-guide-md", cat: "content-extraction" }));
