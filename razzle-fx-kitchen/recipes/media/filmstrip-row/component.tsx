import "./styles.css";
import type { ReactNode } from "react";
/**
 * Filmstrip Row — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFilmstripRow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-filmstrip-row">
      <div className="rfx-filmstrip-row__inner">
        {children ?? <h2>Filmstrip Row</h2>}
      </div>
    </section>
  );
}
export default RfxFilmstripRow;
