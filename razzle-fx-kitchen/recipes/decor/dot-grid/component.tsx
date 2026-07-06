import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Grid — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDotGrid({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-grid">
      <div className="rfx-dot-grid__inner">
        {children ?? <h2>Dot Grid</h2>}
      </div>
    </section>
  );
}
export default RfxDotGrid;
