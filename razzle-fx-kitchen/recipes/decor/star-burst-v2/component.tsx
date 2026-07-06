import "./styles.css";
import type { ReactNode } from "react";
/**
 * Star Burst V2 — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStarBurstV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-star-burst-v2">
      <div className="rfx-star-burst-v2__inner">
        {children ?? <h2>Star Burst V2</h2>}
      </div>
    </section>
  );
}
export default RfxStarBurstV2;
