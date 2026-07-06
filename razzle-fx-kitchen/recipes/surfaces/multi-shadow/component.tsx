import "./styles.css";
import type { ReactNode } from "react";
/**
 * Multi Shadow — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMultiShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-multi-shadow">
      <div className="rfx-multi-shadow__inner">
        {children ?? <h2>Multi Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxMultiShadow;
