import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seamless Float — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxSeamlessFloat({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seamless-float">
      <div className="rfx-seamless-float__inner">
        {children ?? <h2>Seamless Float</h2>}
      </div>
    </section>
  );
}
export default RfxSeamlessFloat;
