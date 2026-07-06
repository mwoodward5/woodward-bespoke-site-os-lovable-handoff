import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dashes — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDashes({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dashes">
      <div className="rfx-dashes__inner">
        {children ?? <h2>Dashes</h2>}
      </div>
    </section>
  );
}
export default RfxDashes;
