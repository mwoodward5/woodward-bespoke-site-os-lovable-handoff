import "./styles.css";
import type { ReactNode } from "react";
/**
 * Brush Text — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBrushText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-brush-text">
      <div className="rfx-brush-text__inner">
        {children ?? <h2>Brush Text</h2>}
      </div>
    </section>
  );
}
export default RfxBrushText;
