import "./styles.css";
import type { ReactNode } from "react";
/**
 * Wobble Shake — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxWobbleShake({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-wobble-shake">
      <div className="rfx-wobble-shake__inner">
        {children ?? <h2>Wobble Shake</h2>}
      </div>
    </section>
  );
}
export default RfxWobbleShake;
