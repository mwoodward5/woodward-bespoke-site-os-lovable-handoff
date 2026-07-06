import "./styles.css";
import type { ReactNode } from "react";
/**
 * Light Leak — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLightLeak({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-light-leak">
      <div className="rfx-light-leak__inner">
        {children ?? <h2>Light Leak</h2>}
      </div>
    </section>
  );
}
export default RfxLightLeak;
