import "./styles.css";
import type { ReactNode } from "react";
/**
 * Emboss Text — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxEmbossText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-emboss-text">
      <div className="rfx-emboss-text__inner">
        {children ?? <h2>Emboss Text</h2>}
      </div>
    </section>
  );
}
export default RfxEmbossText;
