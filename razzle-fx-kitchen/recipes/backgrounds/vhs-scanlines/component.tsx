import "./styles.css";
import type { ReactNode } from "react";
/**
 * Vhs Scanlines — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxVhsScanlines({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-vhs-scanlines">
      <div className="rfx-vhs-scanlines__inner">
        {children ?? <h2>Vhs Scanlines</h2>}
      </div>
    </section>
  );
}
export default RfxVhsScanlines;
