import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glass Frost — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGlassFrost({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glass-frost">
      <div className="rfx-glass-frost__inner">
        {children ?? <h2>Glass Frost</h2>}
      </div>
    </section>
  );
}
export default RfxGlassFrost;
