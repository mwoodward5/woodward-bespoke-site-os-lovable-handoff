import "./styles.css";
import type { ReactNode } from "react";
/**
 * Flourish — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxFlourish({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-flourish">
      <div className="rfx-flourish__inner">
        {children ?? <h2>Flourish</h2>}
      </div>
    </section>
  );
}
export default RfxFlourish;
