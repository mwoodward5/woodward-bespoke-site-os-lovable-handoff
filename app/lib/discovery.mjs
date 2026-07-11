// SiteForge SaaS — "Find My Business" discovery. Firecrawl-first: crawls the
// business's current site, extracts logo/colors/copy/services/contact/socials,
// detects CMS + SEO gaps, and lands everything as reviewable asset rows the
// user can approve, remove, or edit before the forge runs.
import path from "node:path";
import { insert, update, where, get, SITES_DIR, audit } from "./store.mjs";
import { id, nowIso, isUrl, readJsonFile, writeJsonFile } from "./util.mjs";
import { createJob, writeDiscoveryPackets, REPO_ROOT } from "./engine-adapter.mjs";
import { discover } from "../../factory/pipeline/01-discover.mjs";
import { scrape } from "../../factory/pipeline/02-scrape.mjs";
import { onEmit } from "../../factory/lib/emit.mjs";

const FIXTURE = path.join(REPO_ROOT, "app", "fixtures", "demo-discovery.json");

export async function runDiscovery({ user, project, profile }) {
  const firecrawlKey = process.env.FIRECRAWL_API_KEY;
  const packet = {
    slug: project.slug,
    business: {
      name: profile.business_name, category: profile.industry, city: profile.city, state: profile.state,
      current_website: profile.website || null, gbp_url: profile.gbp_url || null, source_platform: "other",
    },
    toggles: { firecrawl: Boolean(profile.website && firecrawlKey), gbp: Boolean(profile.gbp_url) },
    enrichment_sources: {},
  };

  const found = { logo: null, colors: [], photos: [], services: [], reviews: [], copy: null, contact: {}, socials: [], tech: null, seo_gaps: [] };
  let mode = "none";

  if (profile.website && firecrawlKey) {
    mode = "firecrawl";
    await discover(packet, { firecrawlKey, gbpEnabled: Boolean(profile.gbp_url), serpEnabled: false });
    await scrape(packet, { firecrawlKey });
    const src = packet.enrichment_sources;
    const branding = src.branding?.value ?? {};
    found.logo = branding.logo || src.logo?.value || null;
    found.colors = branding.colors || [];
    found.copy = src.copy?.value || null;
    found.photos = (packet.media?.catalog ?? []).filter((m) => m.url && m.kind !== "logo").map((m) => m.url);
    found.tech = branding.tech || null;
    if (found.copy) {
      found.services = extractServices(found.copy);
      found.contact = extractContact(found.copy);
      found.socials = extractSocials(found.copy);
      found.seo_gaps = detectSeoGaps(found.copy);
    }
  } else if (!profile.website) {
    mode = "no-website";
  } else {
    mode = "manual"; // website exists but no FIRECRAWL_API_KEY
    const fixture = readJsonFile(FIXTURE, null);
    if (fixture && process.env.SITEFORGE_DEMO_FIXTURES === "1") { Object.assign(found, fixture.found); mode = "fixture"; }
  }

  // Land findings as reviewable assets (idempotent per discovery run: clear stale auto rows first)
  for (const a of where("business_assets", (a) => a.project_id === project.id && a.origin === "discovery")) {
    update("business_assets", a.id, { stale: true, approved: false });
  }
  const mk = (kind, url, label, meta = {}, source = mode) =>
    insert("business_assets", { project_id: project.id, kind, url, label, meta, source, origin: "discovery", approved: true, stale: false });

  if (found.logo) mk("logo", found.logo, "Logo found on your current site");
  found.colors.slice(0, 6).forEach((c, i) => mk("color", null, typeof c === "string" ? c : c?.hex ?? `color ${i + 1}`, { value: c }));
  found.photos.slice(0, 24).forEach((u, i) => mk("photo", u, `Photo ${i + 1} from your site`));
  found.services.slice(0, 12).forEach((s) => mk("service", null, s));
  if (found.contact.phone) mk("contact", null, found.contact.phone, { type: "phone" });
  if (found.contact.email) mk("contact", null, found.contact.email, { type: "email" });
  if (found.contact.address) mk("contact", null, found.contact.address, { type: "address" });
  found.socials.slice(0, 8).forEach((u) => mk("social", u, new URL(u).hostname.replace("www.", "")));
  if (profile.gbp_url) mk("citation", profile.gbp_url, "Google Business Profile", { type: "gbp" });
  if (profile.city && profile.state) mk("map", null, `${profile.city}, ${profile.state}`, { type: "geo" });

  const summary = {
    mode,
    logo_found: Boolean(found.logo), colors_found: found.colors.length, photos_found: found.photos.length,
    services_found: found.services.length, reviews_found: found.reviews.length,
    socials_found: found.socials.length, tech: found.tech, seo_gaps: found.seo_gaps,
    map_found: Boolean(profile.city), ran_at: nowIso(),
  };
  update("site_projects", project.id, { discovery: summary, status: "discovery_ready" });

  // V7: GBP deep import (hours, attributed reviews, photos, lat/lng) — best-effort
  if (profile.gbp_url && firecrawlKey) {
    try {
      const { gbpDeepImport } = await import("./media-engine.mjs");
      const deep = await gbpDeepImport(project, profile);
      summary.gbp_deep = { hours: Boolean(deep.hours), reviews: deep.reviews.length, photos: deep.photos.length, latlng: Boolean(deep.latlng) };
    } catch (e) { summary.gbp_deep = { error: e.message }; }
    update("site_projects", project.id, { discovery: summary });
  }
  const assets = where("business_assets", (a) => a.project_id === project.id && !a.stale);
  writeDiscoveryPackets(path.join(SITES_DIR, project.id, "discovery"), { ...packet, services: found.services, seo_gaps: found.seo_gaps }, assets);
  audit(user.id, "discovery.run", project.id, summary);
  return summary;
}

