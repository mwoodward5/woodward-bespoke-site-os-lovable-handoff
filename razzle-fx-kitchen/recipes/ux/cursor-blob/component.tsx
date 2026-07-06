import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cursor Blob — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCursorBlob({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cursor-blob">
      <div className="rfx-cursor-blob__inner">
        {children ?? <h2>Cursor Blob</h2>}
      </div>
    </section>
  );
}
export default RfxCursorBlob;
