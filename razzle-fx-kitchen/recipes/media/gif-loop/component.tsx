import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gif Loop — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxGifLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gif-loop">
      <div className="rfx-gif-loop__inner">
        {children ?? <h2>Gif Loop</h2>}
      </div>
    </section>
  );
}
export default RfxGifLoop;
