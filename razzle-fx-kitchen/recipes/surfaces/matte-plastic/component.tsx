import "./styles.css";
import type { ReactNode } from "react";
/**
 * Matte Plastic — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMattePlastic({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-matte-plastic">
      <div className="rfx-matte-plastic__inner">
        {children ?? <h2>Matte Plastic</h2>}
      </div>
    </section>
  );
}
export default RfxMattePlastic;
