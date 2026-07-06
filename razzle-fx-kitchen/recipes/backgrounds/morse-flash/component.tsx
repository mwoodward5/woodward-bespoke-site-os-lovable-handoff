import "./styles.css";
import type { ReactNode } from "react";
/**
 * Morse Flash — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMorseFlash({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-morse-flash">
      <div className="rfx-morse-flash__inner">
        {children ?? <h2>Morse Flash</h2>}
      </div>
    </section>
  );
}
export default RfxMorseFlash;
