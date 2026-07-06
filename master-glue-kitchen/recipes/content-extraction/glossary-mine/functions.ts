import { createServerFn } from "@tanstack/react-start";
/** Server fn for `glossary-mine` — content-extraction recipe. */
export const glossary_mine_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "glossary-mine", cat: "content-extraction" }));
