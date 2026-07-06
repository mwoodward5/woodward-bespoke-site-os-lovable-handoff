import "./styles.css";
import type { ReactNode } from "react";
/**
 * Weightless Float — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxWeightlessFloat({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-weightless-float">
      <div className="rfx-weightless-float__inner">
        {children ?? <h2>Weightless Float</h2>}
      </div>
    </section>
  );
}
export default RfxWeightlessFloat;
