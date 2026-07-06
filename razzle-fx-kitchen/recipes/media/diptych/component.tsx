import "./styles.css";
import type { ReactNode } from "react";
/**
 * Diptych — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDiptych({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-diptych">
      <div className="rfx-diptych__inner">
        {children ?? <h2>Diptych</h2>}
      </div>
    </section>
  );
}
export default RfxDiptych;
