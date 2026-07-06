import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cursor Magnet — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCursorMagnet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cursor-magnet">
      <div className="rfx-cursor-magnet__inner">
        {children ?? <h2>Cursor Magnet</h2>}
      </div>
    </section>
  );
}
export default RfxCursorMagnet;
