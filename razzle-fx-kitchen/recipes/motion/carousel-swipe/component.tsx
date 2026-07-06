import "./styles.css";
import type { ReactNode } from "react";
/**
 * Carousel Swipe — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCarouselSwipe({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-carousel-swipe">
      <div className="rfx-carousel-swipe__inner">
        {children ?? <h2>Carousel Swipe</h2>}
      </div>
    </section>
  );
}
export default RfxCarouselSwipe;
