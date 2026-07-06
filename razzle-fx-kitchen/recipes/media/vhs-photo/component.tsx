import "./styles.css";
import type { ReactNode } from "react";
/**
 * Vhs Photo — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxVhsPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-vhs-photo">
      <div className="rfx-vhs-photo__inner">
        {children ?? <h2>Vhs Photo</h2>}
      </div>
    </section>
  );
}
export default RfxVhsPhoto;
