import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rotate Swap — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRotateSwap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rotate-swap">
      <div className="rfx-rotate-swap__inner">
        {children ?? <h2>Rotate Swap</h2>}
      </div>
    </section>
  );
}
export default RfxRotateSwap;
