import "./styles.css";
import type { ReactNode } from "react";
/**
 * Unroll — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxUnroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-unroll">
      <div className="rfx-unroll__inner">
        {children ?? <h2>Unroll</h2>}
      </div>
    </section>
  );
}
export default RfxUnroll;
