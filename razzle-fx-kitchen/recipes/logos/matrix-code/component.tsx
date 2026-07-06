import "./styles.css";
import type { ReactNode } from "react";
/**
 * Matrix Code — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMatrixCode({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-matrix-code">
      <div className="rfx-matrix-code__inner">
        {children ?? <h2>Matrix Code</h2>}
      </div>
    </section>
  );
}
export default RfxMatrixCode;
