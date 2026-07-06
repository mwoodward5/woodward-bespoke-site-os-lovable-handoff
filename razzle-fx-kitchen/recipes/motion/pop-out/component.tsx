import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pop Out — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPopOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pop-out">
      <div className="rfx-pop-out__inner">
        {children ?? <h2>Pop Out</h2>}
      </div>
    </section>
  );
}
export default RfxPopOut;
