import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tritone Photo — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTritonePhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tritone-photo">
      <div className="rfx-tritone-photo__inner">
        {children ?? <h2>Tritone Photo</h2>}
      </div>
    </section>
  );
}
export default RfxTritonePhoto;
