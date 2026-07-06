import "./styles.css";
import type { ReactNode } from "react";
/**
 * Aurora Mesh — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxAuroraMesh({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-aurora-mesh">
      <div className="rfx-aurora-mesh__inner">
        {children ?? <h2>Aurora Mesh</h2>}
      </div>
    </section>
  );
}
export default RfxAuroraMesh;
