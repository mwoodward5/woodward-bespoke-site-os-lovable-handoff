import "./styles.css";
import type { ReactNode } from "react";
/**
 * Av1 Loop — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxAv1Loop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-av1-loop">
      <div className="rfx-av1-loop__inner">
        {children ?? <h2>Av1 Loop</h2>}
      </div>
    </section>
  );
}
export default RfxAv1Loop;
