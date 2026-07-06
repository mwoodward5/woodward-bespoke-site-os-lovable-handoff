import "./styles.css";
import type { ReactNode } from "react";
/**
 * Banner Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBannerIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-banner-icon">
      <div className="rfx-banner-icon__inner">
        {children ?? <h2>Banner Icon</h2>}
      </div>
    </section>
  );
}
export default RfxBannerIcon;
