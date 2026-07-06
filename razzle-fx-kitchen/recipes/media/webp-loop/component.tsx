import "./styles.css";
import type { ReactNode } from "react";
/**
 * Webp Loop — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxWebpLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-webp-loop">
      <div className="rfx-webp-loop__inner">
        {children ?? <h2>Webp Loop</h2>}
      </div>
    </section>
  );
}
export default RfxWebpLoop;
