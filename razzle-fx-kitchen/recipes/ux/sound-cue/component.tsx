import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sound Cue — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSoundCue({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sound-cue">
      <div className="rfx-sound-cue__inner">
        {children ?? <h2>Sound Cue</h2>}
      </div>
    </section>
  );
}
export default RfxSoundCue;
