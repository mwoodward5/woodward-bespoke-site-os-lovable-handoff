import "./styles.css";
import type { ReactNode } from "react";
/**
 * Radar Sweep — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRadarSweep({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-radar-sweep">
      <div className="rfx-radar-sweep__inner">
        {children ?? <h2>Radar Sweep</h2>}
      </div>
    </section>
  );
}
export default RfxRadarSweep;
