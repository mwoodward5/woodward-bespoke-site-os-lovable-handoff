import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cursor Invert — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCursorInvert({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cursor-invert">
      <div className="rfx-cursor-invert__inner">
        {children ?? <h2>Cursor Invert</h2>}
      </div>
    </section>
  );
}
export default RfxCursorInvert;
