import "./styles.css";
import type { ReactNode } from "react";
/**
 * Folded Corner — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFoldedCorner({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-folded-corner">
      <div className="rfx-folded-corner__inner">
        {children ?? <h2>Folded Corner</h2>}
      </div>
    </section>
  );
}
export default RfxFoldedCorner;
