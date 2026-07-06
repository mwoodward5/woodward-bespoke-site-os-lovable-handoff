import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stencil Text — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStencilText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stencil-text">
      <div className="rfx-stencil-text__inner">
        {children ?? <h2>Stencil Text</h2>}
      </div>
    </section>
  );
}
export default RfxStencilText;
