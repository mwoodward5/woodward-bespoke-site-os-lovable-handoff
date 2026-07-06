import "./styles.css";
import type { ReactNode } from "react";
/**
 * Checkerboard — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCheckerboard({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-checkerboard">
      <div className="rfx-checkerboard__inner">
        {children ?? <h2>Checkerboard</h2>}
      </div>
    </section>
  );
}
export default RfxCheckerboard;
