import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glass Liquid — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxGlassLiquid({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glass-liquid">
      <div className="rfx-glass-liquid__inner">
        {children ?? <h2>Glass Liquid</h2>}
      </div>
    </section>
  );
}
export default RfxGlassLiquid;
