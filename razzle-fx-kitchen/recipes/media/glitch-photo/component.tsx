import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glitch Photo — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxGlitchPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glitch-photo">
      <div className="rfx-glitch-photo__inner">
        {children ?? <h2>Glitch Photo</h2>}
      </div>
    </section>
  );
}
export default RfxGlitchPhoto;
