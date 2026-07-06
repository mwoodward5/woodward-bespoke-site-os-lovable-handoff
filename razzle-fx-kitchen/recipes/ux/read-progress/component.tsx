import "./styles.css";
import type { ReactNode } from "react";
/**
 * Read Progress — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxReadProgress({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-read-progress">
      <div className="rfx-read-progress__inner">
        {children ?? <h2>Read Progress</h2>}
      </div>
    </section>
  );
}
export default RfxReadProgress;
