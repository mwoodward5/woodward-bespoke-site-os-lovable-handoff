import "./styles.css";
import type { ReactNode } from "react";
/**
 * Axis Label — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxAxisLabel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-axis-label">
      <div className="rfx-axis-label__inner">
        {children ?? <h2>Axis Label</h2>}
      </div>
    </section>
  );
}
export default RfxAxisLabel;
