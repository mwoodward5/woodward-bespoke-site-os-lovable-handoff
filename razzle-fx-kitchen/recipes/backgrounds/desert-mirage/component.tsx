import "./styles.css";
import type { ReactNode } from "react";
/**
 * Desert Mirage — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDesertMirage({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-desert-mirage">
      <div className="rfx-desert-mirage__inner">
        {children ?? <h2>Desert Mirage</h2>}
      </div>
    </section>
  );
}
export default RfxDesertMirage;
