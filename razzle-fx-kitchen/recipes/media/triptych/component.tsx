import "./styles.css";
import type { ReactNode } from "react";
/**
 * Triptych — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTriptych({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-triptych">
      <div className="rfx-triptych__inner">
        {children ?? <h2>Triptych</h2>}
      </div>
    </section>
  );
}
export default RfxTriptych;
