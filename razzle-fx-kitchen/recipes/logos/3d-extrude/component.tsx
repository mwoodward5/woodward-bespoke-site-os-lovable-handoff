import "./styles.css";
import type { ReactNode } from "react";
/**
 * 3d Extrude — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function Rfx3dExtrude({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-3d-extrude">
      <div className="rfx-3d-extrude__inner">
        {children ?? <h2>3d Extrude</h2>}
      </div>
    </section>
  );
}
export default Rfx3dExtrude;
