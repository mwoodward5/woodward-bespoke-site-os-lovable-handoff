import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kinetic Stamp — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxKineticStamp({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kinetic-stamp">
      <div className="rfx-kinetic-stamp__inner">
        {children ?? <h2>Kinetic Stamp</h2>}
      </div>
    </section>
  );
}
export default RfxKineticStamp;
