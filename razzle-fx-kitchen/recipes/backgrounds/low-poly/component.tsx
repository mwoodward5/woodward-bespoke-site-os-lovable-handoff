import "./styles.css";
import type { ReactNode } from "react";
/**
 * Low Poly — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLowPoly({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-low-poly">
      <div className="rfx-low-poly__inner">
        {children ?? <h2>Low Poly</h2>}
      </div>
    </section>
  );
}
export default RfxLowPoly;
