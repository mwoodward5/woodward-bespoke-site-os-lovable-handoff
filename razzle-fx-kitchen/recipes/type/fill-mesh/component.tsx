import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Mesh — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFillMesh({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-mesh">
      <div className="rfx-fill-mesh__inner">
        {children ?? <h2>Fill Mesh</h2>}
      </div>
    </section>
  );
}
export default RfxFillMesh;
