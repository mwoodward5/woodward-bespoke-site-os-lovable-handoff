import "./styles.css";
import type { ReactNode } from "react";
/**
 * Brick Pattern — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBrickPattern({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-brick-pattern">
      <div className="rfx-brick-pattern__inner">
        {children ?? <h2>Brick Pattern</h2>}
      </div>
    </section>
  );
}
export default RfxBrickPattern;
