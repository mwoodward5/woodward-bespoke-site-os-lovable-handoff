import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spot Uv — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSpotUv({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spot-uv">
      <div className="rfx-spot-uv__inner">
        {children ?? <h2>Spot Uv</h2>}
      </div>
    </section>
  );
}
export default RfxSpotUv;
