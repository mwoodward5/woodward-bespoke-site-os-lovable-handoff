import "./styles.css";
import type { ReactNode } from "react";
/**
 * Shimmer Sweep — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxShimmerSweep({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-shimmer-sweep">
      <div className="rfx-shimmer-sweep__inner">
        {children ?? <h2>Shimmer Sweep</h2>}
      </div>
    </section>
  );
}
export default RfxShimmerSweep;
