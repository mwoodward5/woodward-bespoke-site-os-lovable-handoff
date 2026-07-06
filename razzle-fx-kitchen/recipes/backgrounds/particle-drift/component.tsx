import "./styles.css";
import type { ReactNode } from "react";
/**
 * Particle Drift — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxParticleDrift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-particle-drift">
      <div className="rfx-particle-drift__inner">
        {children ?? <h2>Particle Drift</h2>}
      </div>
    </section>
  );
}
export default RfxParticleDrift;
