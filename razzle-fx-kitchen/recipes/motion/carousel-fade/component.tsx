import "./styles.css";
import type { ReactNode } from "react";
/**
 * Carousel Fade — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCarouselFade({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-carousel-fade">
      <div className="rfx-carousel-fade__inner">
        {children ?? <h2>Carousel Fade</h2>}
      </div>
    </section>
  );
}
export default RfxCarouselFade;
