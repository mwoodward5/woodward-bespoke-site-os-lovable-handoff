import "./styles.css";
import type { ReactNode } from "react";
/**
 * Polyptych — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPolyptych({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-polyptych">
      <div className="rfx-polyptych__inner">
        {children ?? <h2>Polyptych</h2>}
      </div>
    </section>
  );
}
export default RfxPolyptych;
