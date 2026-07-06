import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tally Marks — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTallyMarks({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tally-marks">
      <div className="rfx-tally-marks__inner">
        {children ?? <h2>Tally Marks</h2>}
      </div>
    </section>
  );
}
export default RfxTallyMarks;
