import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sonar Ping — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSonarPing({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sonar-ping">
      <div className="rfx-sonar-ping__inner">
        {children ?? <h2>Sonar Ping</h2>}
      </div>
    </section>
  );
}
export default RfxSonarPing;
