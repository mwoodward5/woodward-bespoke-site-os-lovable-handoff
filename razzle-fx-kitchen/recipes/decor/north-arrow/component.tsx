import "./styles.css";
import type { ReactNode } from "react";
/**
 * North Arrow — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxNorthArrow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-north-arrow">
      <div className="rfx-north-arrow__inner">
        {children ?? <h2>North Arrow</h2>}
      </div>
    </section>
  );
}
export default RfxNorthArrow;
