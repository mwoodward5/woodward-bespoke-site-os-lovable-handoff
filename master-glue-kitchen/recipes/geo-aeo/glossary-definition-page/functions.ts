import { createServerFn } from "@tanstack/react-start";
/** Server fn for `glossary-definition-page` — geo-aeo recipe. */
export const glossary_definition_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "glossary-definition-page", cat: "geo-aeo" }));
