import "./styles.css";
import type { ReactNode } from "react";
/**
 * Progress Bar — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxProgressBar({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-progress-bar">
      <div className="rfx-progress-bar__inner">
        {children ?? <h2>Progress Bar</h2>}
      </div>
    </section>
  );
}
export default RfxProgressBar;
