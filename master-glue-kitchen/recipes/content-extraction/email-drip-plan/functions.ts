import { createServerFn } from "@tanstack/react-start";
/** Server fn for `email-drip-plan` — content-extraction recipe. */
export const email_drip_plan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "email-drip-plan", cat: "content-extraction" }));
