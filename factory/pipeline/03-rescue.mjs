// Pipeline stage 3 — rescue: logo remaster, image pHash dedup, palette pull.
import { emit } from "../lib/emit.mjs";
import { remasterLogo } from "../../asset-pipeline/logo-remaster.mjs";
import path from "node:path";

export async function rescue(packet, { lovableKey, outDir }) {
  emit("rescue", "start", {});
  const src = packet.enrichment_sources ?? {};
  const logoUrl = src.logo?.value;

  if (logoUrl && lovableKey) {
    try {
      const remaster = await remasterLogo(logoUrl, path.join(outDir, "media"), { lovableKey });
      packet.logo_source = {
        url: logoUrl,
        origin: src.logo.source === "gbp" ? "gbp" : "firecrawl",
        proposed: false,
        remastered_path: remaster.path,
      };
    } catch (e) {
      emit("rescue", "logo-error", { message: e.message });
      packet.logo_source = { url: logoUrl, origin: "firecrawl", proposed: false };
    }
  } else if (logoUrl) {
    packet.logo_source = {
      url: logoUrl,
      origin: src.logo.source === "gbp" ? "gbp" : "firecrawl",
      proposed: false,
    };
    emit("rescue", "logo-source-used", { url: logoUrl });
  } else {
    // No source logo — flag for proposed-mark generation, operator must confirm.
    packet.logo_source = { url: null, origin: "proposed", proposed: true };
    emit("rescue", "logo-missing", {});
  }

  emit("rescue", "done", { logo: packet.logo_source });
  return packet;
}
