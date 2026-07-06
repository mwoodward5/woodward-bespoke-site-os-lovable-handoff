import "./styles.css";
import type { ReactNode } from "react";
/**
 * Smoke Veil — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSmokeVeil({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-smoke-veil">
      <div className="rfx-smoke-veil__inner">
        {children ?? <h2>Smoke Veil</h2>}
      </div>
    </section>
  );
}
export default RfxSmokeVeil;
