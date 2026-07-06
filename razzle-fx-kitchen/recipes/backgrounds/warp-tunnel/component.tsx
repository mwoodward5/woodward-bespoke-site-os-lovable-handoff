import "./styles.css";
import type { ReactNode } from "react";
/**
 * Warp Tunnel — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxWarpTunnel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-warp-tunnel">
      <div className="rfx-warp-tunnel__inner">
        {children ?? <h2>Warp Tunnel</h2>}
      </div>
    </section>
  );
}
export default RfxWarpTunnel;
