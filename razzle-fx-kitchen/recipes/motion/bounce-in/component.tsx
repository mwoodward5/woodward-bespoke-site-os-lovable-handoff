import "./styles.css";
import type { ReactNode } from "react";
/**
 * Bounce In — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBounceIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-bounce-in">
      <div className="rfx-bounce-in__inner">
        {children ?? <h2>Bounce In</h2>}
      </div>
    </section>
  );
}
export default RfxBounceIn;
