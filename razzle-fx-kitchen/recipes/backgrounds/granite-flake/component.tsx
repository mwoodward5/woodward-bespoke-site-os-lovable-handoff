import "./styles.css";
import type { ReactNode } from "react";
/**
 * Granite Flake — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxGraniteFlake({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-granite-flake">
      <div className="rfx-granite-flake__inner">
        {children ?? <h2>Granite Flake</h2>}
      </div>
    </section>
  );
}
export default RfxGraniteFlake;
