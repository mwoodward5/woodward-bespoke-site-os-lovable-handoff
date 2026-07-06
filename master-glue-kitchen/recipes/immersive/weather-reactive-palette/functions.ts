import { createServerFn } from "@tanstack/react-start";
/** Server fn for `weather-reactive-palette` — immersive recipe. */
export const weather_reactive_palette_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "weather-reactive-palette", cat: "immersive" }));
