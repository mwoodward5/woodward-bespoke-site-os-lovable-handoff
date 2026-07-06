import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gradient Block — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGradientBlock({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gradient-block">
      <div className="rfx-gradient-block__inner">
        {children ?? <h2>Gradient Block</h2>}
      </div>
    </section>
  );
}
export default RfxGradientBlock;
