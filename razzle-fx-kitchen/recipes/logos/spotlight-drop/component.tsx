import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spotlight Drop — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSpotlightDrop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spotlight-drop">
      <div className="rfx-spotlight-drop__inner">
        {children ?? <h2>Spotlight Drop</h2>}
      </div>
    </section>
  );
}
export default RfxSpotlightDrop;
