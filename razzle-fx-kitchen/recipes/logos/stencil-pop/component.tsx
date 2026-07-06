import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stencil Pop — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxStencilPop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stencil-pop">
      <div className="rfx-stencil-pop__inner">
        {children ?? <h2>Stencil Pop</h2>}
      </div>
    </section>
  );
}
export default RfxStencilPop;
