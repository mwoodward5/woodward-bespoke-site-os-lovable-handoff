import "./styles.css";
import type { ReactNode } from "react";
/**
 * Laser Engrave — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLaserEngrave({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-laser-engrave">
      <div className="rfx-laser-engrave__inner">
        {children ?? <h2>Laser Engrave</h2>}
      </div>
    </section>
  );
}
export default RfxLaserEngrave;
