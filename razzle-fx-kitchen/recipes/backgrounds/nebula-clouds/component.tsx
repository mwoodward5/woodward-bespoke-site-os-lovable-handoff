import "./styles.css";
import type { ReactNode } from "react";
/**
 * Nebula Clouds — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxNebulaClouds({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-nebula-clouds">
      <div className="rfx-nebula-clouds__inner">
        {children ?? <h2>Nebula Clouds</h2>}
      </div>
    </section>
  );
}
export default RfxNebulaClouds;
