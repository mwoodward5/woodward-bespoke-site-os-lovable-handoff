import "./styles.css";
import type { ReactNode } from "react";
/**
 * Haptic Tap — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHapticTap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-haptic-tap">
      <div className="rfx-haptic-tap__inner">
        {children ?? <h2>Haptic Tap</h2>}
      </div>
    </section>
  );
}
export default RfxHapticTap;
