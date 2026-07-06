import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cascade Cards — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCascadeCards({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cascade-cards">
      <div className="rfx-cascade-cards__inner">
        {children ?? <h2>Cascade Cards</h2>}
      </div>
    </section>
  );
}
export default RfxCascadeCards;
