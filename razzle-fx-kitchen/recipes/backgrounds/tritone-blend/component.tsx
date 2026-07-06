import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tritone Blend — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTritoneBlend({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tritone-blend">
      <div className="rfx-tritone-blend__inner">
        {children ?? <h2>Tritone Blend</h2>}
      </div>
    </section>
  );
}
export default RfxTritoneBlend;
