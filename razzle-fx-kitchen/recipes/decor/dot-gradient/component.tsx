import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Gradient — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDotGradient({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-gradient">
      <div className="rfx-dot-gradient__inner">
        {children ?? <h2>Dot Gradient</h2>}
      </div>
    </section>
  );
}
export default RfxDotGradient;
