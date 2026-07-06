import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Matrix — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxDotMatrix({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-matrix">
      <div className="rfx-dot-matrix__inner">
        {children ?? <h2>Dot Matrix</h2>}
      </div>
    </section>
  );
}
export default RfxDotMatrix;
