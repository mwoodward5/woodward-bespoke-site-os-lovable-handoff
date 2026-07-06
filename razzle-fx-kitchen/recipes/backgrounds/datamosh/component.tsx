import "./styles.css";
import type { ReactNode } from "react";
/**
 * Datamosh — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDatamosh({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-datamosh">
      <div className="rfx-datamosh__inner">
        {children ?? <h2>Datamosh</h2>}
      </div>
    </section>
  );
}
export default RfxDatamosh;
