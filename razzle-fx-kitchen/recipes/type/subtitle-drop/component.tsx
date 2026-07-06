import "./styles.css";
import type { ReactNode } from "react";
/**
 * Subtitle Drop — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSubtitleDrop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-subtitle-drop">
      <div className="rfx-subtitle-drop__inner">
        {children ?? <h2>Subtitle Drop</h2>}
      </div>
    </section>
  );
}
export default RfxSubtitleDrop;
