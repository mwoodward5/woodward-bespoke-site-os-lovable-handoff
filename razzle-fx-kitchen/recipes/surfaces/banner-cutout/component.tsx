import "./styles.css";
import type { ReactNode } from "react";
/**
 * Banner Cutout — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBannerCutout({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-banner-cutout">
      <div className="rfx-banner-cutout__inner">
        {children ?? <h2>Banner Cutout</h2>}
      </div>
    </section>
  );
}
export default RfxBannerCutout;
