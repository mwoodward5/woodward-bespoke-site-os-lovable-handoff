// Pipeline stage 2 — scrape: fetch full page content + media catalog.
// Assumes discover already populated enrichment_sources.branding & .copy.
import { emit } from "../lib/emit.mjs";
const PHOTO_JUNK = /favicon|icon|logo|sprite|tracking|pixel|avatar|emoji|badge|\.svg(?:\?|$)/i;
const MAX_PHOTOS = 24;

export async function scrape(packet, { firecrawlKey }) {
  emit("scrape", "start", {});
  const src = packet.enrichment_sources ?? {};
  const seen = new Set();
  const media = [];
  const pushPhoto = (url) => {
    if (!url || typeof url !== "string" || !/^https?:\/\//i.test(url)) return;
    if (PHOTO_JUNK.test(url)) return;
    const key = url.replace(/\?.*$/, "");
    if (seen.has(key) || media.length >= MAX_PHOTOS) return;
    seen.add(key);
    // kind must be "photo" — the media plane and mergeV7Assets filter on it.
    media.push({ kind: "photo", url, source: "site", treatment: "family-duotone" });
  };
  for (const url of src.photos?.value ?? []) pushPhoto(url);
  const branding = src.branding?.value;
  if (branding?.images) {
    for (const v of Object.values(branding.images)) {
      if (v && typeof v === "string") pushPhoto(v);
    }
  }
  packet.media = { catalog: media };
  emit("scrape", "done", { media: media.length });
  return packet;
}
