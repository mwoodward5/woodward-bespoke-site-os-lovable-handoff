import "./styles.css";
import type { ReactNode } from "react";
/**
 * Compass Rose — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCompassRose({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-compass-rose">
      <div className="rfx-compass-rose__inner">
        {children ?? <h2>Compass Rose</h2>}
      </div>
    </section>
  );
}
export default RfxCompassRose;
