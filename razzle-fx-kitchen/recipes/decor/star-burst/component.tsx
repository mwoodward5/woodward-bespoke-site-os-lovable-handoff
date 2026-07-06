import "./styles.css";
import type { ReactNode } from "react";
/**
 * Star Burst — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxStarBurst({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-star-burst">
      <div className="rfx-star-burst__inner">
        {children ?? <h2>Star Burst</h2>}
      </div>
    </section>
  );
}
export default RfxStarBurst;
