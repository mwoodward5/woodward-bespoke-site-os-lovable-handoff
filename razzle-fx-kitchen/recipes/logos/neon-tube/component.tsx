import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neon Tube — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxNeonTube({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neon-tube">
      <div className="rfx-neon-tube__inner">
        {children ?? <h2>Neon Tube</h2>}
      </div>
    </section>
  );
}
export default RfxNeonTube;
