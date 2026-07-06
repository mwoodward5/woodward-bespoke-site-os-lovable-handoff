import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sticker Peel — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStickerPeel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sticker-peel">
      <div className="rfx-sticker-peel__inner">
        {children ?? <h2>Sticker Peel</h2>}
      </div>
    </section>
  );
}
export default RfxStickerPeel;
