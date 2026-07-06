import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cityscape Blur — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCityscapeBlur({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cityscape-blur">
      <div className="rfx-cityscape-blur__inner">
        {children ?? <h2>Cityscape Blur</h2>}
      </div>
    </section>
  );
}
export default RfxCityscapeBlur;
