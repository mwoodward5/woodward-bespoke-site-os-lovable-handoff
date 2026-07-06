import "./styles.css";
import type { ReactNode } from "react";
/**
 * Inner Shadow — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxInnerShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-inner-shadow">
      <div className="rfx-inner-shadow__inner">
        {children ?? <h2>Inner Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxInnerShadow;
