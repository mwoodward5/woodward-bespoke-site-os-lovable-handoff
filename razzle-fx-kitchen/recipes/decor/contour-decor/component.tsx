import "./styles.css";
import type { ReactNode } from "react";
/**
 * Contour Decor — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxContourDecor({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-contour-decor">
      <div className="rfx-contour-decor__inner">
        {children ?? <h2>Contour Decor</h2>}
      </div>
    </section>
  );
}
export default RfxContourDecor;
