import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glass Icon — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxGlassIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glass-icon">
      <div className="rfx-glass-icon__inner">
        {children ?? <h2>Glass Icon</h2>}
      </div>
    </section>
  );
}
export default RfxGlassIcon;
