import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hotkey Hint — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHotkeyHint({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hotkey-hint">
      <div className="rfx-hotkey-hint__inner">
        {children ?? <h2>Hotkey Hint</h2>}
      </div>
    </section>
  );
}
export default RfxHotkeyHint;
