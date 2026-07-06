import "./styles.css";
import type { ReactNode } from "react";
/**
 * Registration Marks V2 — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxRegistrationMarksV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-registration-marks-v2">
      <div className="rfx-registration-marks-v2__inner">
        {children ?? <h2>Registration Marks V2</h2>}
      </div>
    </section>
  );
}
export default RfxRegistrationMarksV2;
