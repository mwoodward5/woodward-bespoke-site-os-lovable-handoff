import "./styles.css";
import type { ReactNode } from "react";
/**
 * Toast Slide — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxToastSlide({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-toast-slide">
      <div className="rfx-toast-slide__inner">
        {children ?? <h2>Toast Slide</h2>}
      </div>
    </section>
  );
}
export default RfxToastSlide;