// ---------- extraction helpers (markdown from Firecrawl) ----------
function extractServices(md) {
  const out = new Set();
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (/^#{1,3}\s.*(service|what we do|we offer)/i.test(lines[i])) {
      for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
        const m = lines[j].match(/^[-*]\s+\*{0,2}([A-Z][^*\n]{3,50})/);
        if (m) out.add(m[1].trim().replace(/[.:]$/, ""));
        if (/^#{1,3}\s/.test(lines[j])) break;
      }
    }
    const h = lines[i].match(/^#{2,4}\s+([A-Z][A-Za-z &-]{4,40}(?:Repair|Installation|Removal|Cleaning|Service|Design|Maintenance|Replacement|Inspection|Grading|Excavation|Landscaping|Roofing))\s*$/);
    if (h) out.add(h[1].trim());
  }
  return [...out].slice(0, 12);
}
function extractContact(md) {
  return {
    phone: (md.match(/\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/) || [])[0] || null,
    email: (md.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/) || [])[0] || null,
    address: (md.match(/\d{2,5}\s+[A-Z][A-Za-z .]+(?:St|Ave|Blvd|Rd|Dr|Ln|Way|Hwy|Ct)\.?,?\s+[A-Z][a-z]+/) || [])[0] || null,
  };
}
function extractSocials(md) {
  const urls = md.match(/https?:\/\/(?:www\.)?(facebook|instagram|yelp|youtube|tiktok|linkedin|x|twitter|nextdoor)\.com\/[^\s)"']+/gi) || [];
  return [...new Set(urls.map((u) => u.replace(/[).,]+$/, "")))];
}
function detectSeoGaps(md) {
  const gaps = [];
  if (!/schema|json-ld/i.test(md)) gaps.push("no structured data detected");
  if (md.length < 1500) gaps.push("thin page copy");
  if (!/faq|frequently asked/i.test(md)) gaps.push("no FAQ surface for AI answer engines");
  if (!/review|testimonial/i.test(md)) gaps.push("no visible review proof");
  return gaps;
}

// ---------- manual asset ops ----------
export function addManualAsset(project, { kind, url, label }) {
  if (url && !isUrl(url)) { const e = new Error("Asset URL must be http(s)."); e.status = 400; throw e; }
  return insert("business_assets", { project_id: project.id, kind, url: url || null, label: label || kind, meta: {}, source: "user", origin: "manual", approved: true, stale: false });
}
export function setAssetApproval(assetId, approved) { return update("business_assets", assetId, { approved: Boolean(approved) }); }
export function editAssetLabel(assetId, label) { return update("business_assets", assetId, { label: String(label).slice(0, 200) }); }
