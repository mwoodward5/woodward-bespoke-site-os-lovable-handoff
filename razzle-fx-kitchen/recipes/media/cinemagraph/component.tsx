import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cinemagraph — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCinemagraph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cinemagraph">
      <div className="rfx-cinemagraph__inner">
        {children ?? <h2>Cinemagraph</h2>}
      </div>
    </section>
  );
}
export default RfxCinemagraph;
