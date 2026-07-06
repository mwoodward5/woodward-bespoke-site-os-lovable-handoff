import "./styles.css";
import type { ReactNode } from "react";
/**
 * Popover Lift — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPopoverLift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-popover-lift">
      <div className="rfx-popover-lift__inner">
        {children ?? <h2>Popover Lift</h2>}
      </div>
    </section>
  );
}
export default RfxPopoverLift;
