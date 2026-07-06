import "./styles.css";
import type { ReactNode } from "react";
/**
 * Diamond Set — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxDiamondSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-diamond-set">
      <div className="rfx-diamond-set__inner">
        {children ?? <h2>Diamond Set</h2>}
      </div>
    </section>
  );
}
export default RfxDiamondSet;
