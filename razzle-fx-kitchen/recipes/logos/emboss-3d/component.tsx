import "./styles.css";
import type { ReactNode } from "react";
/**
 * Emboss 3d — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxEmboss3d({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-emboss-3d">
      <div className="rfx-emboss-3d__inner">
        {children ?? <h2>Emboss 3d</h2>}
      </div>
    </section>
  );
}
export default RfxEmboss3d;
