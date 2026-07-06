import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glitch Hover — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxGlitchHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glitch-hover">
      <div className="rfx-glitch-hover__inner">
        {children ?? <h2>Glitch Hover</h2>}
      </div>
    </section>
  );
}
export default RfxGlitchHover;
