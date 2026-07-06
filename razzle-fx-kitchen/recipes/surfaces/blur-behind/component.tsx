import "./styles.css";
import type { ReactNode } from "react";
/**
 * Blur Behind — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBlurBehind({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-blur-behind">
      <div className="rfx-blur-behind__inner">
        {children ?? <h2>Blur Behind</h2>}
      </div>
    </section>
  );
}
export default RfxBlurBehind;
