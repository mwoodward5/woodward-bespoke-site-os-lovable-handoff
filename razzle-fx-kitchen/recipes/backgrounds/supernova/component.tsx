import "./styles.css";
import type { ReactNode } from "react";
/**
 * Supernova — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSupernova({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-supernova">
      <div className="rfx-supernova__inner">
        {children ?? <h2>Supernova</h2>}
      </div>
    </section>
  );
}
export default RfxSupernova;
