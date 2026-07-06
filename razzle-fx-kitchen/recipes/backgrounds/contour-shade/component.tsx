import "./styles.css";
import type { ReactNode } from "react";
/**
 * Contour Shade — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxContourShade({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-contour-shade">
      <div className="rfx-contour-shade__inner">
        {children ?? <h2>Contour Shade</h2>}
      </div>
    </section>
  );
}
export default RfxContourShade;
