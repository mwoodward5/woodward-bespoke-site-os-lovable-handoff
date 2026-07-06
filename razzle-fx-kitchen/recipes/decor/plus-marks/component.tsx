import "./styles.css";
import type { ReactNode } from "react";
/**
 * Plus Marks — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPlusMarks({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-plus-marks">
      <div className="rfx-plus-marks__inner">
        {children ?? <h2>Plus Marks</h2>}
      </div>
    </section>
  );
}
export default RfxPlusMarks;
