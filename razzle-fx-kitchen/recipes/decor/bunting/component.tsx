import "./styles.css";
import type { ReactNode } from "react";
/**
 * Bunting — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBunting({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-bunting">
      <div className="rfx-bunting__inner">
        {children ?? <h2>Bunting</h2>}
      </div>
    </section>
  );
}
export default RfxBunting;
