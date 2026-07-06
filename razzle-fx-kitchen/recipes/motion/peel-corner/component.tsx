import "./styles.css";
import type { ReactNode } from "react";
/**
 * Peel Corner — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPeelCorner({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-peel-corner">
      <div className="rfx-peel-corner__inner">
        {children ?? <h2>Peel Corner</h2>}
      </div>
    </section>
  );
}
export default RfxPeelCorner;
