import "./styles.css";
import type { ReactNode } from "react";
/**
 * Water Caustics — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxWaterCaustics({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-water-caustics">
      <div className="rfx-water-caustics__inner">
        {children ?? <h2>Water Caustics</h2>}
      </div>
    </section>
  );
}
export default RfxWaterCaustics;
