import "./styles.css";
import type { ReactNode } from "react";
/**
 * Iridescent — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxIridescent({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-iridescent">
      <div className="rfx-iridescent__inner">
        {children ?? <h2>Iridescent</h2>}
      </div>
    </section>
  );
}
export default RfxIridescent;
