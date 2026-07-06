import "./styles.css";
import type { ReactNode } from "react";
/**
 * Brush Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBrushIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-brush-icon">
      <div className="rfx-brush-icon__inner">
        {children ?? <h2>Brush Icon</h2>}
      </div>
    </section>
  );
}
export default RfxBrushIcon;
