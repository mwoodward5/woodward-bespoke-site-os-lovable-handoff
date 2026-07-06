import "./styles.css";
import type { ReactNode } from "react";
/**
 * Masked Image — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMaskedImage({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-masked-image">
      <div className="rfx-masked-image__inner">
        {children ?? <h2>Masked Image</h2>}
      </div>
    </section>
  );
}
export default RfxMaskedImage;
