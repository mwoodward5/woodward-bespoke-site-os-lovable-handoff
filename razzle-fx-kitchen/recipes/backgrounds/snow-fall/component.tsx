import "./styles.css";
import type { ReactNode } from "react";
/**
 * Snow Fall — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSnowFall({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-snow-fall">
      <div className="rfx-snow-fall__inner">
        {children ?? <h2>Snow Fall</h2>}
      </div>
    </section>
  );
}
export default RfxSnowFall;
