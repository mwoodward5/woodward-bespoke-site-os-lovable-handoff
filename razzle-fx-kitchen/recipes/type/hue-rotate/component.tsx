import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hue Rotate — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHueRotate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hue-rotate">
      <div className="rfx-hue-rotate__inner">
        {children ?? <h2>Hue Rotate</h2>}
      </div>
    </section>
  );
}
export default RfxHueRotate;
