import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chrome Plate — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxChromePlate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chrome-plate">
      <div className="rfx-chrome-plate__inner">
        {children ?? <h2>Chrome Plate</h2>}
      </div>
    </section>
  );
}
export default RfxChromePlate;
