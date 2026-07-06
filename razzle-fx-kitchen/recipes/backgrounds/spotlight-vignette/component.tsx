import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spotlight Vignette — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSpotlightVignette({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spotlight-vignette">
      <div className="rfx-spotlight-vignette__inner">
        {children ?? <h2>Spotlight Vignette</h2>}
      </div>
    </section>
  );
}
export default RfxSpotlightVignette;
