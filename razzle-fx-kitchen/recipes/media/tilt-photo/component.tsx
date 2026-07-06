import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tilt Photo — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTiltPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tilt-photo">
      <div className="rfx-tilt-photo__inner">
        {children ?? <h2>Tilt Photo</h2>}
      </div>
    </section>
  );
}
export default RfxTiltPhoto;
