import "./styles.css";
import type { ReactNode } from "react";
/**
 * Film Strip — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFilmStrip({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-film-strip">
      <div className="rfx-film-strip__inner">
        {children ?? <h2>Film Strip</h2>}
      </div>
    </section>
  );
}
export default RfxFilmStrip;
