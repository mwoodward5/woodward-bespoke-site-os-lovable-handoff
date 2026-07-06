import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tag Corner — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTagCorner({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tag-corner">
      <div className="rfx-tag-corner__inner">
        {children ?? <h2>Tag Corner</h2>}
      </div>
    </section>
  );
}
export default RfxTagCorner;
