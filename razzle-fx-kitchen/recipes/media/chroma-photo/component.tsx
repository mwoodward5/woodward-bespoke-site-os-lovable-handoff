import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chroma Photo — media recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxChromaPhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chroma-photo">
      <div className="rfx-chroma-photo__inner">
        {children ?? <h2>Chroma Photo</h2>}
      </div>
    </section>
  );
}
export default RfxChromaPhoto;
