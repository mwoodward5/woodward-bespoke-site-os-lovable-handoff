import "./styles.css";
import type { ReactNode } from "react";
/**
 * Optical Size — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOpticalSize({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-optical-size">
      <div className="rfx-optical-size__inner">
        {children ?? <h2>Optical Size</h2>}
      </div>
    </section>
  );
}
export default RfxOpticalSize;
