import "./styles.css";
import type { ReactNode } from "react";
/**
 * Grain Photo — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGrainPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-grain-photo">
      <div className="rfx-grain-photo__inner">
        {children ?? <h2>Grain Photo</h2>}
      </div>
    </section>
  );
}
export default RfxGrainPhoto;
