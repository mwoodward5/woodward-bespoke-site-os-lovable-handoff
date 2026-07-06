import "./styles.css";
import type { ReactNode } from "react";
/**
 * Skeleton Shimmer — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSkeletonShimmer({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-skeleton-shimmer">
      <div className="rfx-skeleton-shimmer__inner">
        {children ?? <h2>Skeleton Shimmer</h2>}
      </div>
    </section>
  );
}
export default RfxSkeletonShimmer;
