import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kinetic Poster — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxKineticPoster({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kinetic-poster">
      <div className="rfx-kinetic-poster__inner">
        {children ?? <h2>Kinetic Poster</h2>}
      </div>
    </section>
  );
}
export default RfxKineticPoster;
