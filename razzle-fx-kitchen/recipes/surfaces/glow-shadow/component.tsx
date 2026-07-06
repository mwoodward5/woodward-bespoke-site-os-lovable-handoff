import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glow Shadow — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGlowShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glow-shadow">
      <div className="rfx-glow-shadow__inner">
        {children ?? <h2>Glow Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxGlowShadow;
