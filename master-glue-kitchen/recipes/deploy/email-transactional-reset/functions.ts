import { createServerFn } from "@tanstack/react-start";
/** Server fn for `email-transactional-reset` — deploy recipe. */
export const email_transactional_reset_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "email-transactional-reset", cat: "deploy" }));
