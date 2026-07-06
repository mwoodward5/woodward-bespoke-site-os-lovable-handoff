import { createServerFn } from "@tanstack/react-start";
/** Server fn for `incident-template` — deploy recipe. */
export const incident_template_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "incident-template", cat: "deploy" }));
