import "./styles.css";
import type { ReactNode } from "react";
/**
 * Registration Marks — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRegistrationMarks({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-registration-marks">
      <div className="rfx-registration-marks__inner">
        {children ?? <h2>Registration Marks</h2>}
      </div>
    </section>
  );
}
export default RfxRegistrationMarks;
