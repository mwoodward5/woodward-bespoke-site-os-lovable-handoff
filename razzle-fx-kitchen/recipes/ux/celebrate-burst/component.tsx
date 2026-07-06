import "./styles.css";
import type { ReactNode } from "react";
/**
 * Celebrate Burst — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCelebrateBurst({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-celebrate-burst">
      <div className="rfx-celebrate-burst__inner">
        {children ?? <h2>Celebrate Burst</h2>}
      </div>
    </section>
  );
}
export default RfxCelebrateBurst;
