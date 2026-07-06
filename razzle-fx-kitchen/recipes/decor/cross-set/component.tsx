import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cross Set — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCrossSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cross-set">
      <div className="rfx-cross-set__inner">
        {children ?? <h2>Cross Set</h2>}
      </div>
    </section>
  );
}
export default RfxCrossSet;
