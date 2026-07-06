import "./styles.css";
import type { ReactNode } from "react";
/**
 * Grain Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGrainIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-grain-icon">
      <div className="rfx-grain-icon__inner">
        {children ?? <h2>Grain Icon</h2>}
      </div>
    </section>
  );
}
export default RfxGrainIcon;
