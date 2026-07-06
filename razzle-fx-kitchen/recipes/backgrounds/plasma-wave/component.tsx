import "./styles.css";
import type { ReactNode } from "react";
/**
 * Plasma Wave — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPlasmaWave({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-plasma-wave">
      <div className="rfx-plasma-wave__inner">
        {children ?? <h2>Plasma Wave</h2>}
      </div>
    </section>
  );
}
export default RfxPlasmaWave;
