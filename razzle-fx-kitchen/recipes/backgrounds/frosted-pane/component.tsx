import "./styles.css";
import type { ReactNode } from "react";
/**
 * Frosted Pane — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFrostedPane({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-frosted-pane">
      <div className="rfx-frosted-pane__inner">
        {children ?? <h2>Frosted Pane</h2>}
      </div>
    </section>
  );
}
export default RfxFrostedPane;
