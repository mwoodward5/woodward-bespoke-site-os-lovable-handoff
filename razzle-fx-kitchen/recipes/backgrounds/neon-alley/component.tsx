import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neon Alley — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxNeonAlley({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neon-alley">
      <div className="rfx-neon-alley__inner">
        {children ?? <h2>Neon Alley</h2>}
      </div>
    </section>
  );
}
export default RfxNeonAlley;
