import "./styles.css";
import type { ReactNode } from "react";
/**
 * Punched Hole — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPunchedHole({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-punched-hole">
      <div className="rfx-punched-hole__inner">
        {children ?? <h2>Punched Hole</h2>}
      </div>
    </section>
  );
}
export default RfxPunchedHole;
