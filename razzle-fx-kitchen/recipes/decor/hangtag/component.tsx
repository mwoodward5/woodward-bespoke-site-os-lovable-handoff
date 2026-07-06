import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hangtag — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxHangtag({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hangtag">
      <div className="rfx-hangtag__inner">
        {children ?? <h2>Hangtag</h2>}
      </div>
    </section>
  );
}
export default RfxHangtag;
