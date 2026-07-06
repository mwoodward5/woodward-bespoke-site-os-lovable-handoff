import "./styles.css";
import type { ReactNode } from "react";
/**
 * Steam Drift — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSteamDrift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-steam-drift">
      <div className="rfx-steam-drift__inner">
        {children ?? <h2>Steam Drift</h2>}
      </div>
    </section>
  );
}
export default RfxSteamDrift;
