import "./styles.css";
import type { ReactNode } from "react";
/**
 * Photo Frame — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPhotoFrame({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-photo-frame">
      <div className="rfx-photo-frame__inner">
        {children ?? <h2>Photo Frame</h2>}
      </div>
    </section>
  );
}
export default RfxPhotoFrame;
