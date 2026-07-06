import "./styles.css";
import type { ReactNode } from "react";
/**
 * Highlight Marker — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHighlightMarker({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-highlight-marker">
      <div className="rfx-highlight-marker__inner">
        {children ?? <h2>Highlight Marker</h2>}
      </div>
    </section>
  );
}
export default RfxHighlightMarker;
