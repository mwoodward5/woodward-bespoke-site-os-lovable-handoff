import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gradient Mask — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGradientMask({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gradient-mask">
      <div className="rfx-gradient-mask__inner">
        {children ?? <h2>Gradient Mask</h2>}
      </div>
    </section>
  );
}
export default RfxGradientMask;
