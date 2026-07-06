import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glass Refract — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxGlassRefract({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glass-refract">
      <div className="rfx-glass-refract__inner">
        {children ?? <h2>Glass Refract</h2>}
      </div>
    </section>
  );
}
export default RfxGlassRefract;
