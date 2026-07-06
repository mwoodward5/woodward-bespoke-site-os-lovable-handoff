import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ease In Out — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxEaseInOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ease-in-out">
      <div className="rfx-ease-in-out__inner">
        {children ?? <h2>Ease In Out</h2>}
      </div>
    </section>
  );
}
export default RfxEaseInOut;
