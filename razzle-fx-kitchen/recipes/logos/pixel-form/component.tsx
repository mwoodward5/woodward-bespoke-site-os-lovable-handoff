import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pixel Form — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPixelForm({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pixel-form">
      <div className="rfx-pixel-form__inner">
        {children ?? <h2>Pixel Form</h2>}
      </div>
    </section>
  );
}
export default RfxPixelForm;
