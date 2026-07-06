import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ease In — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxEaseIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ease-in">
      <div className="rfx-ease-in__inner">
        {children ?? <h2>Ease In</h2>}
      </div>
    </section>
  );
}
export default RfxEaseIn;
