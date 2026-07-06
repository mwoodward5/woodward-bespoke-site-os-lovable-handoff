import "./styles.css";
import type { ReactNode } from "react";
/**
 * Variable Weight — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxVariableWeight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-variable-weight">
      <div className="rfx-variable-weight__inner">
        {children ?? <h2>Variable Weight</h2>}
      </div>
    </section>
  );
}
export default RfxVariableWeight;
