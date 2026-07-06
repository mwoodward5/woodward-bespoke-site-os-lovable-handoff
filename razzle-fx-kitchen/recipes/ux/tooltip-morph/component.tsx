import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tooltip Morph — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTooltipMorph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tooltip-morph">
      <div className="rfx-tooltip-morph__inner">
        {children ?? <h2>Tooltip Morph</h2>}
      </div>
    </section>
  );
}
export default RfxTooltipMorph;
