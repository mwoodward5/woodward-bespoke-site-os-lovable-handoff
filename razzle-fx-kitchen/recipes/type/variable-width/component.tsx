import "./styles.css";
import type { ReactNode } from "react";
/**
 * Variable Width — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxVariableWidth({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-variable-width">
      <div className="rfx-variable-width__inner">
        {children ?? <h2>Variable Width</h2>}
      </div>
    </section>
  );
}
export default RfxVariableWidth;
