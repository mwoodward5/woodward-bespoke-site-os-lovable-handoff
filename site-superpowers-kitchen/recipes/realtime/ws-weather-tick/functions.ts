import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-weather-tick`. */
export const ws_weather_tick_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-weather-tick" }));
