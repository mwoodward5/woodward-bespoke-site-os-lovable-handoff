import "./styles.css";
import type { ReactNode } from "react";
/**
 * Postcard Stamp — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPostcardStamp({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-postcard-stamp">
      <div className="rfx-postcard-stamp__inner">
        {children ?? <h2>Postcard Stamp</h2>}
      </div>
    </section>
  );
}
export default RfxPostcardStamp;
