import { createServerFn } from "@tanstack/react-start";
/** Server fn for `email-transactional-verify` — deploy recipe. */
export const email_transactional_verify_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "email-transactional-verify", cat: "deploy" }));
