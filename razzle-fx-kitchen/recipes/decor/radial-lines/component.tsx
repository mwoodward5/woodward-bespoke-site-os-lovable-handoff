import "./styles.css";
import type { ReactNode } from "react";
/**
 * Radial Lines — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRadialLines({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-radial-lines">
      <div className="rfx-radial-lines__inner">
        {children ?? <h2>Radial Lines</h2>}
      </div>
    </section>
  );
}
export default RfxRadialLines;
