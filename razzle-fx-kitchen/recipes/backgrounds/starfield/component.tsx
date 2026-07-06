import "./styles.css";
import type { ReactNode } from "react";
/**
 * Starfield — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxStarfield({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-starfield">
      <div className="rfx-starfield__inner">
        {children ?? <h2>Starfield</h2>}
      </div>
    </section>
  );
}
export default RfxStarfield;
