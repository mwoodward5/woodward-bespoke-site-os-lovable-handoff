import "./styles.css";
import type { ReactNode } from "react";
/**
 * Brush Signature — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBrushSignature({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-brush-signature">
      <div className="rfx-brush-signature__inner">
        {children ?? <h2>Brush Signature</h2>}
      </div>
    </section>
  );
}
export default RfxBrushSignature;
