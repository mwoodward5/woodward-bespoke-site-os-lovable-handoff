import "./styles.css";
import type { ReactNode } from "react";
/**
 * Carve Text — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCarveText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-carve-text">
      <div className="rfx-carve-text__inner">
        {children ?? <h2>Carve Text</h2>}
      </div>
    </section>
  );
}
export default RfxCarveText;
