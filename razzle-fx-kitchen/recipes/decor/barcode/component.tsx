import "./styles.css";
import type { ReactNode } from "react";
/**
 * Barcode — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBarcode({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-barcode">
      <div className="rfx-barcode__inner">
        {children ?? <h2>Barcode</h2>}
      </div>
    </section>
  );
}
export default RfxBarcode;
