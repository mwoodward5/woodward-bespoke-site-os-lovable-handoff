import "./styles.css";
import type { ReactNode } from "react";
/**
 * Diagonal Split — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDiagonalSplit({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-diagonal-split">
      <div className="rfx-diagonal-split__inner">
        {children ?? <h2>Diagonal Split</h2>}
      </div>
    </section>
  );
}
export default RfxDiagonalSplit;
