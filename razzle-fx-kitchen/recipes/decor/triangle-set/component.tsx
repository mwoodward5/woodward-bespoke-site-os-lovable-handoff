import "./styles.css";
import type { ReactNode } from "react";
/**
 * Triangle Set — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxTriangleSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-triangle-set">
      <div className="rfx-triangle-set__inner">
        {children ?? <h2>Triangle Set</h2>}
      </div>
    </section>
  );
}
export default RfxTriangleSet;
