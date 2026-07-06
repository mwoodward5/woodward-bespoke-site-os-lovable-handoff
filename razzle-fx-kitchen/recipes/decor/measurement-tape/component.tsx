import "./styles.css";
import type { ReactNode } from "react";
/**
 * Measurement Tape — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxMeasurementTape({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-measurement-tape">
      <div className="rfx-measurement-tape__inner">
        {children ?? <h2>Measurement Tape</h2>}
      </div>
    </section>
  );
}
export default RfxMeasurementTape;
