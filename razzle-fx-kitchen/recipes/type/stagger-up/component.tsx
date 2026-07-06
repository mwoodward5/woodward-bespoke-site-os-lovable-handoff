import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stagger Up — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxStaggerUp({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stagger-up">
      <div className="rfx-stagger-up__inner">
        {children ?? <h2>Stagger Up</h2>}
      </div>
    </section>
  );
}
export default RfxStaggerUp;
