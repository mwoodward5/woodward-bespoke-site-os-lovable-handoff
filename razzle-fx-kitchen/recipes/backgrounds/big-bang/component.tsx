import "./styles.css";
import type { ReactNode } from "react";
/**
 * Big Bang — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxBigBang({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-big-bang">
      <div className="rfx-big-bang__inner">
        {children ?? <h2>Big Bang</h2>}
      </div>
    </section>
  );
}
export default RfxBigBang;
