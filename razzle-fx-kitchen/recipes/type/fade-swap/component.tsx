import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fade Swap — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxFadeSwap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fade-swap">
      <div className="rfx-fade-swap__inner">
        {children ?? <h2>Fade Swap</h2>}
      </div>
    </section>
  );
}
export default RfxFadeSwap;
