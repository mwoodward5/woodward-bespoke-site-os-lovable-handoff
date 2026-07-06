import "./styles.css";
import type { ReactNode } from "react";
/**
 * Qr Decor — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxQrDecor({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-qr-decor">
      <div className="rfx-qr-decor__inner">
        {children ?? <h2>Qr Decor</h2>}
      </div>
    </section>
  );
}
export default RfxQrDecor;
