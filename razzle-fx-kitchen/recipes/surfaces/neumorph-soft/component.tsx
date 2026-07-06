import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neumorph Soft — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxNeumorphSoft({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neumorph-soft">
      <div className="rfx-neumorph-soft__inner">
        {children ?? <h2>Neumorph Soft</h2>}
      </div>
    </section>
  );
}
export default RfxNeumorphSoft;
