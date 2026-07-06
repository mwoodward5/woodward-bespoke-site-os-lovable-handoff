import "./styles.css";
import type { ReactNode } from "react";
/**
 * Signature Draw — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSignatureDraw({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-signature-draw">
      <div className="rfx-signature-draw__inner">
        {children ?? <h2>Signature Draw</h2>}
      </div>
    </section>
  );
}
export default RfxSignatureDraw;
