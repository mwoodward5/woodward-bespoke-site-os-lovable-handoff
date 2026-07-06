import "./styles.css";
import type { ReactNode } from "react";
/**
 * Heartbeat Line — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHeartbeatLine({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-heartbeat-line">
      <div className="rfx-heartbeat-line__inner">
        {children ?? <h2>Heartbeat Line</h2>}
      </div>
    </section>
  );
}
export default RfxHeartbeatLine;
