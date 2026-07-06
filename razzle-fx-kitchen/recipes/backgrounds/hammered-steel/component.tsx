import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hammered Steel — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHammeredSteel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hammered-steel">
      <div className="rfx-hammered-steel__inner">
        {children ?? <h2>Hammered Steel</h2>}
      </div>
    </section>
  );
}
export default RfxHammeredSteel;
