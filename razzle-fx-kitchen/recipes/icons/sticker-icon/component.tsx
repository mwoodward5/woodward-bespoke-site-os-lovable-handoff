import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sticker Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxStickerIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sticker-icon">
      <div className="rfx-sticker-icon__inner">
        {children ?? <h2>Sticker Icon</h2>}
      </div>
    </section>
  );
}
export default RfxStickerIcon;
