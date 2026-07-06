import "./styles.css";
import type { ReactNode } from "react";
/**
 * Shimmer Sweep V2 — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxShimmerSweepV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-shimmer-sweep-v2">
      <div className="rfx-shimmer-sweep-v2__inner">
        {children ?? <h2>Shimmer Sweep V2</h2>}
      </div>
    </section>
  );
}
export default RfxShimmerSweepV2;
