import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glossy Icon — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxGlossyIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glossy-icon">
      <div className="rfx-glossy-icon__inner">
        {children ?? <h2>Glossy Icon</h2>}
      </div>
    </section>
  );
}
export default RfxGlossyIcon;
