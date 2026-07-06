import "./styles.css";
import type { ReactNode } from "react";
/**
 * Diagonal Hash — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDiagonalHash({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-diagonal-hash">
      <div className="rfx-diagonal-hash__inner">
        {children ?? <h2>Diagonal Hash</h2>}
      </div>
    </section>
  );
}
export default RfxDiagonalHash;
