import "./styles.css";
import type { ReactNode } from "react";
/**
 * Zero G — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxZeroG({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-zero-g">
      <div className="rfx-zero-g__inner">
        {children ?? <h2>Zero G</h2>}
      </div>
    </section>
  );
}
export default RfxZeroG;
