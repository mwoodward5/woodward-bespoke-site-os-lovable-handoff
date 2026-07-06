import "./styles.css";
import type { ReactNode } from "react";
/**
 * 3d Isometric — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function Rfx3dIsometric({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-3d-isometric">
      <div className="rfx-3d-isometric__inner">
        {children ?? <h2>3d Isometric</h2>}
      </div>
    </section>
  );
}
export default Rfx3dIsometric;
