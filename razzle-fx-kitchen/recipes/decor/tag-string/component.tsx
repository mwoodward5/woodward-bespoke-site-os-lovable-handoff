import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tag String — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxTagString({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tag-string">
      <div className="rfx-tag-string__inner">
        {children ?? <h2>Tag String</h2>}
      </div>
    </section>
  );
}
export default RfxTagString;
