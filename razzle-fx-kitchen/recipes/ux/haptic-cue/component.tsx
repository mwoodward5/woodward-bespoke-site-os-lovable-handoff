import "./styles.css";
import type { ReactNode } from "react";
/**
 * Haptic Cue — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxHapticCue({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-haptic-cue">
      <div className="rfx-haptic-cue__inner">
        {children ?? <h2>Haptic Cue</h2>}
      </div>
    </section>
  );
}
export default RfxHapticCue;
