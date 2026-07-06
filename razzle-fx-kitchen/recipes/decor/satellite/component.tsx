import "./styles.css";
import type { ReactNode } from "react";
/**
 * Satellite — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxSatellite({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-satellite">
      <div className="rfx-satellite__inner">
        {children ?? <h2>Satellite</h2>}
      </div>
    </section>
  );
}
export default RfxSatellite;
