import "./styles.css";
import type { ReactNode } from "react";
/**
 * Voice Hint — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxVoiceHint({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-voice-hint">
      <div className="rfx-voice-hint__inner">
        {children ?? <h2>Voice Hint</h2>}
      </div>
    </section>
  );
}
export default RfxVoiceHint;
