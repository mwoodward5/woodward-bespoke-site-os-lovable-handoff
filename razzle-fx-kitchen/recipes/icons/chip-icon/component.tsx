import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chip Icon — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxChipIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chip-icon">
      <div className="rfx-chip-icon__inner">
        {children ?? <h2>Chip Icon</h2>}
      </div>
    </section>
  );
}
export default RfxChipIcon;
