import "./styles.css";
import type { ReactNode } from "react";
/**
 * Triangulate — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTriangulate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-triangulate">
      <div className="rfx-triangulate__inner">
        {children ?? <h2>Triangulate</h2>}
      </div>
    </section>
  );
}
export default RfxTriangulate;
