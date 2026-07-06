import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pop In — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPopIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pop-in">
      <div className="rfx-pop-in__inner">
        {children ?? <h2>Pop In</h2>}
      </div>
    </section>
  );
}
export default RfxPopIn;
