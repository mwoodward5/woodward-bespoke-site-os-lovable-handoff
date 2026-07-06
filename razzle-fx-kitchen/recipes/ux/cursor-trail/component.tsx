import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cursor Trail — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCursorTrail({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cursor-trail">
      <div className="rfx-cursor-trail__inner">
        {children ?? <h2>Cursor Trail</h2>}
      </div>
    </section>
  );
}
export default RfxCursorTrail;
