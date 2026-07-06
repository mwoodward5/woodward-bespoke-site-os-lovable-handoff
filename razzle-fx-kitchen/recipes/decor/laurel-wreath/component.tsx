import "./styles.css";
import type { ReactNode } from "react";
/**
 * Laurel Wreath — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxLaurelWreath({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-laurel-wreath">
      <div className="rfx-laurel-wreath__inner">
        {children ?? <h2>Laurel Wreath</h2>}
      </div>
    </section>
  );
}
export default RfxLaurelWreath;
