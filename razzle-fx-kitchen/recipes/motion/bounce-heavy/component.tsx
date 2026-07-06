import "./styles.css";
import type { ReactNode } from "react";
/**
 * Bounce Heavy — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBounceHeavy({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-bounce-heavy">
      <div className="rfx-bounce-heavy__inner">
        {children ?? <h2>Bounce Heavy</h2>}
      </div>
    </section>
  );
}
export default RfxBounceHeavy;
