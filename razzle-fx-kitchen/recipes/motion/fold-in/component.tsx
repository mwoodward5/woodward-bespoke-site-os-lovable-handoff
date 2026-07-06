import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fold In — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFoldIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fold-in">
      <div className="rfx-fold-in__inner">
        {children ?? <h2>Fold In</h2>}
      </div>
    </section>
  );
}
export default RfxFoldIn;
