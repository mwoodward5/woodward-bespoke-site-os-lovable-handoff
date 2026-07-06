import "./styles.css";
import type { ReactNode } from "react";
/**
 * Overshoot 2x — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOvershoot2x({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-overshoot-2x">
      <div className="rfx-overshoot-2x__inner">
        {children ?? <h2>Overshoot 2x</h2>}
      </div>
    </section>
  );
}
export default RfxOvershoot2x;
