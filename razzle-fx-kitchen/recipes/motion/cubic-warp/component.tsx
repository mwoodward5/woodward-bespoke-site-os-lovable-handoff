import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cubic Warp — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCubicWarp({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cubic-warp">
      <div className="rfx-cubic-warp__inner">
        {children ?? <h2>Cubic Warp</h2>}
      </div>
    </section>
  );
}
export default RfxCubicWarp;
