import "./styles.css";
import type { ReactNode } from "react";
/**
 * Earthquake — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxEarthquake({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-earthquake">
      <div className="rfx-earthquake__inner">
        {children ?? <h2>Earthquake</h2>}
      </div>
    </section>
  );
}
export default RfxEarthquake;
