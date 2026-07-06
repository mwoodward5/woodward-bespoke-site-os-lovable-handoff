import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cutout Text — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCutoutText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cutout-text">
      <div className="rfx-cutout-text__inner">
        {children ?? <h2>Cutout Text</h2>}
      </div>
    </section>
  );
}
export default RfxCutoutText;
