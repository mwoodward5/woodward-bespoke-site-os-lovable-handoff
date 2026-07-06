import "./styles.css";
import type { ReactNode } from "react";
/**
 * Polaroid Border — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPolaroidBorder({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-polaroid-border">
      <div className="rfx-polaroid-border__inner">
        {children ?? <h2>Polaroid Border</h2>}
      </div>
    </section>
  );
}
export default RfxPolaroidBorder;
