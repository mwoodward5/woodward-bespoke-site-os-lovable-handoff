import "./styles.css";
import type { ReactNode } from "react";
/**
 * Matrix Cascade — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMatrixCascade({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-matrix-cascade">
      <div className="rfx-matrix-cascade__inner">
        {children ?? <h2>Matrix Cascade</h2>}
      </div>
    </section>
  );
}
export default RfxMatrixCascade;
