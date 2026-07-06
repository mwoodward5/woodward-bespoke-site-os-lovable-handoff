import "./styles.css";
import type { ReactNode } from "react";
/**
 * Radar Trace — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRadarTrace({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-radar-trace">
      <div className="rfx-radar-trace__inner">
        {children ?? <h2>Radar Trace</h2>}
      </div>
    </section>
  );
}
export default RfxRadarTrace;
