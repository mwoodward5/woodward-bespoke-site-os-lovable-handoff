import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tick Marks — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTickMarks({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tick-marks">
      <div className="rfx-tick-marks__inner">
        {children ?? <h2>Tick Marks</h2>}
      </div>
    </section>
  );
}
export default RfxTickMarks;
