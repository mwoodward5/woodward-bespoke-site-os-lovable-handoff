import "./styles.css";
import type { ReactNode } from "react";
/**
 * Float Shadow — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFloatShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-float-shadow">
      <div className="rfx-float-shadow__inner">
        {children ?? <h2>Float Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxFloatShadow;
