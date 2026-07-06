import "./styles.css";
import type { ReactNode } from "react";
/**
 * Apng Loop — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxApngLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-apng-loop">
      <div className="rfx-apng-loop__inner">
        {children ?? <h2>Apng Loop</h2>}
      </div>
    </section>
  );
}
export default RfxApngLoop;
