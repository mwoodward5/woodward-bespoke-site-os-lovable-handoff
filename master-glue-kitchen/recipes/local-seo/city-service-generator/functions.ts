import { createServerFn } from "@tanstack/react-start";
/** Server fn for `city-service-generator` — local-seo recipe. */
export const city_service_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "city-service-generator", cat: "local-seo" }));
