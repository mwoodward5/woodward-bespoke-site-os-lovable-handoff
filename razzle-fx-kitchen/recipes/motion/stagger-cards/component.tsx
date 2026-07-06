import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stagger Cards — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxStaggerCards({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stagger-cards">
      <div className="rfx-stagger-cards__inner">
        {children ?? <h2>Stagger Cards</h2>}
      </div>
    </section>
  );
}
export default RfxStaggerCards;
