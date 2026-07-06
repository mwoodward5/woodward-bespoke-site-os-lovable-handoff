import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neon Glow — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxNeonGlow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neon-glow">
      <div className="rfx-neon-glow__inner">
        {children ?? <h2>Neon Glow</h2>}
      </div>
    </section>
  );
}
export default RfxNeonGlow;
