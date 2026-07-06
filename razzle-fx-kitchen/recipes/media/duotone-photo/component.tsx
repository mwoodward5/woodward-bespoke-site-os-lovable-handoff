import "./styles.css";
import type { ReactNode } from "react";
/**
 * Duotone Photo — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDuotonePhoto({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-duotone-photo">
      <div className="rfx-duotone-photo__inner">
        {children ?? <h2>Duotone Photo</h2>}
      </div>
    </section>
  );
}
export default RfxDuotonePhoto;
