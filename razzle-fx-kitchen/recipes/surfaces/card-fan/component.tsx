import "./styles.css";
import type { ReactNode } from "react";
/**
 * Card Fan — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCardFan({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-card-fan">
      <div className="rfx-card-fan__inner">
        {children ?? <h2>Card Fan</h2>}
      </div>
    </section>
  );
}
export default RfxCardFan;
