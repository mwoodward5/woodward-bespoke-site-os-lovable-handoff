import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stencil Icon — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStencilIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stencil-icon">
      <div className="rfx-stencil-icon__inner">
        {children ?? <h2>Stencil Icon</h2>}
      </div>
    </section>
  );
}
export default RfxStencilIcon;
