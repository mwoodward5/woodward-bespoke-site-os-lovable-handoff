import "./styles.css";
import type { ReactNode } from "react";
/**
 * Split Surface — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSplitSurface({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-split-surface">
      <div className="rfx-split-surface__inner">
        {children ?? <h2>Split Surface</h2>}
      </div>
    </section>
  );
}
export default RfxSplitSurface;
