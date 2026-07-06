import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sticky Swap — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxStickySwap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sticky-swap">
      <div className="rfx-sticky-swap__inner">
        {children ?? <h2>Sticky Swap</h2>}
      </div>
    </section>
  );
}
export default RfxStickySwap;
