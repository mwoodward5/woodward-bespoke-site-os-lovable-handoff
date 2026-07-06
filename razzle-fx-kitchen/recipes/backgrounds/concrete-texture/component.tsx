import "./styles.css";
import type { ReactNode } from "react";
/**
 * Concrete Texture — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxConcreteTexture({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-concrete-texture">
      <div className="rfx-concrete-texture__inner">
        {children ?? <h2>Concrete Texture</h2>}
      </div>
    </section>
  );
}
export default RfxConcreteTexture;
