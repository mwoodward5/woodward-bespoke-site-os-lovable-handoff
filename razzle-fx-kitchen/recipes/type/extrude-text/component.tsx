import "./styles.css";
import type { ReactNode } from "react";
/**
 * Extrude Text — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxExtrudeText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-extrude-text">
      <div className="rfx-extrude-text__inner">
        {children ?? <h2>Extrude Text</h2>}
      </div>
    </section>
  );
}
export default RfxExtrudeText;
