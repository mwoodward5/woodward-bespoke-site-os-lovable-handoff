import "./styles.css";
import type { ReactNode } from "react";
/**
 * Aeroglass — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxAeroglass({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-aeroglass">
      <div className="rfx-aeroglass__inner">
        {children ?? <h2>Aeroglass</h2>}
      </div>
    </section>
  );
}
export default RfxAeroglass;
