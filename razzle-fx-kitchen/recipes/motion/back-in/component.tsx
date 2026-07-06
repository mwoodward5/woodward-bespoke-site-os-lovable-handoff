import "./styles.css";
import type { ReactNode } from "react";
/**
 * Back In — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBackIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-back-in">
      <div className="rfx-back-in__inner">
        {children ?? <h2>Back In</h2>}
      </div>
    </section>
  );
}
export default RfxBackIn;
