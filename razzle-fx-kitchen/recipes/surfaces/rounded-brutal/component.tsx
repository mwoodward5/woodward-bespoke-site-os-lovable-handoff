import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rounded Brutal — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxRoundedBrutal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rounded-brutal">
      <div className="rfx-rounded-brutal__inner">
        {children ?? <h2>Rounded Brutal</h2>}
      </div>
    </section>
  );
}
export default RfxRoundedBrutal;
