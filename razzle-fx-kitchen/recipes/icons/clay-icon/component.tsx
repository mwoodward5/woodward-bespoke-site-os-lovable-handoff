import "./styles.css";
import type { ReactNode } from "react";
/**
 * Clay Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxClayIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-clay-icon">
      <div className="rfx-clay-icon__inner">
        {children ?? <h2>Clay Icon</h2>}
      </div>
    </section>
  );
}
export default RfxClayIcon;
