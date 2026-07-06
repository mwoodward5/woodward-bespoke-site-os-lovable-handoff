import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cursor Follow — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCursorFollow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cursor-follow">
      <div className="rfx-cursor-follow__inner">
        {children ?? <h2>Cursor Follow</h2>}
      </div>
    </section>
  );
}
export default RfxCursorFollow;
