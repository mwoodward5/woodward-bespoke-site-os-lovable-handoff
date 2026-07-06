import { createServerFn } from "@tanstack/react-start";
/** Server fn for `crm-webhook` — glue recipe. */
export const crm_webhook_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "crm-webhook", cat: "glue" }));
