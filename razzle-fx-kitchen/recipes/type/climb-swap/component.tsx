import "./styles.css";
import type { ReactNode } from "react";
/**
 * Climb Swap — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxClimbSwap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-climb-swap">
      <div className="rfx-climb-swap__inner">
        {children ?? <h2>Climb Swap</h2>}
      </div>
    </section>
  );
}
export default RfxClimbSwap;
