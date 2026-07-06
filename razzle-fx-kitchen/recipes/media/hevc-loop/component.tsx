import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hevc Loop — media recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxHevcLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hevc-loop">
      <div className="rfx-hevc-loop__inner">
        {children ?? <h2>Hevc Loop</h2>}
      </div>
    </section>
  );
}
export default RfxHevcLoop;
