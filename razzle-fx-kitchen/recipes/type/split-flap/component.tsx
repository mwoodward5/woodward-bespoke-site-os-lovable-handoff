import "./styles.css";
import type { ReactNode } from "react";
/**
 * Split Flap — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSplitFlap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-split-flap">
      <div className="rfx-split-flap__inner">
        {children ?? <h2>Split Flap</h2>}
      </div>
    </section>
  );
}
export default RfxSplitFlap;
