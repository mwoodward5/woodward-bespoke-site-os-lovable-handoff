import "./styles.css";
import type { ReactNode } from "react";
/**
 * Waffle — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxWaffle({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-waffle">
      <div className="rfx-waffle__inner">
        {children ?? <h2>Waffle</h2>}
      </div>
    </section>
  );
}
export default RfxWaffle;
