import { createServerFn } from "@tanstack/react-start";
/** Server fn for `person-eeat` — geo-aeo recipe. */
export const person_eeat_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "person-eeat", cat: "geo-aeo" }));
