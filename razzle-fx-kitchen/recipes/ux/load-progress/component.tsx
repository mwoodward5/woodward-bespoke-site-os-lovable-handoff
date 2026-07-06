import "./styles.css";
import type { ReactNode } from "react";
/**
 * Load Progress — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLoadProgress({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-load-progress">
      <div className="rfx-load-progress__inner">
        {children ?? <h2>Load Progress</h2>}
      </div>
    </section>
  );
}
export default RfxLoadProgress;
