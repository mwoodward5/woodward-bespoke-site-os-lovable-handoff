import "./styles.css";
import type { ReactNode } from "react";
/**
 * Banner — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBanner({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-banner">
      <div className="rfx-banner__inner">
        {children ?? <h2>Banner</h2>}
      </div>
    </section>
  );
}
export default RfxBanner;
