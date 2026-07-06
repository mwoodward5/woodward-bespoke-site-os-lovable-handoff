import "./styles.css";
import type { ReactNode } from "react";
/**
 * Card Lift — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCardLift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-card-lift">
      <div className="rfx-card-lift__inner">
        {children ?? <h2>Card Lift</h2>}
      </div>
    </section>
  );
}
export default RfxCardLift;
