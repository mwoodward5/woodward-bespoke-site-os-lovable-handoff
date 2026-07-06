import "./styles.css";
import type { ReactNode } from "react";
/**
 * God Rays — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGodRays({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-god-rays">
      <div className="rfx-god-rays__inner">
        {children ?? <h2>God Rays</h2>}
      </div>
    </section>
  );
}
export default RfxGodRays;
