import "./styles.css";
import type { ReactNode } from "react";
/**
 * Isometric Grid — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxIsometricGrid({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-isometric-grid">
      <div className="rfx-isometric-grid__inner">
        {children ?? <h2>Isometric Grid</h2>}
      </div>
    </section>
  );
}
export default RfxIsometricGrid;
