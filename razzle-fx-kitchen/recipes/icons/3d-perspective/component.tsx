import "./styles.css";
import type { ReactNode } from "react";
/**
 * 3d Perspective — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function Rfx3dPerspective({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-3d-perspective">
      <div className="rfx-3d-perspective__inner">
        {children ?? <h2>3d Perspective</h2>}
      </div>
    </section>
  );
}
export default Rfx3dPerspective;
