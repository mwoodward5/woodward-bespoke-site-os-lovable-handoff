import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fold Out — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFoldOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fold-out">
      <div className="rfx-fold-out__inner">
        {children ?? <h2>Fold Out</h2>}
      </div>
    </section>
  );
}
export default RfxFoldOut;
