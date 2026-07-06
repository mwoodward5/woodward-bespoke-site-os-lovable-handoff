import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rip Edge — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRipEdge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rip-edge">
      <div className="rfx-rip-edge__inner">
        {children ?? <h2>Rip Edge</h2>}
      </div>
    </section>
  );
}
export default RfxRipEdge;
