import "./styles.css";
import type { ReactNode } from "react";
/**
 * Modal Scale — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxModalScale({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-modal-scale">
      <div className="rfx-modal-scale__inner">
        {children ?? <h2>Modal Scale</h2>}
      </div>
    </section>
  );
}
export default RfxModalScale;
