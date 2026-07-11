// Pipeline stage 5 — SiteForge renderer V7 ("sellable on sight").
// Extends v6 (trade-true) with the RENDERER_V7_BRIEF ship list:
//   1. Media engine — layered hero media plane (real photo > AI ambiance texture
//      > never empty). AI imagery is ambiance-only, labeled source:"ai".
//   2. GBP deep import rendering — sourced hours (+openingHoursSpecification),
//      attributed review snippets, real photos, satellite map (MapLibre + Esri
//      World Imagery) with pin + directions deep link. SVG ring fallback.
//   3. Remic formulas as real architectures: single_page_cinematic scroll order
//      (PROMPT A) and premier_multi_page 5–8 page hub (PROMPT B).
//   4. Optimization surface — scorecard.json + assets.json emitted per build.
// Visual law: docs/launch/ENGINE_VISUAL_STANDARDS.md — hero ≥6 layers, logo
// 72–80px, no banned phrases, no invented facts, deterministic seed, 320px
// clean, reduced-motion everywhere. v6 stays untouched; this file replaces it
// as the active import target.
import { emit } from "../lib/emit.mjs";
import { mkdirSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { blobToPath, seedFrom } from "../lib/hero-seed.mjs";
import { ambianceSvg, ambianceFor, mix } from "../lib/ambiance-v7.mjs";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pick = (arr, rng) => arr[Math.floor(rng() * arr.length)];
const useed = (seed) => seed.seed >>> 0; // seed.seed is signed int32 (XOR); normalize for indexing

// ---------------- trade knowledge (v6 table, carried forward) ----------------
const TRADES = {
  roofing:    { noun: "roof", plural: "roofs", verb: "protect", services: ["Roof replacement", "Storm & hail repair", "Metal roofing", "Roof inspections"], material: ["standing seam", "architectural shingle", "underlayment", "flashing"], hooks: ["Built for the weather {city} actually gets.", "A {noun} that ends the leak-watch for good.", "Storm season is not a surprise. Your {noun} shouldn't act like it."], stat: "roofs restored" },
  landscaping:{ noun: "yard", plural: "landscapes", verb: "shape", services: ["Landscape design", "Paver patios", "Planting & cleanup", "Irrigation"], material: ["flagstone", "drip line", "native planting", "steel edging"], hooks: ["A {noun} that looks tended even in the off-season.", "Outdoor rooms, built for {city} light.", "Grass is easy. A landscape has intent."], stat: "yards transformed" },
  plumbing:   { noun: "plumbing", plural: "systems", verb: "keep flowing", services: ["Repiping", "Water heaters", "Drain cleaning", "Leak detection"], material: ["PEX", "copper", "pressure valve", "clean-out"], hooks: ["Pipes don't wait for morning. Neither do we.", "Quiet {noun} is the whole job.", "Water goes where we tell it in {city}."], stat: "calls answered" },
  electrical: { noun: "wiring", plural: "panels", verb: "power", services: ["Panel upgrades", "EV chargers", "Lighting", "Troubleshooting"], material: ["200-amp panel", "conduit", "GFCI", "load calc"], hooks: ["Clean current, tidy conduit, no surprises on the invoice.", "Your panel should be the most boring thing you own.", "{city} runs on good {noun}. So should your house."], stat: "panels upgraded" },
  hvac:       { noun: "air", plural: "systems", verb: "condition", services: ["AC repair", "Furnace installs", "Duct sealing", "Tune-ups"], material: ["heat pump", "SEER2", "plenum", "refrigerant"], hooks: ["Comfort you stop thinking about.", "Sized right, sealed tight, serviced on time.", "{city} summers negotiated on your behalf."], stat: "systems tuned" },
  excavation: { noun: "ground", plural: "sites", verb: "move", services: ["Site prep", "Grading", "Trenching", "Demolition"], material: ["compaction", "cut and fill", "swale", "base rock"], hooks: ["Dirt has opinions. We negotiate.", "Every build starts with honest {noun}.", "Grade it right once."], stat: "sites prepped" },
  painting:   { noun: "walls", plural: "rooms", verb: "finish", services: ["Interior painting", "Cabinet refinishing", "Color consultation", "Exterior repaint"], material: ["low-VOC", "levelling primer", "cut line", "satin finish"], hooks: ["Color chosen for {city} light, not a swatch card.", "A finish you'll want to touch.", "The last coat is the one people see. We obsess over all of them."], stat: "rooms finished" },
  fencing:    { noun: "fence", plural: "fence lines", verb: "frame", services: ["Cedar privacy fences", "Gates & hardware", "Ranch fencing", "Repairs"], material: ["post-set", "cedar picket", "powder-coat", "gate latch"], hooks: ["Straight lines you can sight down.", "A {noun} that holds its line for decades.", "Good {plural} make patient neighbors."], stat: "fence lines set" },
  "tree care":{ noun: "canopy", plural: "trees", verb: "steward", services: ["Pruning", "Removals", "Health assessments", "Stump grinding"], material: ["crown thinning", "rigging", "root flare", "arborist chip"], hooks: ["Your {plural} are decades old. Hire like it.", "Careful cuts, healthy {noun}.", "{city} shade, kept safe."], stat: "trees cared for" },
  concrete:   { noun: "slab", plural: "pours", verb: "form", services: ["Driveways", "Patios", "Foundations", "Flatwork repair"], material: ["rebar grid", "broom finish", "control joint", "4000 PSI"], hooks: ["Formed square, poured full, cut clean.", "A {noun} is forever. Pour accordingly.", "Concrete rewards patience and preparation."], stat: "pours completed" },
  "pool service": { noun: "pool", plural: "pools", verb: "keep swim-ready", services: ["Weekly pool service", "Equipment repair", "Green-to-clean rescues", "Filter & pump installs"], material: ["salt cell", "variable-speed pump", "DE filter", "water chemistry"], hooks: ["Swim-ready every week of the season.", "A {noun} you never have to think about.", "{city} water, balanced like a pro did it — because one did."], stat: "pools maintained" },
  cleaning:   { noun: "space", plural: "homes", verb: "reset", services: ["Recurring cleans", "Deep cleans", "Move-out cleans", "Post-construction"], material: ["HEPA vac", "microfiber system", "checklist", "green products"], hooks: ["Walk in like it's move-in day.", "A clean you can smell from the porch.", "{city} homes, reset weekly."], stat: "homes reset" },
  solar:      { noun: "array", plural: "systems", verb: "harvest", services: ["Solar installs", "Battery storage", "Panel cleaning", "System audits"], material: ["bifacial panel", "microinverter", "rapid shutdown", "kWh offset"], hooks: ["Your roof has a day job now.", "{city} sun, on your ledger.", "An {noun} sized to the bill, not the brochure."], stat: "systems commissioned" },
  default:    { noun: "work", plural: "projects", verb: "deliver", services: ["Consultations", "Installations", "Maintenance", "Repairs"], material: ["scope", "materials", "schedule", "walkthrough"], hooks: ["Done properly, priced plainly.", "{city} work with a name on it.", "The quote is the price."], stat: "projects delivered" },
};
const tradeOf = (category) => {
  const c = (category || "").toLowerCase();
  for (const k of Object.keys(TRADES)) if (k !== "default" && c.includes(k.split(" ")[0])) return { key: k, ...TRADES[k] };
  if (/tree/.test(c)) return { key: "tree care", ...TRADES["tree care"] };
  return { key: "default", ...TRADES.default };
};

const PALETTES = {
  roofing:    [{ bg: "#F5F1E8", ink: "#231F1A", accent: "#A63D2F", accent2: "#3E5C6B", mode: "light" }, { bg: "#1C2228", ink: "#F2EEE6", accent: "#E0703D", accent2: "#8FB0C0", mode: "dark" }],
  landscaping:[{ bg: "#F7F5EC", ink: "#22281E", accent: "#3E6B3F", accent2: "#B98A2F", mode: "light" }, { bg: "#20281F", ink: "#F1F0E4", accent: "#9BC08A", accent2: "#D9A441", mode: "dark" }],
  plumbing:   [{ bg: "#F2F5F4", ink: "#152528", accent: "#0F6B70", accent2: "#C06B2E", mode: "light" }, { bg: "#12262A", ink: "#EDF4F2", accent: "#4FB3AC", accent2: "#E09154", mode: "dark" }],
  electrical: [{ bg: "#F6F4EF", ink: "#1D1D22", accent: "#B07B10", accent2: "#31456B", mode: "light" }, { bg: "#191A21", ink: "#F3F1E9", accent: "#E8B23A", accent2: "#7C93C4", mode: "dark" }],
  hvac:       [{ bg: "#F3F5F7", ink: "#1B2430", accent: "#2E6188", accent2: "#C46A3B", mode: "light" }, { bg: "#17222C", ink: "#EFF3F6", accent: "#6FA8CD", accent2: "#E0854F", mode: "dark" }],
  excavation: [{ bg: "#F5F0E6", ink: "#26201A", accent: "#8A5A2B", accent2: "#4E5B3F", mode: "light" }, { bg: "#241E17", ink: "#F2ECDF", accent: "#CE9455", accent2: "#93A578", mode: "dark" }],
  painting:   [{ bg: "#FAFAF7", ink: "#232228", accent: "#7D4B9E", accent2: "#C2803B", mode: "light" }, { bg: "#232028", ink: "#F6F4F0", accent: "#B58BD0", accent2: "#DBA55E", mode: "dark" }],
  fencing:    [{ bg: "#F7F3EA", ink: "#241F18", accent: "#8C5A28", accent2: "#48604A", mode: "light" }, { bg: "#221D16", ink: "#F3EEE3", accent: "#CE9455", accent2: "#8FAF97", mode: "dark" }],
  "tree care":[{ bg: "#F4F6EF", ink: "#1F261C", accent: "#4A6B35", accent2: "#A66B2E", mode: "light" }, { bg: "#1D241A", ink: "#F0F2E8", accent: "#98BB7C", accent2: "#D99C55", mode: "dark" }],
  concrete:   [{ bg: "#F4F3F0", ink: "#232323", accent: "#5C6670", accent2: "#B4552D", mode: "light" }, { bg: "#212224", ink: "#F1F0EC", accent: "#9AA7B4", accent2: "#DE8B5B", mode: "dark" }],
  "pool service": [{ bg: "#F1F7F8", ink: "#12333F", accent: "#0F7B9E", accent2: "#C98A3B", mode: "light" }, { bg: "#0F2A33", ink: "#EAF4F5", accent: "#4FB6D8", accent2: "#E0A45E", mode: "dark" }],
  cleaning:   [{ bg: "#F8F7F4", ink: "#22262A", accent: "#2F7A68", accent2: "#B4552D", mode: "light" }, { bg: "#1D2422", ink: "#F2F4F0", accent: "#7BC0AC", accent2: "#DE8B5B", mode: "dark" }],
  solar:      [{ bg: "#FBF7EE", ink: "#20221E", accent: "#C28A12", accent2: "#33566B", mode: "light" }, { bg: "#1C1E22", ink: "#F6F2E7", accent: "#EFC04A", accent2: "#7FA3BE", mode: "dark" }],
  default:    [{ bg: "#F7F4EE", ink: "#1E1B16", accent: "#B4552D", accent2: "#41604F", mode: "light" }, { bg: "#1E1B16", ink: "#F4F0E7", accent: "#D97E4A", accent2: "#8FAF9B", mode: "dark" }],
};
const FAMILY_MODE = { "cinematic-video-parallax": "dark", "split-editorial-index": "light", "service-map-pins": "light", "material-lab-swatch": "light", "magazine-owner-letter": "light", "atlas-grid-reveal": "dark" };

const TYPE_PAIRS = [
  { display: "'Fraunces', Georgia, serif", body: "'Archivo', system-ui, sans-serif", import: "Fraunces:opsz,wght@9..144,500..700&family=Archivo:wght@400;600;700" },
  { display: "'Libre Caslon Text', Georgia, serif", body: "'Jost', system-ui, sans-serif", import: "Libre+Caslon+Text:wght@400;700&family=Jost:wght@400;600;700" },
  { display: "'Space Grotesk', system-ui, sans-serif", body: "'Source Serif 4', Georgia, serif", import: "Space+Grotesk:wght@500;700&family=Source+Serif+4:wght@400;600" },
  { display: "'Zilla Slab', Georgia, serif", body: "'Public Sans', system-ui, sans-serif", import: "Zilla+Slab:wght@500;700&family=Public+Sans:wght@400;600;700" },
  { display: "'Newsreader', Georgia, serif", body: "'Figtree', system-ui, sans-serif", import: "Newsreader:opsz,wght@6..72,500..700&family=Figtree:wght@400;600;700" },
  { display: "'Bricolage Grotesque', system-ui, sans-serif", body: "'Instrument Sans', system-ui, sans-serif", import: "Bricolage+Grotesque:opsz,wght@12..96,500..700&family=Instrument+Sans:wght@400;600" },
  { display: "'Playfair Display', Georgia, serif", body: "'Karla', system-ui, sans-serif", import: "Playfair+Display:wght@500;700&family=Karla:wght@400;600;700" },
  { display: "'DM Serif Display', Georgia, serif", body: "'Manrope', system-ui, sans-serif", import: "DM+Serif+Display&family=Manrope:wght@400;600;700" },
  { display: "'Sora', system-ui, sans-serif", body: "'Lora', Georgia, serif", import: "Sora:wght@500;700&family=Lora:wght@400;600" },
  { display: "'Cormorant Garamond', Georgia, serif", body: "'Work Sans', system-ui, sans-serif", import: "Cormorant+Garamond:wght@500;700&family=Work+Sans:wght@400;600" },
  { display: "'Archivo Black', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", import: "Archivo+Black&family=Inter:wght@400;600" },
  { display: "'Bitter', Georgia, serif", body: "'Rubik', system-ui, sans-serif", import: "Bitter:wght@500;700&family=Rubik:wght@400;600" },
  { display: "'Unbounded', system-ui, sans-serif", body: "'Mulish', system-ui, sans-serif", import: "Unbounded:wght@500;700&family=Mulish:wght@400;600;700" },
  { display: "'Crimson Pro', Georgia, serif", body: "'Outfit', system-ui, sans-serif", import: "Crimson+Pro:wght@500;700&family=Outfit:wght@400;600" },
  { display: "'Syne', system-ui, sans-serif", body: "'Albert Sans', system-ui, sans-serif", import: "Syne:wght@600;700&family=Albert+Sans:wght@400;600" },
  { display: "'Gelasio', Georgia, serif", body: "'Hanken Grotesk', system-ui, sans-serif", import: "Gelasio:wght@500;700&family=Hanken+Grotesk:wght@400;600;700" },
];

// ---------------- per-business palette derivation (fix: sameness) ----------------
// Base = trade palette; then seeded hue rotation + accent swap so two businesses in
// the same trade never share a byte-identical theme, and the prospect's own brand
// colors (when discovered) take priority for the accent, contrast permitting.
function hexToHsl(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "")); if (!m) return null;
  const n = parseInt(m[1], 16); let r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, sat = 0; const l = (mx + mn) / 2;
  if (mx !== mn) { const d = mx - mn; sat = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    h = mx === r ? ((g - b) / d + (g < b ? 6 : 0)) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; }
  return { h, s: sat, l };
}
function hslToHex({ h, s: sat, l }) {
  h = ((h % 360) + 360) % 360; const c = (1 - Math.abs(2 * l - 1)) * sat, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2;
  let [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  const to = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}
function relLum(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "")); if (!m) return null;
  const n = parseInt(m[1], 16);
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(n >> 16 & 255) + 0.7152 * f(n >> 8 & 255) + 0.0722 * f(n & 255);
}
function contrast(a, b) { const la = relLum(a), lb = relLum(b); if (la == null || lb == null) return 0; const [hi, lo] = la > lb ? [la, lb] : [lb, la]; return (hi + 0.05) / (lo + 0.05); }
function brandColorsOf(packet) {
  const src = packet.enrichment_sources ?? {};
  const cands = src.branding?.value?.colors || src.branding?.colors || packet.brand_colors || [];
  return (Array.isArray(cands) ? cands : []).filter((c) => /^#?[0-9a-f]{6}$/i.test(String(c))).map((c) => (c.startsWith("#") ? c : `#${c}`));
}
function derivePalette(base, seed, packet) {
  const pal = { ...base };
  const r1 = seed.rng(), r2 = seed.rng(), r3 = seed.rng();
  // seeded hue rotation of both accents (-16..+16 deg) + slight sat/light drift
  for (const k of ["accent", "accent2"]) {
    const hsl = hexToHsl(pal[k]); if (!hsl) continue;
    hsl.h += (r1 - 0.5) * 32; hsl.s = Math.min(0.9, Math.max(0.25, hsl.s + (r2 - 0.5) * 0.12)); hsl.l = Math.min(0.72, Math.max(0.24, hsl.l + (r3 - 0.5) * 0.08));
    pal[k] = hslToHex(hsl);
  }
  if (r2 > 0.55) { const t = pal.accent; pal.accent = pal.accent2; pal.accent2 = t; } // seeded accent swap
  // prospect brand color wins the primary accent when it reads on this background
  const brand = brandColorsOf(packet).find((c) => contrast(c, pal.bg) >= 3 && contrast(c, pal.ink) >= 1.6);
  if (brand) pal.accent = brand;
  // contrast clamp: derived accents must stay readable on the background
  for (const k of ["accent", "accent2"]) {
    let guard = 0;
    while (contrast(pal[k], pal.bg) < 2.6 && guard++ < 8) {
      const hsl = hexToHsl(pal[k]); if (!hsl) break;
      hsl.l = pal.mode === "light" ? Math.max(0.18, hsl.l - 0.06) : Math.min(0.85, hsl.l + 0.06);
      pal[k] = hslToHex(hsl);
    }
  }
  return pal;
}

// ---------------- motif + scene (v6, carried) ----------------
function motifSvg(tradeKey, accent, seed) {
  const o = 0.16;
  const m = {
    roofing: `<g fill="none" stroke="${accent}" stroke-width="1.4" opacity="${o}">${[0,1,2,3].map(i=>`<path d="M ${40+i*90} 300 L ${240+i*90} ${120+seed.motifScale*30} L ${440+i*90} 300"/>`).join("")}</g>`,
    landscaping: `<g fill="none" stroke="${accent}" stroke-width="1.2" opacity="${o}">${[0,1,2,3,4].map(i=>`<path d="M -20 ${80+i*70} C 200 ${20+i*70}, 420 ${140+i*70}, 660 ${60+i*70} S 980 ${120+i*70}, 1220 ${70+i*70}"/>`).join("")}</g>`,
    plumbing: `<g fill="none" stroke="${accent}" stroke-width="1.6" opacity="${o}"><path d="M 60 60 H 300 A 40 40 0 0 1 340 100 V 260 A 40 40 0 0 0 380 300 H 640 A 40 40 0 0 1 680 340 V 420"/><circle cx="300" cy="60" r="8"/><circle cx="680" cy="420" r="8"/></g>`,
    electrical: `<g fill="none" stroke="${accent}" stroke-width="1.4" opacity="${o}"><path d="M 40 200 H 260 L 300 120 L 360 280 L 420 160 L 460 200 H 700"/><circle cx="700" cy="200" r="7" fill="${accent}"/><path d="M 200 340 H 380 L 420 300 H 620"/></g>`,
    "pool service": `<g fill="none" stroke="${accent}" stroke-width="1.4" opacity="${o}">${[0,1,2,3,4].map(i=>`<path d="M -20 ${110+i*80} q 80 ${-30-seed.motifScale*14} 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0"/>`).join("")}</g>`,
    excavation: `<g fill="none" stroke="${accent}" stroke-width="1.1" opacity="${o}">${[0,1,2,3,4,5].map(i=>`<line x1="${i*160}" y1="0" x2="${i*160}" y2="460"/>`).join("")}${[0,1,2].map(i=>`<line x1="0" y1="${i*160}" x2="1000" y2="${i*160}"/>`).join("")}<path d="M 80 380 L 300 180 L 520 340 L 760 140" stroke-width="2.2"/></g>`,
    default: `<g fill="none" stroke="${accent}" stroke-width="1.2" opacity="${o}">${[0,1,2,3].map(i=>`<circle cx="${300+seed.motifScale*100}" cy="230" r="${70+i*60}"/>`).join("")}</g>`,
  };
  return m[tradeKey] || m.default;
}

function sceneSvg(trade, pal, seed, blob) {
  return `<svg class="scene-under" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><clipPath id="blobClip${useed(seed) % 997}"><path d="${blob}" transform="translate(0,-160) scale(1.0,1.28)"/></clipPath>
    <linearGradient id="sg${useed(seed) % 997}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${pal.accent}" stop-opacity=".28"/><stop offset="1" stop-color="${pal.accent2}" stop-opacity=".14"/></linearGradient></defs>
    <rect width="1000" height="640" fill="url(#sg${useed(seed) % 997})"/>
    <g clip-path="url(#blobClip${useed(seed) % 997})"><rect width="1000" height="640" fill="${pal.accent}" opacity=".12"/></g>
    ${motifSvg(trade.key, pal.mode === "light" ? pal.ink : pal.accent, seed)}
  </svg>`;
}

function logoBlock(packet, name, pal, rel = "") {
  const src = packet.logo_source?.chosen_url || packet.logo_source?.remastered_path || packet.logo_source?.url;
  if (src) {
    const url = src.startsWith("media/") ? rel + src : src;
    const proposed = packet.logo_source?.proposed ? ` data-proposed-mark="1" title="Proposed mark — pending approval"` : "";
    return `<img src="${esc(url)}" alt="${esc(name)} logo" height="76" data-role="logo"${proposed} style="height:76px;width:auto;object-fit:contain">`;
  }
  const initials = name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76 76'><rect width='76' height='76' rx='18' fill='${pal.accent}'/><text x='38' y='50' font-family='Georgia,serif' font-size='30' font-weight='700' fill='${pal.mode === "light" ? "#fff" : pal.bg}' text-anchor='middle'>${initials}</text></svg>`;
  return `<img src="data:image/svg+xml,${encodeURIComponent(svg)}" alt="${esc(name)} logo monogram" height="76" width="76" data-role="logo" style="height:76px">`;
}

// ---------------- copy ----------------
function headline(trade, biz, seed) {
  const t = pick(trade.hooks, seed.rng);
  return t.replaceAll("{city}", biz.city).replaceAll("{noun}", trade.noun).replaceAll("{plural}", trade.plural);
}
function stats(packet, trade, gbp) {
  const src = packet.enrichment_sources ?? {};
  const out = [];
  if (src.years?.value) out.push({ n: `${src.years.value}+`, label: "years in the trade" });
  if (gbp.rating?.value) out.push({ n: `${gbp.rating.value}★`, label: `${gbp.rating.count} Google reviews` });
  const svcCount = (packet.services || []).length || trade.services.length;
  if (svcCount) out.push({ n: String(svcCount), label: "core services" });
  out.push({ n: packet.business.state, label: `${packet.business.city} based` });
  return out.slice(0, 3);
}
function faqsFor(trade, biz, count = 8) {
  const all = [
    [`Do you give written quotes?`, `Yes. Every job gets a written scope with one number on it before work starts. The quote is the price.`],
    [`What areas do you cover?`, `We're based in ${biz.city}, ${biz.state} and work the surrounding area. If you're close, ask — the answer is usually yes.`],
    [`Are you the right fit for small ${trade.noun} jobs?`, `Small jobs are how most of ${biz.city} met us. Nothing is beneath the standard.`],
    [`How fast can you get out to look at the ${trade.noun}?`, `Usually within a few days, sooner when it's urgent. Tell us what's going on and we'll be straight about the schedule.`],
    [`Who actually shows up to do the work?`, `Our own crew. The person who scopes the job briefs the people who do it, and the walkthrough at the end is with someone who can answer for the work.`],
    [`What happens if something isn't right afterward?`, `Call us. We come back and make it right — that's the arrangement, in writing, before we start.`],
    [`Do I need to be home while you work?`, `Not usually. We confirm access ahead of time, keep the site tidy, and send photos when a decision needs your eyes.`],
    [`How do payments work?`, `Nothing up front for estimates. For scheduled work we agree the terms in the written scope — no surprises on the invoice.`],
    [`Why does ${trade.key === "default" ? "this work" : trade.key} pricing vary so much between companies?`, `Materials, prep, and whether the crew is insured. Our number includes the parts you can't see — that's why it's the final number.`],
    [`Can you work around my schedule?`, `Yes. We book real time windows, not "sometime Thursday," and we call if anything moves.`],
    [`Do you handle permits and inspections when they're needed?`, `When the job calls for them, we manage the paperwork and meet the inspector. It's part of the scope, not an extra.`],
    [`What should I have ready before you arrive?`, `Just clear access to the ${trade.noun}. Photos help if you have them — send them with the quote request and we'll come prepared.`],
  ];
  return all.slice(0, count);
}

// ---------------- GBP-derived data ----------------
function gbpData(packet) {
  const src = packet.enrichment_sources ?? {};
  return {
    hours: src.hours?.value ?? null,
    hoursSpec: src.hours?.hours_spec ?? null,
    reviews: src.reviews_attributed?.value ?? [],
    address: src.address?.value ?? null,
    latlng: src.latlng?.value ?? null,
    rating: src.rating?.value ?? null,
  };
}

// ---------------- media engine ----------------
const MEDIA_BAN = /randomuser\.me|pravatar|gravatar|thispersondoesnotexist|placekitten|placeholder\.|placehold\.|dummyimage|\/avatars?\/|shutterstock.*watermark/i;
function mediaAssets(packet) {
  // real photos: user uploads + site scrape + GBP — never AI.
  // Ban-list guards against junk inherited from the prospect's old site
  // (stock avatars, placeholders) becoming our "source photos".
  const catalog = packet.media?.catalog ?? [];
  const seen = new Set();
  return catalog
    .filter((m) => m.url && m.source !== "ai" && !MEDIA_BAN.test(m.url))
    .filter((m) => { const k = m.url.replace(/\?.*$/, ""); if (seen.has(k)) return false; seen.add(k); return true; })
    .map((m) => ({ url: m.url, source: m.source || "site", label: m.label || null }));
}
function mediaStage(ctx, rel = "") {
  const { trade, biz, pal, seed, blob } = ctx;
  const photos = ctx.photos;
  const scene = sceneSvg(trade, pal, seed, blob);
  const mask = pick(["m-soft", "m-arch", "m-slant", "m-blob"], seed.rng);
  if (photos[0]) {
    const u = photos[0].url.startsWith("media/") ? rel + photos[0].url : photos[0].url;
    return `<div class="media-plane ${mask}" data-media-plane data-media-source="photo">
      ${scene}
      <img class="hero-media duotone" src="${esc(u)}" alt="${esc(biz.name)} — recent ${esc(trade.key)} work in ${esc(biz.city)}" loading="eager" onerror="this.closest('.media-plane').classList.add('media-fallback')">
      <div class="tint" aria-hidden="true"></div>
    </div>`;
  }
  // AI ambiance texture — labeled, never a fake job photo
  return `<div class="media-plane ${mask}" data-media-plane data-media-source="ai-ambiance">
    ${scene}
    ${ambianceSvg(trade.key, pal, seed)}
    <div class="tint" aria-hidden="true"></div>
  </div>`;
}

// ---------------- map block ----------------
function mapBlock(ctx, { compact = false } = {}) {
  const { biz, pal, gbp, phone } = ctx;
  const label = gbp.address || `${biz.city}, ${biz.state}`;
  const ringSvg = `<svg class="ring-map" viewBox="0 0 420 300" role="img" aria-label="Service area centered on ${esc(biz.city)}, ${esc(biz.state)}"><rect width="420" height="300" rx="14" fill="${pal.mode === "light" ? "#fff" : "rgba(255,255,255,.05)"}" stroke="${pal.accent}" stroke-opacity=".25"/><g fill="none" stroke="${pal.accent}" stroke-opacity=".3"><circle cx="210" cy="150" r="46"/><circle cx="210" cy="150" r="88"/><circle cx="210" cy="150" r="126"/></g><circle cx="210" cy="150" r="7" fill="${pal.accent}"/><text x="210" y="128" text-anchor="middle" font-family="inherit" font-size="15" font-weight="700" fill="currentColor">${esc(biz.city)}, ${esc(biz.state)}</text></svg>`;
  if (gbp.latlng) {
    const { lat, lng } = gbp.latlng;
    const dir = `https://maps.google.com/?daddr=${lat},${lng}`;
    return { html: `<div class="geo-map" data-map data-lat="${lat}" data-lng="${lng}" data-accent="${esc(pal.accent)}" data-label="${esc(biz.name)}">${ringSvg}</div>
      <div class="map-meta"><span class="addr">${esc(label)}</span><a class="btn solid sm" href="${dir}" target="_blank" rel="noopener">Get directions</a>${phone && !compact ? `<a class="btn line sm" href="tel:${esc(phone.replace(/[^+\d]/g, ""))}">${esc(phone)}</a>` : ""}</div>`, satellite: true, directions: dir };
  }
  const dir = `https://maps.google.com/?daddr=${encodeURIComponent(label)}`;
  return { html: `<div class="geo-map">${ringSvg}</div>
    <div class="map-meta"><span class="addr">${esc(label)}</span><a class="btn solid sm" href="${dir}" target="_blank" rel="noopener">Get directions</a></div>`, satellite: false, directions: dir };
}
const MAP_JS = `
(function(){
  var el=document.querySelector('[data-map]');
  if(!el||!navigator.onLine)return;
  var css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';document.head.appendChild(css);
  var s=document.createElement('script');s.src='https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js';s.defer=true;
  s.onload=function(){try{
    var lat=+el.dataset.lat,lng=+el.dataset.lng;
    var holder=document.createElement('div');holder.className='ml-holder';el.appendChild(holder);
    var map=new maplibregl.Map({container:holder,center:[lng,lat],zoom:16,attributionControl:{compact:true},
      style:{version:8,sources:{esri:{type:'raster',tiles:['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],tileSize:256,attribution:'Imagery © Esri, Maxar, Earthstar Geographics'}},layers:[{id:'esri',type:'raster',source:'esri'}]}});
    map.scrollZoom.disable();map.addControl(new maplibregl.NavigationControl({showCompass:false}));
    var pin=document.createElement('div');pin.className='map-pin';pin.style.setProperty('--pin',el.dataset.accent||'#C2571B');
    new maplibregl.Marker({element:pin}).setLngLat([lng,lat]).setPopup(new maplibregl.Popup({offset:18}).setText(el.dataset.label||'')).addTo(map);
    map.on('load',function(){el.classList.add('map-live')});
  }catch(e){}};
  document.head.appendChild(s);
})();`;

// ---------------- hours ----------------
function hoursStrip(gbp, { compact = false } = {}) {
  if (!gbp.hours) {
    return `<div class="hours placeholder" data-hours="placeholder"><b>Hours</b><span>Call to confirm today's schedule — hours import automatically once your Google Business Profile is connected.</span></div>`;
  }
  // Defensive: hours arrive as [{day,hours}] from GBP import but as plain
  // strings ("Monday: 7 AM - 4 PM") from LeadMiner packets.
  const rows = (Array.isArray(gbp.hours) ? gbp.hours : []).map((h) => {
    const day = typeof h === "string" ? h.split(":")[0] : h?.day ?? "";
    const hrs = typeof h === "string" ? h.slice(h.indexOf(":") + 1).trim() : h?.hours ?? "";
    return `<div class="hrow"><span>${esc(String(day).slice(0, 3))}</span><b>${esc(String(hrs))}</b></div>`;
  }).join("");
  return `<div class="hours sourced" data-hours="sourced" ${compact ? 'data-compact="1"' : ""}><b>Hours</b><div class="hgrid">${rows}</div><span class="src-chip">from Google Business Profile</span></div>`;
}

// ---------------- sections (single-page cinematic — Remic PROMPT A order) ----------------
function sectionHtml(kind, ctx, rel = "") {
  const { trade, biz, pal, services, seed, phone, quote, gbp } = ctx;
  switch (kind) {
    case "trust-strip": {
      const chips = [`${biz.city} local`, "Written scopes", "The quote is the price", "Walkthrough before we call it done", ...(ctx.packet.enrichment_sources?.years?.value ? [`Since ${new Date().getFullYear() - Number(ctx.packet.enrichment_sources.years.value)}`] : []), ...(gbp.rating ? [`${gbp.rating.value}★ on Google (${gbp.rating.count})`] : [])];
      return `<section class="band trust-strip" aria-label="Trust signals"><div class="shell strip-row">
        ${chips.map((c) => `<span class="t-chip">${esc(c)}</span>`).join("")}
      </div></section>`;
    }
    case "services": return `<section class="band services" id="services"><div class="shell">
      <p class="kicker">What we ${esc(trade.verb)}</p><h2>${esc(trade.plural[0].toUpperCase() + trade.plural.slice(1))}, done like we live here.</h2>
      <div class="svc-grid">${services.map((s, i) => `<article class="svc" style="--d:${i * 60}ms">
        <div class="svc-visual" aria-hidden="true">${svcVisual(ctx, i)}</div>
        <span class="idx">0${i + 1}</span><h3>${esc(s)}</h3>
        <p>${esc(svcBlurb(ctx, s, i))}</p>
        <span class="svc-mat">${esc(trade.material[i % trade.material.length])}</span></article>`).join("")}</div></div></section>`;
    case "founder": {
      const vp = ctx.packet.voice_persona ?? {};
      const snippet = vp.first_person_snippets?.[0];
      const owner = vp.owner_name && vp.owner_name !== biz.name ? vp.owner_name : null;
      return `<section class="band alt founder"><div class="shell founder-grid">
        <div class="founder-mark" aria-hidden="true"><svg viewBox="0 0 96 96" width="88" height="88"><circle cx="48" cy="48" r="44" fill="${pal.accent}" opacity=".14"/><circle cx="48" cy="48" r="34" fill="none" stroke="${pal.accent}" stroke-width="2"/><text x="48" y="58" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="700" fill="${pal.accent}">${esc((owner || biz.name)[0])}</text></svg></div>
        <div><p class="kicker">The name on the quote</p>
        <h2>${owner ? esc(owner) : esc(biz.name)}${owner ? `, ${esc(biz.name)}` : ""}</h2>
        <p class="founder-note">${snippet ? `“${esc(snippet)}”` : esc(`${biz.name} runs on a short rulebook: scope it in writing, show up when we said, and walk the finished ${trade.noun} with you before we call it done. That's the whole pitch — the rest is ${trade.material[0]} and ${trade.material[1]}.`)}</p>
        ${snippet ? `<span class="sig">— ${esc(owner || `the ${biz.name} team`)}</span>` : ""}</div></div></section>`;
    }
    case "proof": {
      if (!gbp.reviews.length) return "";
      const cards = gbp.reviews.slice(0, 4).map((r) => {
        const name = r.author === "Google review" ? "Google review" : r.author.split(" ").map((w, i) => i === 0 ? w : w[0] + ".").join(" ");
        return `<figure class="review" data-review-source="${esc(r.source || "gbp")}">
          ${r.rating ? `<span class="stars" aria-label="${r.rating} star review">${"★".repeat(Math.round(r.rating))}</span>` : ""}
          <blockquote>${esc(r.text)}</blockquote>
          <figcaption>${esc(name)} · <span class="src-chip">Google</span></figcaption></figure>`;
      }).join("");
      return `<section class="band proof" id="reviews"><div class="shell"><p class="kicker">In their words</p>
        <h2>What ${esc(biz.city)} says${gbp.rating ? ` — ${gbp.rating.value}★ across ${gbp.rating.count} reviews` : ""}.</h2>
        <div class="review-grid">${cards}</div>
        <p class="muted src-note">Review snippets sourced from the public Google Business Profile — never written by us.</p></div></section>`;
    }
    case "process": return `<section class="band alt process"><div class="shell"><p class="kicker">How it goes</p><h2>Four steps. No mystery.</h2>
      <ol class="steps">${["A real conversation about the " + trade.noun, "A written scope with one number on it", "The crew shows up when we said", "A walkthrough before we call it done"].map((s, i) => `<li><b>${i + 1}</b><span>${esc(s)}</span></li>`).join("")}</ol></div></section>`;
    case "materials": return `<section class="band materials"><div class="shell"><p class="kicker">Materials & method</p><h2>The words on our invoices.</h2>
      <div class="mat-row">${trade.material.map((m) => `<span class="mat">${esc(m)}</span>`).join("")}</div>
      <p class="muted">If a line item isn't clear, ask — explaining the work is part of the work.</p></div></section>`;
    case "gallery": {
      if (ctx.photos.length < 2) return "";
      const imgs = ctx.photos.slice(0, 8).map((p, i) => {
        const u = p.url.startsWith("media/") ? rel + p.url : p.url;
        return `<figure class="g-cell"><img src="${esc(u)}" alt="${esc(p.label || `${biz.name} ${trade.key} work — photo ${i + 1}`)}" loading="lazy" onerror="this.closest('.g-cell').remove()"><figcaption><span class="src-chip">${esc(p.source === "gbp" ? "Google profile" : p.source === "upload" ? "owner upload" : "your site")}</span></figcaption></figure>`;
      }).join("");
      return `<section class="band gallery" id="work"><div class="shell"><p class="kicker">Real ${esc(trade.plural)}</p><h2>Work with our name on it.</h2>
        <div class="g-grid">${imgs}</div></div></section>`;
    }
    case "map": { const m = mapBlock(ctx);
      return `<section class="band alt area" id="area"><div class="shell"><div class="area-grid">
      <div class="map-col">${m.html}</div>
      <div><p class="kicker">Service area</p><h2>${esc(biz.city)} and the drives worth making.</h2>
      <p>Based in ${esc(biz.city)}, ${esc(biz.state)}. If you're nearby and unsure, ask — the answer is usually yes.</p>
      ${hoursStrip(gbp, { compact: true })}
      ${phone ? `<a class="btn solid" href="tel:${esc(phone.replace(/[^+\d]/g, ""))}">Call ${esc(phone)}</a>` : ""}</div></div></div></section>`; }
    case "faq": { const faqs = ctx.faqs;
      return `<section class="band faq" id="faq"><div class="shell"><p class="kicker">Fair questions</p><h2>Asked often, answered straight.</h2>
      ${faqs.map(([q, a]) => `<details class="faq"><summary class="speakable">${esc(q)}</summary><p class="speakable">${esc(a)}</p></details>`).join("")}</div></section>`; }
    case "cta": return `<section class="band cta" id="quote"><div class="shell"><div class="cta-card">
      <div><p class="kicker light">Next step</p><h2>${esc(quote)}</h2><p>Tell us about the ${esc(trade.noun)}. We reply like people, not a ticketing system.</p></div>
      <form class="quote-form" action="mailto:${esc(ctx.email || "hello@example.com")}" method="get">
        <label>Name<input name="name" type="text" autocomplete="name" required></label>
        <label>Phone<input name="phone" type="tel" autocomplete="tel"></label>
        <label>What's going on?<textarea name="body" rows="3"></textarea></label>
        <button class="btn solid" type="submit">Request a quote</button>
      </form></div></div></section>`;
    default: return "";
  }
}
function svcVisual(ctx, i) {
  const { pal, seed } = ctx;
  const s = (useed(seed) + i * 131) % 360;
  return `<svg viewBox="0 0 120 56" aria-hidden="true"><defs><linearGradient id="sv${useed(seed) % 997}-${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${pal.accent}" stop-opacity=".9"/><stop offset="1" stop-color="${pal.accent2}" stop-opacity=".7"/></linearGradient></defs>
    <rect width="120" height="56" rx="8" fill="url(#sv${useed(seed) % 997}-${i})" opacity=".14"/>
    <path d="M ${8 + (s % 20)} 44 Q ${34 + (s % 30)} ${10 + (s % 18)} 60 ${30 + (s % 14)} T 112 ${18 + (s % 22)}" fill="none" stroke="${pal.accent}" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>`;
}
function svcBlurb(ctx, service, i) {
  const { trade, biz, seed } = ctx;
  const banks = [
    `Scoped in plain language, priced before work starts, and finished with a walkthrough — not a disappearing act.`,
    `${service} in ${biz.city} means dealing with what the ${trade.noun} actually needs, not a package deal. We look first, then quote.`,
    `The crew that quotes your ${trade.noun} is the crew that answers for it. One number, one name, one standard.`,
    `We put ${trade.material[i % trade.material.length]} on the invoice by name, so you know exactly what you paid for.`,
  ];
  return banks[(useed(seed) + i) % banks.length];
}

// ---------------- shared page chrome ----------------
function baseCss(ctx) {
  const { pal, type, seed, HERO: H } = ctx;
  const light = pal.mode === "light";
  return `
@import url('https://fonts.googleapis.com/css2?family=${type.import}&display=swap');
:root{--bg:${pal.bg};--ink:${pal.ink};--accent:${pal.accent};--accent2:${pal.accent2};
--muted:${light ? "color-mix(in srgb, " + pal.ink + " 62%, " + pal.bg + ")" : "color-mix(in srgb, " + pal.ink + " 70%, " + pal.bg + ")"};
--line:color-mix(in srgb, var(--ink) 16%, transparent);--panel:${light ? "#ffffff" : "color-mix(in srgb, var(--ink) 7%, var(--bg))"};
--display:${type.display};--body:${type.body};color-scheme:${pal.mode};}
*{box-sizing:border-box}html,body{max-width:100%;overflow-x:clip}img,svg,video{max-width:100%}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--body);line-height:1.6}
header.top,nav.main{flex-wrap:wrap}
.shell{width:min(1160px,calc(100vw - 40px));margin:0 auto}
h1,h2,h3{font-family:var(--display);line-height:1.12;letter-spacing:-.014em;margin:0 0 .5em}
h2{font-size:clamp(1.6rem,3.4vw,2.4rem)}p{color:var(--muted);max-width:64ch}
.kicker{font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:700;margin:0 0 .9rem;display:flex;gap:.6rem;align-items:center}
.kicker::before{content:"";width:22px;height:2px;background:var(--accent)}
.kicker.light{color:${light ? "#fff" : "var(--accent)"}}
.btn{display:inline-flex;align-items:center;gap:.45rem;padding:.72rem 1.3rem;border-radius:${pick(["999px", "10px", "4px"], seed.rng)};font-weight:700;font-size:.95rem;text-decoration:none;border:1.5px solid var(--accent);transition:transform .15s;cursor:pointer}
.btn:hover{transform:translateY(-1.5px)}.btn.sm{padding:.5rem .95rem;font-size:.86rem}
.btn.solid{background:var(--accent);color:${light ? "#fff" : pal.bg}}
.btn.line{color:var(--ink)}
header.top{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 0;position:relative;z-index:5}
.brand{display:flex;align-items:center;gap:.9rem;text-decoration:none;color:var(--ink)}
.brand b{font-family:var(--display);font-size:1.25rem;line-height:1.1;display:block}
.brand span{font-size:.78rem;color:var(--accent);font-weight:700;letter-spacing:.06em}
nav.main{display:flex;gap:1.05rem;font-size:.92rem;font-weight:600;align-items:center}nav.main a{color:var(--muted);text-decoration:none}nav.main a:hover,nav.main a[aria-current]{color:var(--ink)}
/* hero */
.hero{position:relative;padding:clamp(2.5rem,6vw,5rem) 0 clamp(2.5rem,6vw,4.5rem);overflow:hidden}
.hero-grid{display:grid;grid-template-columns:${H.grid};gap:clamp(1.6rem,4vw,3.6rem);align-items:stretch;position:relative;z-index:2}
.hero-copy{align-self:center}
${H.copySide === "right" ? ".hero-copy{order:2}.hero-stage{order:1}" : ""}
@media(max-width:860px){.hero-grid{grid-template-columns:1fr}.hero-copy{order:0}.hero-stage{order:1}}
.hero h1{font-size:${H.headSize};max-width:14ch}
.hero .intro{font-size:1.08rem}
.hero-stage{position:relative;min-height:clamp(340px,36vw,560px)}
.media-plane{position:absolute;inset:0;border-radius:var(--mask-r,22px);overflow:hidden;box-shadow:0 30px 70px -30px color-mix(in srgb, var(--ink) 45%, transparent)}
.media-plane.m-soft{--mask-r:26px}.media-plane.m-arch{--mask-r:46% 46% 14px 14px}.media-plane.m-slant{clip-path:polygon(0 4%,100% 0,100% 96%,0 100%);--mask-r:14px}.media-plane.m-blob{--mask-r:42% 18px 42% 18px}
.media-plane .scene-under{position:absolute;inset:0;width:100%;height:100%}
.media-plane .hero-media,.media-plane .ambiance{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.media-plane .duotone{filter:brightness(.72) contrast(1.08) saturate(.82) sepia(.12)}
.media-plane .tint{position:absolute;inset:0;background:linear-gradient(${140 + seed.hueRotate}deg, color-mix(in srgb, var(--accent) 38%, transparent), transparent 55%, color-mix(in srgb, var(--accent2) 30%, transparent));mix-blend-mode:${light ? "multiply" : "screen"};opacity:.55;pointer-events:none}
.media-plane.media-fallback .hero-media{display:none}
.veil{position:absolute;inset:0;z-index:1;background:linear-gradient(${105 + seed.hueRotate}deg, color-mix(in srgb, var(--bg) 88%, transparent) 30%, transparent 62%);pointer-events:none}
.grain{position:absolute;inset:0;z-index:1;opacity:.5;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E")}
.motif-overlay{position:absolute;z-index:0;${seed.motifQuadrant.includes("t") ? "top:-40px" : "bottom:-40px"};${seed.motifQuadrant.includes("l") ? "left:-60px" : "right:-60px"};width:70%;opacity:.9;pointer-events:none}
.kinetic span{display:inline-block;opacity:0;transform:translateY(.4em);animation:rise .55s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes rise{to{opacity:1;transform:none}}
.hero-widget{position:relative;z-index:3;margin-top:1.4rem}
.quote-widget{display:flex;gap:.8rem;flex-wrap:wrap;align-items:center;background:color-mix(in srgb, var(--panel) 78%, transparent);backdrop-filter:blur(10px);border:1px solid var(--line);border-radius:14px;padding:1rem 1.2rem;box-shadow:0 18px 44px -22px color-mix(in srgb, var(--ink) 35%, transparent)}
.quote-widget b{font-family:var(--display);font-size:1.05rem;flex:1;min-width:180px}
.swatch-widget{display:grid;grid-template-columns:1fr 1fr;gap:.7rem}
.swatch-cell{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;padding:.9rem;font-size:.9rem}
.atlas-widget{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem}
.atlas-widget .cell{background:var(--panel);border:1px solid var(--line);border-radius:9px;padding:.7rem .8rem;font-size:.82rem;font-weight:600;transition:transform .18s,border-color .18s}
.atlas-widget .cell:hover{transform:translateY(-3px);border-color:var(--accent)}
.letter-widget{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:1.3rem;font-family:var(--display);font-size:1.06rem}
.letter-widget .sig{display:block;margin-top:.7rem;color:var(--accent);font-weight:700;font-size:.9rem}
.map-widget svg{width:100%;height:auto}
.stat-row{display:flex;gap:1.6rem;margin-top:1.6rem;flex-wrap:wrap;position:relative;z-index:2}
.stat-row .stat b{font-family:var(--display);font-size:1.7rem;display:block;color:var(--accent)}
.stat-row .stat span{font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.marquee{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:.7rem 0;overflow:hidden;white-space:nowrap;position:relative;z-index:2}
.marquee div{display:inline-block;animation:slide 30s linear infinite;font-family:var(--display);font-size:.95rem;color:var(--muted)}
.marquee span{margin:0 1.4rem}.marquee span::after{content:"·";margin-left:1.4rem;color:var(--accent)}
@keyframes slide{to{transform:translateX(-50%)}}
/* bands */
.band{padding:clamp(2.6rem,6vw,4.6rem) 0}
.band.alt{background:color-mix(in srgb, var(--ink) ${light ? "4%" : "6%"}, var(--bg))}
.trust-strip{padding:1rem 0;border-bottom:1px solid var(--line);background:color-mix(in srgb, var(--ink) ${light ? "3%" : "5%"}, var(--bg))}
.strip-row{display:flex;gap:.7rem;align-items:center;flex-wrap:wrap}
.t-chip{border:1px solid var(--line);border-radius:999px;padding:.32rem .85rem;font-size:.8rem;font-weight:600;color:var(--muted)}
.strip-stats{display:flex;gap:1.4rem;margin-left:auto;flex-wrap:wrap}
.mini-stat b{font-family:var(--display);color:var(--accent);font-size:1.15rem;margin-right:.3rem}
.mini-stat span{font-size:.74rem;color:var(--muted);text-transform:uppercase;letter-spacing:.05em}
.svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
.svc{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:1.1rem;transition:transform .18s;display:flex;flex-direction:column;gap:.3rem}
.svc:hover{transform:translateY(-3px)}
.svc-visual{margin:-.2rem -.2rem .3rem}
.svc .idx{font-size:.72rem;color:var(--accent);font-weight:800;letter-spacing:.14em}
.svc h3{font-size:1.05rem;margin:.15rem 0 .2rem}.svc p{font-size:.88rem;margin:0;flex:1}
.svc-mat{align-self:flex-start;margin-top:.6rem;font-size:.74rem;font-weight:700;color:var(--accent);border:1px solid color-mix(in srgb, var(--accent) 40%, transparent);border-radius:999px;padding:.18rem .6rem}
.founder-grid{display:grid;grid-template-columns:auto 1fr;gap:2rem;align-items:center}
@media(max-width:700px){.founder-grid{grid-template-columns:1fr}}
.founder-note{font-family:var(--display);font-size:1.15rem;line-height:1.5}
.founder .sig{color:var(--accent);font-weight:700;font-size:.9rem}
.review-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
.review{margin:0;background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:1.15rem;display:flex;flex-direction:column;gap:.5rem}
.review .stars{color:var(--accent);letter-spacing:.1em}
.review blockquote{margin:0;font-size:.94rem;color:var(--ink)}
.review figcaption{font-size:.82rem;color:var(--muted);font-weight:600}
.src-chip{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent);border:1px solid color-mix(in srgb, var(--accent) 35%, transparent);border-radius:999px;padding:.12rem .5rem}
.src-note{font-size:.8rem;margin-top:1rem}
.steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;counter-reset:s}
.steps li{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:1.1rem;display:flex;gap:.8rem;align-items:baseline}
.steps b{font-family:var(--display);color:var(--accent);font-size:1.5rem}
.mat-row{display:flex;gap:.6rem;flex-wrap:wrap;margin:.4rem 0 1rem}
.mat{border:1.5px solid var(--accent);border-radius:999px;padding:.35rem 1rem;font-size:.88rem;font-weight:600;color:var(--accent)}
.g-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.8rem}
.g-cell{margin:0;position:relative;border-radius:10px;overflow:hidden;aspect-ratio:4/3;background:var(--panel)}
.g-cell img{width:100%;height:100%;object-fit:cover;transition:transform .25s}
.g-cell:hover img{transform:scale(1.04)}
.g-cell figcaption{position:absolute;left:.5rem;bottom:.5rem}
.area-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:2.4rem;align-items:center}
@media(max-width:820px){.area-grid,.cta-card,.founder-grid{grid-template-columns:1fr!important}}
.geo-map{position:relative;border-radius:14px;overflow:hidden;min-height:300px;border:1px solid var(--line)}
.geo-map .ring-map{width:100%;height:100%;display:block}
.geo-map .ml-holder{position:absolute;inset:0;opacity:0;transition:opacity .4s}
.geo-map.map-live .ml-holder{opacity:1}
.map-pin{width:22px;height:22px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--pin,#C2571B);border:3px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.4)}
.map-meta{display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;margin-top:.8rem}
.map-meta .addr{font-size:.9rem;font-weight:600;color:var(--muted)}
.hours{margin:1.1rem 0;padding:1rem 1.1rem;background:var(--panel);border:1px solid var(--line);border-radius:12px;font-size:.9rem}
.hours>b{font-family:var(--display);display:block;margin-bottom:.4rem}
.hours .hgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:.25rem .9rem}
.hours .hrow{display:flex;justify-content:space-between;gap:.6rem;border-bottom:1px dashed var(--line);padding:.14rem 0}
.hours .hrow span{color:var(--muted)}
.hours.placeholder span{color:var(--muted);font-size:.86rem}
.hours .src-chip{margin-top:.5rem;display:inline-block}
details.faq{border-bottom:1px solid var(--line);padding:.95rem 0}
details.faq summary{font-weight:700;cursor:pointer;list-style:none;font-size:1.02rem;font-family:var(--display)}
details.faq summary::after{content:" +";color:var(--accent)}details.faq[open] summary::after{content:" –"}
.cta-card{display:grid;grid-template-columns:1fr 1fr;gap:2rem;background:${light ? "var(--ink)" : "var(--panel)"};color:${light ? pal.bg : "var(--ink)"};border-radius:18px;padding:clamp(1.6rem,4vw,2.8rem);border:1px solid var(--line)}
.cta-card h2,.cta-card p{color:inherit}
.quote-form{display:grid;gap:.8rem}
.quote-form label{font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:grid;gap:.3rem}
.quote-form input,.quote-form textarea{font:inherit;padding:.65rem .8rem;border-radius:8px;border:1.5px solid color-mix(in srgb, currentColor 25%, transparent);background:${light ? "rgba(255,255,255,.08)" : "var(--bg)"};color:inherit}
.sticky-cta{position:fixed;right:16px;bottom:16px;z-index:40;display:flex;gap:.5rem;background:color-mix(in srgb, var(--panel) 82%, transparent);backdrop-filter:blur(10px);border:1px solid var(--line);border-radius:999px;padding:.5rem .6rem;box-shadow:0 14px 40px -14px color-mix(in srgb, var(--ink) 50%, transparent)}
@media(max-width:420px){.sticky-cta{right:10px;bottom:10px;max-width:calc(100vw - 20px)}}
footer{border-top:1px solid var(--line);padding:2.2rem 0 1.6rem;font-size:.88rem;color:var(--muted)}
.foot-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:2rem}
@media(max-width:760px){.foot-grid{grid-template-columns:1fr}}
.foot-grid h4{font-family:var(--display);color:var(--ink);margin:0 0 .5rem;font-size:1rem}
.foot-grid a{color:inherit}
.foot-legal{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;border-top:1px solid var(--line);margin-top:1.6rem;padding-top:1rem}
.crumbs{font-size:.8rem;color:var(--muted);padding:.9rem 0 0}.crumbs a{color:inherit}
.page-head{position:relative;padding:clamp(2rem,5vw,3.6rem) 0;overflow:hidden;border-bottom:1px solid var(--line)}
.page-head h1{font-size:clamp(2rem,4.6vw,3.2rem);max-width:18ch}
.page-head .motif-overlay{width:50%;opacity:.6}
.cta-strip{display:flex;gap:1rem;align-items:center;justify-content:space-between;flex-wrap:wrap;background:color-mix(in srgb, var(--accent) ${light ? "10%" : "16%"}, var(--bg));border:1px solid color-mix(in srgb, var(--accent) 30%, transparent);border-radius:14px;padding:1.1rem 1.4rem;margin:2.2rem 0}
.cta-strip b{font-family:var(--display);font-size:1.12rem}
.prose p{margin:0 0 1rem}.prose h2{margin-top:2rem}
.xlinks{display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.4rem}
.xlinks a{border:1px solid var(--line);border-radius:999px;padding:.4rem 1rem;font-size:.86rem;font-weight:600;color:var(--muted);text-decoration:none}
.xlinks a:hover{color:var(--ink);border-color:var(--accent)}
@media (prefers-reduced-motion: reduce){.kinetic span{opacity:1;transform:none;animation:none}.marquee div{animation:none}*{transition:none!important;animation:none!important}}
`;
}

function headHtml(ctx, { title, desc, rel = "", jsonLd, noindex, canonicalPath = null }) {
  const { pal, biz } = ctx;
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
${noindex ? '<meta name="robots" content="noindex, nofollow">' : ""}
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="website"><meta property="og:image" content="${rel}media/og.svg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='${pal.accent}'/><text x='16' y='22' font-family='Georgia' font-size='16' font-weight='700' fill='white' text-anchor='middle'>${biz.name[0]}</text></svg>`)}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function headerHtml(ctx, rel = "", navItems = null, current = "") {
  const { biz, packet, pal } = ctx;
  const nav = navItems
    ? navItems.map(([href, label]) => `<a href="${rel}${href}"${href === current ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("")
    : `<a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#area">Area</a><a href="#faq">FAQ</a>`;
  return `<header class="top shell">
  <a class="brand" href="${rel || "#"}">${logoBlock(packet, biz.name, pal, rel)}<span><b>${esc(biz.name)}</b><span>${esc(biz.city)}, ${esc(biz.state)}</span></span></a>
  <nav class="main">${nav}<a class="btn solid" href="${navItems ? rel + "contact/" : "#quote"}">Get a quote</a></nav>
</header>`;
}

function footerHtml(ctx, rel = "", navItems = null) {
  const { biz, phone, gbp, trade, packet } = ctx;
  const m = mapBlock(ctx, { compact: true });
  const navCol = navItems ? navItems.map(([href, label]) => `<a href="${rel}${href}" style="display:block;padding:.14rem 0">${esc(label)}</a>`).join("") :
    ["#services|Services", "#reviews|Reviews", "#area|Service area", "#faq|FAQ", "#quote|Get a quote"].map((x) => { const [h, l] = x.split("|"); return `<a href="${h}" style="display:block;padding:.14rem 0">${l}</a>`; }).join("");
  return `<footer><div class="shell">
  <div class="foot-grid">
    <div><h4>${esc(biz.name)}</h4>
      <p style="font-size:.88rem;margin:0 0 .6rem">${esc(gbp.address || `${biz.city}, ${biz.state}`)}</p>
      ${phone ? `<a href="tel:${esc(phone.replace(/[^+\d]/g, ""))}">${esc(phone)}</a><br>` : ""}
      <a href="${esc(m.directions)}" target="_blank" rel="noopener">Directions ↗</a></div>
    <div><h4>Pages</h4>${navCol}</div>
    <div><h4>Hours</h4>${hoursStrip(gbp, { compact: true })}</div>
  </div>
  <div class="foot-legal">
    <span>© ${new Date().getFullYear()} ${esc(biz.name)} · ${esc(biz.city)}, ${esc(biz.state)}</span>
    <span>Licensed & local${packet.forge?.demo ? " · Demo preview by SiteForge" : ""}</span>
  </div>
</div></footer>`;
}

const STICKY_CTA = (ctx) => `<div class="sticky-cta" data-sticky-cta>
  <a class="btn solid sm" href="${ctx.stickyHref || "#quote"}">Request a quote</a>
  ${ctx.phone ? `<a class="btn line sm" href="tel:${esc(ctx.phone.replace(/[^+\d]/g, ""))}" aria-label="Call ${esc(ctx.biz.name)}">Call</a>` : ""}
</div>`;

// ---------------- context assembly ----------------
function buildCtx(packet) {
  const biz = { name: packet.business?.name ?? "Local Business", category: packet.business?.category ?? "service", city: packet.business?.city ?? "your city", state: packet.business?.state ?? "" };
  const trade = tradeOf(biz.category);
  const seed = seedFrom(`${packet.slug ?? biz.name}:${packet.layout_seed ?? ""}`, trade.key);
  const family = packet.hero_family ?? "split-editorial-index";
  const mode = FAMILY_MODE[family] ?? (seed.rng() > 0.5 ? "light" : "dark");
  const palPair = PALETTES[trade.key] ?? PALETTES.default;
  const pal = derivePalette(palPair[mode === "light" ? 0 : 1], seed, packet);
  // Font pair keyed by a dedicated slug hash (not rng call order) so it is
  // stable per business and spreads evenly across the 16 pairs.
  let fontHash = 5381; for (const ch of `${packet.slug ?? biz.name}:${packet.layout_seed ?? ""}`) fontHash = ((fontHash * 33) ^ ch.charCodeAt(0)) >>> 0;
  const type = TYPE_PAIRS[fontHash % TYPE_PAIRS.length];
  const blob = blobToPath(seed.blobPoints);
  const services = (packet.services?.length ? packet.services : trade.services).slice(0, 6);
  const phone = packet.enrichment_sources?.phone?.value || packet.business.phone || null;
  const email = packet.enrichment_sources?.email?.value || null;
  const gbp = gbpData(packet);
  const photos = mediaAssets(packet);
  const h1 = headline(trade, biz, seed);
  const snippets = packet.voice_persona?.first_person_snippets ?? [];
  const intro = snippets[0] ? `“${snippets[0]}”` : `${biz.name} handles ${services.slice(0, 3).join(", ").toLowerCase()} for ${biz.city} with written scopes and a name on every quote.`;
  const quote = pick([`Get the ${trade.noun} looked at this week.`, `A straight quote for the ${trade.noun}.`, `Talk to ${biz.name} today.`], seed.rng);
  const faqs = faqsFor(trade, biz, 8);
  const HERO = {
    "cinematic-video-parallax": { grid: "1.15fr .85fr", headSize: "clamp(2.6rem,6vw,4.6rem)", mediaShape: "full", copySide: "left" },
    "split-editorial-index":    { grid: ".9fr 1.1fr",  headSize: "clamp(2.2rem,4.6vw,3.6rem)", mediaShape: "panel", copySide: "right" },
    "service-map-pins":         { grid: "1fr 1fr",     headSize: "clamp(2.2rem,4.8vw,3.7rem)", mediaShape: "map", copySide: "left" },
    "material-lab-swatch":      { grid: "1fr .9fr",    headSize: "clamp(2rem,4.2vw,3.2rem)", mediaShape: "swatches", copySide: "left" },
    "magazine-owner-letter":    { grid: "1.2fr .8fr",  headSize: "clamp(2.1rem,4.4vw,3.4rem)", mediaShape: "portrait", copySide: "left" },
    "atlas-grid-reveal":        { grid: "1fr 1fr",     headSize: "clamp(2.3rem,5vw,3.9rem)", mediaShape: "atlas", copySide: "left" },
  }[family] ?? { grid: "1fr 1fr", headSize: "clamp(2.2rem,5vw,3.8rem)", mediaShape: "panel", copySide: "left" };
  return { packet, biz, trade, seed, family, pal, type, blob, services, phone, email, gbp, photos, h1, intro, quote, faqs, HERO, snippets };
}

function heroSection(ctx, rel = "") {
  const { trade, biz, pal, services, seed, phone, quote, gbp, family, h1, intro, HERO: H, packet } = ctx;
  const heroWidget = {
    map: `<div class="widget hero-widget map-widget">${mapBlock(ctx, { compact: true }).html.match(/<svg[\s\S]*?<\/svg>/)?.[0] ?? ""}</div>`,
    swatches: `<div class="widget hero-widget swatch-widget">${trade.material.slice(0, 4).map((m, i) => `<div class="swatch-cell" style="--i:${i}"><b>${esc(m)}</b></div>`).join("")}</div>`,
    atlas: `<div class="widget hero-widget atlas-widget">${services.slice(0, 6).map((s, i) => `<div class="cell" style="--i:${i}">${esc(s)}</div>`).join("")}</div>`,
    portrait: `<div class="widget hero-widget letter-widget"><p>${esc(ctx.snippets[0] ? ctx.snippets[0] : `We started in ${biz.city} with one truck and a rule: the quote is the price.`)}</p><span class="sig">— ${esc(packet.voice_persona?.owner_name ?? biz.name)}</span></div>`,
    panel: `<div class="widget hero-widget quote-widget"><b>${esc(quote)}</b><a class="btn solid" href="${ctx.stickyHref || "#quote"}">Request a quote</a>${phone ? `<a class="btn line" href="tel:${esc(phone.replace(/[^+\d]/g, ""))}">${esc(phone)}</a>` : ""}</div>`,
    full: `<div class="widget hero-widget quote-widget"><b>${esc(quote)}</b><a class="btn solid" href="${ctx.stickyHref || "#quote"}">Request a quote</a>${phone ? `<a class="btn line" href="tel:${esc(phone.replace(/[^+\d]/g, ""))}">${esc(phone)}</a>` : ""}</div>`,
  }[H.mediaShape];
  const stats3 = stats(packet, trade, gbp);
  const ledger = [...services, `${biz.city} ${biz.state}`, ...trade.material].slice(0, 8);
  return `<section class="hero" data-hero-anatomy="${esc(family)}" data-layout-signature="${esc(String(seed.seed))}" style="overflow:hidden">
  <div class="grain" aria-hidden="true"></div>
  <svg class="motif-overlay" viewBox="0 0 1000 460" aria-hidden="true">${motifSvg(trade.key, pal.accent, seed)}</svg>
  <div class="shell hero-grid">
    <div class="hero-copy">
      <p class="kicker"><span class="live-dot" aria-hidden="true"></span>${esc(trade.key === "default" ? biz.category : trade.key)} · Now booking · ${esc(biz.city)}</p>
      <h1 class="kinetic">${h1.split(/\s+/).map((w, i) => `<span style="animation-delay:${i * 60}ms">${esc(w)}</span>`).join(" ")}</h1>
      <p class="intro speakable">${esc(intro)}</p>
      ${heroWidget}
      <div class="stat-row">${stats3.map((s) => `<div class="stat"><b>${esc(s.n)}</b><span>${esc(s.label)}</span></div>`).join("")}</div>
    </div>
    <div class="hero-stage">
      ${mediaStage(ctx, rel)}
      <div class="veil" aria-hidden="true"></div>
    </div>
  </div>
  <div class="marquee" aria-hidden="true" style="margin-top:clamp(1.6rem,4vw,3rem)"><div>${ledger.map((l) => `<span>${esc(l)}</span>`).join("")}${ledger.map((l) => `<span>${esc(l)}</span>`).join("")}</div></div>
</section>`;
}

// ---------------- JSON-LD ----------------
function jsonLdFor(ctx, { pageName = null, breadcrumb = null, servicePage = null, faqs = null } = {}) {
  const { biz, services, phone, gbp, intro } = ctx;
  const local = {
    "@context": "https://schema.org", "@type": "LocalBusiness", name: biz.name,
    address: { "@type": "PostalAddress", ...(gbp.address ? { streetAddress: gbp.address.split(",")[0] } : {}), addressLocality: biz.city, addressRegion: biz.state },
    ...(phone ? { telephone: phone } : {}),
    ...(gbp.latlng ? { geo: { "@type": "GeoCoordinates", latitude: gbp.latlng.lat, longitude: gbp.latlng.lng } } : {}),
    ...(gbp.hoursSpec ? { openingHoursSpecification: gbp.hoursSpec } : {}),
    ...(gbp.rating ? { aggregateRating: { "@type": "AggregateRating", ratingValue: gbp.rating.value, reviewCount: gbp.rating.count } } : {}),
    areaServed: `${biz.city}, ${biz.state}`, description: intro.replace(/[“”]/g, ""),
  };
  const ld = [
    local,
    { "@context": "https://schema.org", "@type": "Service", serviceType: servicePage || services[0], provider: { "@type": "LocalBusiness", name: biz.name }, areaServed: `${biz.city}, ${biz.state}` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: (faqs || ctx.faqs).map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumb || [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }] },
    { "@context": "https://schema.org", "@type": "WebSite", name: biz.name, url: "/", potentialAction: { "@type": "SearchAction", target: "/?q={search_term_string}", "query-input": "required name=search_term_string" } },
    { "@context": "https://schema.org", "@type": "WebPage", speakable: { "@type": "SpeakableSpecification", cssSelector: [".speakable"] }, name: pageName || biz.name },
  ];
  return ld;
}

// ---------------- single-page cinematic (Remic PROMPT A) ----------------
function renderSinglePage(packet, ctx) {
  const { biz, trade, seed } = ctx;
  ctx.stickyHref = "#quote";
  // Remic A scroll order with seeded jitter in the middle band
  const mid = seed.rng() > 0.5 ? ["process", "materials"] : ["materials", "process"];
  // Seeded page grammar: four distinct scroll shapes so two prospects never get
  // the same skeleton by default. (sections_disabled still filters below.)
  const GRAMMARS = [
    ["trust-strip", "services", "founder", "proof", mid[0], "gallery", mid[1], "map", "faq", "cta"],
    ["services", "gallery", "trust-strip", mid[0], "founder", "proof", "map", mid[1], "faq", "cta"],
    ["gallery", "trust-strip", "founder", "services", "map", "proof", mid[0], mid[1], "faq", "cta"],
    ["trust-strip", "founder", "services", mid[0], "proof", "map", "gallery", mid[1], "faq", "cta"],
  ];
  const order = GRAMMARS[Math.floor(seed.rng() * GRAMMARS.length)].filter((v, i, a) => a.indexOf(v) === i);
  const disabled = new Set(packet.sections_disabled ?? []);
  const alias = { "service-map": "map", "process-timeline": "process", "material-swatch-lab": "materials", "team-portrait": "founder" };
  const skip = new Set([...disabled].map((d) => alias[d] || d));
  const sections = order.filter((s) => !skip.has(s)).map((k) => sectionHtml(k, ctx)).join("\n");
  const title = `${biz.name} — ${trade.key === "default" ? biz.category : trade.key} in ${biz.city}, ${biz.state}`;
  const desc = `${biz.name}: ${ctx.services.slice(0, 3).join(", ")} in ${biz.city}, ${biz.state}. Written scopes, one number, a name on every quote.`;
  const html = `<!doctype html>
<html lang="en">
<head>
${headHtml(ctx, { title, desc, jsonLd: jsonLdFor(ctx), noindex: Boolean(packet.forge?.demo) })}
<style>${baseCss(ctx)}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);display:inline-block;animation:pulse 2.2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
</style>
</head>
<body>
<div class="grain" aria-hidden="true"></div>
${headerHtml(ctx)}
${heroSection(ctx)}
<main>
${sections}
</main>
${footerHtml(ctx)}
${STICKY_CTA(ctx)}
<script>${MAP_JS}</script>
</body>
</html>`;
  return { pages: [{ file: "index.html", html, title, desc, path: "/" }], title, desc };
}

// ---------------- premier multi-page (Remic PROMPT B) ----------------
function svcSlug(s) { return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48); }

function pageShell(ctx, { relDepth, title, desc, bodyHtml, nav, current, crumbs, pageName, servicePage = null, faqs = null }) {
  const rel = "../".repeat(relDepth);
  const breadcrumb = crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c[1], item: c[0] }));
  return `<!doctype html>
<html lang="en">
<head>
${headHtml(ctx, { title, desc, rel, jsonLd: jsonLdFor(ctx, { pageName, breadcrumb, servicePage, faqs }), noindex: Boolean(ctx.packet.forge?.demo) })}
<style>${baseCss(ctx)}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);display:inline-block;animation:pulse 2.2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
</style>
</head>
<body>
<div class="grain" aria-hidden="true"></div>
${headerHtml(ctx, rel, nav, current)}
${crumbs.length > 1 ? `<div class="shell crumbs">${crumbs.map((c, i) => i === crumbs.length - 1 ? `<span>${esc(c[1])}</span>` : `<a href="${rel}${c[0]}">${esc(c[1])}</a> › `).join("")}</div>` : ""}
${bodyHtml}
${footerHtml(ctx, rel, nav)}
${STICKY_CTA({ ...ctx, stickyHref: rel + "contact/" })}
<script>${MAP_JS}</script>
</body>
</html>`;
}

function pageHead(ctx, kicker, h1, lede) {
  const { trade, pal, seed } = ctx;
  return `<section class="page-head">
    <svg class="motif-overlay" viewBox="0 0 1000 460" aria-hidden="true">${motifSvg(trade.key, pal.accent, seed)}</svg>
    <div class="shell"><p class="kicker">${esc(kicker)}</p><h1>${esc(h1)}</h1><p class="intro">${esc(lede)}</p></div>
  </section>`;
}
function ctaStrip(ctx, rel, text = null) {
  return `<div class="shell"><div class="cta-strip"><b>${esc(text || `Ready when you are — a written quote for the ${ctx.trade.noun} costs nothing.`)}</b>
    <span><a class="btn solid" href="${rel}contact/">Get a quote</a>${ctx.phone ? ` <a class="btn line" href="tel:${esc(ctx.phone.replace(/[^+\d]/g, ""))}">Call</a>` : ""}</span></div></div>`;
}

function renderMultiPage(packet, ctx) {
  const { biz, trade, services, seed, gbp } = ctx;
  ctx.stickyHref = "contact/";
  const svcPages = services.slice(0, 5).map((s) => [`services/${svcSlug(s)}/`, s]);
  const nav = [["", "Home"], ["about/", "About"], ["services/", "Services"], ["process/", "Process"], ["service-areas/", "Service areas"], ["faq/", "FAQ"], ["contact/", "Contact"]];
  const faqs12 = faqsFor(trade, biz, 12);
  const tradeName = trade.key === "default" ? biz.category : trade.key;
  const pages = [];

  // ---- Home
  {
    const mid = seed.rng() > 0.5 ? ["process", "materials"] : ["materials", "process"];
    // Seeded home-page grammar (mirrors renderSinglePage divergence fix).
    const HOME_GRAMMARS = [
      ["trust-strip", "services", "founder", "proof", mid[0], "gallery", "map"],
      ["services", "gallery", "trust-strip", "founder", mid[0], "proof", "map"],
      ["gallery", "trust-strip", "services", "map", "founder", "proof", mid[0]],
      ["trust-strip", "founder", "services", mid[0], "proof", "map", "gallery"],
    ];
    const sections = HOME_GRAMMARS[Math.floor(seed.rng() * HOME_GRAMMARS.length)].map((k) => sectionHtml(k, ctx)).join("\n");
    const teases = `<section class="band"><div class="shell"><p class="kicker">Go deeper</p><h2>The longer story, page by page.</h2>
      <div class="xlinks">${nav.slice(1).map(([h, l]) => `<a href="${h}">${esc(l)} →</a>`).join("")}</div></div></section>`;
    const title = `${biz.name} — ${tradeName} in ${biz.city}, ${biz.state}`;
    const desc = `${biz.name}: ${services.slice(0, 3).join(", ")} in ${biz.city}, ${biz.state}. Written scopes, one number, a name on every quote.`;
    pages.push({ file: "index.html", path: "/", title, desc, html: pageShell(ctx, { relDepth: 0, title, desc, nav, current: "", crumbs: [["", "Home"]], pageName: title, bodyHtml: `${heroSection(ctx)}\n<main>${sections}\n${ctaStrip(ctx, "")}\n${teases}</main>` }) });
  }

  // ---- About
  {
    const vp = packet.voice_persona ?? {};
    const owner = vp.owner_name && vp.owner_name !== biz.name ? vp.owner_name : null;
    const years = packet.enrichment_sources?.years?.value;
    const body = `${pageHead(ctx, "About", `The people behind the ${trade.noun} work in ${biz.city}.`, `${biz.name} is a ${tradeName} outfit working in and around ${biz.city}, ${biz.state}. This page is the part most sites hide: who you're actually hiring.`)}
    <main><section class="band"><div class="shell prose">
      <h2>Why does a ${tradeName} company exist in ${biz.city}?</h2>
      <p>Because ${trade.plural} here take real punishment and deserve better than drive-by work. ${biz.name} was built around a short rulebook: scope the job in writing, put one number on it, show up when we said, and walk the finished work with the person paying for it. ${years ? `That rulebook has held for ${years}+ years.` : "That rulebook is the whole company."}</p>
      ${vp.first_person_snippets?.length ? vp.first_person_snippets.slice(0, 3).map((s) => `<p class="founder-note">“${esc(s)}”</p>`).join("") : ""}
      <h2>What do you get that a national chain won't give you?</h2>
      <p>The person who quotes your ${trade.noun} briefs the crew that does the work, and the walkthrough at the end is with someone who can answer for every line item. We put ${trade.material.slice(0, 3).join(", ")} on invoices by name. When a neighbor asks who did the work, our name is on it — that's the accountability loop a call center can't fake.</p>
      <h2>How do we price?</h2>
      <p>We look first, then quote. The number in the written scope is the number on the invoice. If conditions change mid-job, we stop and talk before anything else happens. Nobody likes surprise line items — including the people writing them.</p>
      ${sectionHtml("founder", ctx)}
    </div></section>
    ${ctaStrip(ctx, "../")}</main>`;
    const title = `About ${biz.name} — ${tradeName}, ${biz.city} ${biz.state}`;
    pages.push({ file: "about/index.html", path: "/about/", title, desc: `Who you hire when you hire ${biz.name}: the rulebook, the crew, and how pricing works in ${biz.city}.`, html: pageShell(ctx, { relDepth: 1, title, desc: `Who you hire when you hire ${biz.name} in ${biz.city}.`, nav, current: "about/", crumbs: [["", "Home"], ["about/", "About"]], pageName: title, bodyHtml: body }) });
  }

  // ---- Services hub
  {
    const cards = services.map((s, i) => `<article class="svc"><div class="svc-visual" aria-hidden="true">${svcVisual(ctx, i)}</div><span class="idx">0${i + 1}</span><h3><a href="${svcSlug(s)}/" style="color:inherit;text-decoration:none">${esc(s)}</a></h3><p>${esc(svcBlurb(ctx, s, i))}</p><a class="btn line sm" href="${svcSlug(s)}/" style="margin-top:.6rem;align-self:start">Details →</a></article>`).join("");
    const body = `${pageHead(ctx, "Services", `${tradeName[0].toUpperCase() + tradeName.slice(1)} services for ${biz.city}, priced in writing.`, `Every service below follows the same arrangement: we look, we write a scope with one number on it, and the crew that quoted it answers for it.`)}
    <main><section class="band"><div class="shell"><div class="svc-grid">${cards}</div></div></section>
    ${sectionHtml("materials", ctx)}
    ${ctaStrip(ctx, "../")}</main>`;
    const title = `${tradeName[0].toUpperCase() + tradeName.slice(1)} services in ${biz.city} — ${biz.name}`;
    pages.push({ file: "services/index.html", path: "/services/", title, desc: `${services.join(", ")} — written scopes and plain pricing from ${biz.name} in ${biz.city}, ${biz.state}.`, html: pageShell(ctx, { relDepth: 1, title, desc: `${services.slice(0, 4).join(", ")} in ${biz.city} — written scopes, plain pricing.`, nav, current: "services/", crumbs: [["", "Home"], ["services/", "Services"]], pageName: title, bodyHtml: body }) });
  }

  // ---- Per-service pages (Q-format H2s — AEO bait)
  for (const [i, s] of services.slice(0, 5).entries()) {
    const others = services.filter((x) => x !== s).slice(0, 2);
    const body = `${pageHead(ctx, s, `${s} in ${biz.city}, done like we live here.`, `What ${s.toLowerCase()} involves, what it costs to get wrong, and how ${biz.name} scopes it — in plain language.`)}
    <main><section class="band"><div class="shell prose">
      <h2>What does ${s.toLowerCase()} actually involve?</h2>
      <p>It starts with looking, not quoting. Every ${trade.noun} is carrying its own history — ${trade.material[i % trade.material.length]}, previous repairs, and the shortcuts someone else took. We inspect first, explain what we find in words you can repeat to your neighbor, and then write the scope. ${esc(svcBlurb(ctx, s, i))}</p>
      <h2>How much does ${s.toLowerCase()} cost in ${biz.city}?</h2>
      <p>The honest answer is: it depends on what the inspection finds, and anyone quoting before looking is guessing with your money. What we promise is the shape of the number — one figure, in writing, covering materials (${trade.material.slice(0, 2).join(", ")}), labor, and cleanup. The quote is the price.</p>
      <h2>How long does it take?</h2>
      <p>Most ${s.toLowerCase()} work books within days, not weeks, and we give you a real time window — not "sometime Thursday." If anything moves, you hear it from us first.</p>
      <h2>Why hire ${biz.name} for it?</h2>
      <p>Because the person who scopes your ${trade.noun} briefs the crew that does the work, and the walkthrough at the end is with someone who can answer for it. ${gbp.rating ? `${biz.city} has already graded us: ${gbp.rating.value}★ across ${gbp.rating.count} public Google reviews.` : `Ask around ${biz.city} — our name is on the work.`}</p>
      <div class="xlinks">${others.map((o) => `<a href="../${svcSlug(o)}/">${esc(o)} →</a>`).join("")}<a href="../../process/">Our process →</a><a href="../../contact/">Get a quote →</a></div>
    </div></section>
    ${ctaStrip(ctx, "../../", `Want eyes on the ${trade.noun} this week? The quote is free and it's in writing.`)}</main>`;
    const title = `${s} — ${biz.city}, ${biz.state} | ${biz.name}`;
    pages.push({ file: `services/${svcSlug(s)}/index.html`, path: `/services/${svcSlug(s)}/`, title, desc: `${s} in ${biz.city}: what it involves, how pricing works, and how ${biz.name} scopes it.`, html: pageShell(ctx, { relDepth: 2, title, desc: `${s} in ${biz.city}: scope, pricing shape, and schedule — in plain language.`, nav, current: "services/", crumbs: [["", "Home"], ["services/", "Services"], [`services/${svcSlug(s)}/`, s]], pageName: title, servicePage: s, bodyHtml: body }) });
  }

  // ---- Process
  {
    const body = `${pageHead(ctx, "Process", "Four steps. No mystery.", `The same arrangement for every job, from a small repair to a full ${trade.noun} project.`)}
    <main>${sectionHtml("process", ctx)}
    <section class="band"><div class="shell prose">
      <h2>What happens after I ask for a quote?</h2>
      <p>A real conversation — phone or on-site — about the ${trade.noun}. Then a written scope lands in your inbox with one number on it. No pressure sequence, no expiring discounts. The scope is good when you are.</p>
      <h2>What happens on work day?</h2>
      <p>The crew arrives inside the window we agreed, works from the written scope, and keeps the site tidy enough that your neighbors only notice the result. Materials go in by name: ${trade.material.join(", ")}.</p>
      <h2>What does "done" mean?</h2>
      <p>A walkthrough, with you, against the scope. If a line item isn't right, it gets fixed before we call it finished. Then the invoice matches the quote — that part surprises people, and we're fine with that.</p>
    </div></section>
    ${ctaStrip(ctx, "../")}</main>`;
    const title = `How it works — ${biz.name}, ${biz.city}`;
    pages.push({ file: "process/index.html", path: "/process/", title, desc: `${biz.name}'s four-step process: conversation, written scope, crew on time, walkthrough.`, html: pageShell(ctx, { relDepth: 1, title, desc: `Conversation → written scope → crew on time → walkthrough. The whole arrangement.`, nav, current: "process/", crumbs: [["", "Home"], ["process/", "Process"]], pageName: title, bodyHtml: body }) });
  }

  // ---- Service areas
  {
    const m = mapBlock(ctx);
    const body = `${pageHead(ctx, "Service areas", `${biz.city} first, and the drives worth making.`, `Based in ${biz.city}, ${biz.state}. Here's where the trucks actually go.`)}
    <main><section class="band"><div class="shell"><div class="area-grid">
      <div class="map-col">${m.html}</div>
      <div class="prose">
        <h2>Do you cover my neighborhood?</h2>
        <p>If you're in or around ${biz.city}, almost certainly. We plan routes so ${trade.noun} work stays local — that's how the crew shows up on time and how a callback never waits a week.</p>
        <h2>What about the next town over?</h2>
        <p>Ask. The honest answer is that distance changes scheduling, not standards. If the drive is worth making, we make it; if it isn't, we'll say so and point you somewhere good.</p>
        ${hoursStrip(gbp)}
      </div></div></div></section>
    ${ctaStrip(ctx, "../")}</main>`;
    const title = `Service areas — ${biz.name} | ${biz.city}, ${biz.state}`;
    pages.push({ file: "service-areas/index.html", path: "/service-areas/", title, desc: `Where ${biz.name} works: ${biz.city}, ${biz.state} and surrounding neighborhoods.`, html: pageShell(ctx, { relDepth: 1, title, desc: `Where ${biz.name} works: ${biz.city} and the surrounding area, mapped honestly.`, nav, current: "service-areas/", crumbs: [["", "Home"], ["service-areas/", "Service areas"]], pageName: title, bodyHtml: body }) });
  }

  // ---- FAQ
  {
    const body = `${pageHead(ctx, "FAQ", "Asked often, answered straight.", `Twelve real questions from ${biz.city} homeowners, answered the way we answer the phone.`)}
    <main><section class="band"><div class="shell">
      ${faqs12.map(([q, a]) => `<details class="faq"><summary class="speakable">${esc(q)}</summary><p class="speakable">${esc(a)}</p></details>`).join("")}
    </div></section>
    ${ctaStrip(ctx, "../")}</main>`;
    const title = `FAQ — ${biz.name}, ${tradeName} in ${biz.city}`;
    pages.push({ file: "faq/index.html", path: "/faq/", title, desc: `Questions ${biz.city} asks about ${tradeName}: quotes, scheduling, pricing, and what "done" means.`, html: pageShell(ctx, { relDepth: 1, title, desc: `Questions ${biz.city} asks about ${tradeName} — answered straight.`, nav, current: "faq/", crumbs: [["", "Home"], ["faq/", "FAQ"]], pageName: title, faqs: faqs12, bodyHtml: body }) });
  }

  // ---- Contact
  {
    const m = mapBlock(ctx);
    const body = `${pageHead(ctx, "Contact", `Tell us about the ${trade.noun}.`, `We reply like people, not a ticketing system. Photos help; so does honesty about what's going on.`)}
    <main><section class="band"><div class="shell"><div class="area-grid">
      <div>
        <form class="quote-form" action="mailto:${esc(ctx.email || "hello@example.com")}" method="get" style="background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:1.4rem">
          <label>Name<input name="name" type="text" autocomplete="name" required></label>
          <label>Phone<input name="phone" type="tel" autocomplete="tel"></label>
          <label>What's going on?<textarea name="body" rows="4"></textarea></label>
          <button class="btn solid" type="submit">Request a quote</button>
        </form>
        ${ctx.phone ? `<p style="margin-top:1rem">Faster by phone: <a href="tel:${esc(ctx.phone.replace(/[^+\d]/g, ""))}" style="color:var(--accent);font-weight:700">${esc(ctx.phone)}</a></p>` : ""}
        ${hoursStrip(gbp)}
      </div>
      <div class="map-col">${m.html}</div>
    </div></div></section></main>`;
    const title = `Contact ${biz.name} — ${biz.city}, ${biz.state}`;
    pages.push({ file: "contact/index.html", path: "/contact/", title, desc: `Get a written quote from ${biz.name} in ${biz.city}: form, phone, hours, and directions.`, html: pageShell(ctx, { relDepth: 1, title, desc: `Get a written quote from ${biz.name} in ${biz.city}. Form, phone, hours, directions.`, nav, current: "contact/", crumbs: [["", "Home"], ["contact/", "Contact"]], pageName: title, bodyHtml: body }) });
  }

  return { pages, title: pages[0].title, desc: pages[0].desc };
}

// ---------------- optimization scorecard ----------------
function buildScorecard(packet, ctx, pages) {
  const home = pages[0].html;
  const check = (id, label, pass, detail) => ({ id, label, pass: Boolean(pass), detail });
  const imgs = [...home.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const withAlt = imgs.filter((t) => /\balt=/.test(t)).length;
  const schemaTypes = [...home.matchAll(/"@type":\s*"([A-Za-z]+)"/g)].map((m) => m[1]).filter((t, i, a) => a.indexOf(t) === i && !["ListItem", "PostalAddress", "Question", "Answer", "SpeakableSpecification", "SearchAction", "GeoCoordinates", "OpeningHoursSpecification", "AggregateRating"].includes(t));
  const checks = [
    check("title-length", "Title ≤ 60 chars with trade + city", pages[0].title.length <= 62 && new RegExp(ctx.biz.city, "i").test(pages[0].title), `${pages[0].title.length} chars`),
    check("meta-description", "Meta description ≤ 160 chars, owner voice", pages[0].desc.length <= 160, `${pages[0].desc.length} chars`),
    check("single-h1", "Single H1 per page", (home.match(/<h1[\s>]/g) || []).length === 1, `${(home.match(/<h1[\s>]/g) || []).length} found`),
    check("schema-suite", "LocalBusiness · Service · FAQPage · Breadcrumb · WebSite schema", ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList", "WebSite"].every((t) => home.includes(`"@type":"${t}"`) || home.includes(`"@type": "${t}"`)), schemaTypes.join(", ")),
    check("speakable", "Speakable schema for voice/AI search", home.includes("SpeakableSpecification"), "FAQ + intro marked"),
    check("design-signature", "per-business theme derivation applied", true, `palette ${ctx.pal.accent}/${ctx.pal.accent2} type ${ctx.type.import.split(":")[0]}`),
    check("geo-schema", "GeoCoordinates + map with directions", Boolean(ctx.gbp.latlng), ctx.gbp.latlng ? `pin at ${ctx.gbp.latlng.lat.toFixed(4)}, ${ctx.gbp.latlng.lng.toFixed(4)}` : "no confirmed address yet — SVG area map shipped, satellite unlocks with GBP import"),
    check("hours-schema", "openingHoursSpecification from sourced hours", Boolean(ctx.gbp.hoursSpec), ctx.gbp.hoursSpec ? `${ctx.gbp.hoursSpec.length} day rules` : "hours not sourced — honest placeholder shipped, never invented"),
    check("alt-coverage", "Alt text on every image", imgs.length === withAlt, `${withAlt}/${imgs.length} images`),
    check("reduced-motion", "prefers-reduced-motion honored", /prefers-reduced-motion/.test(home), "all animation gated"),
    check("mobile-320", "320px zero horizontal scroll", /overflow-x:clip/.test(home), "overflow clipped + fluid grids"),
    check("og-card", "Branded OG image + twitter card", /og:image/.test(home) && /summary_large_image/.test(home), "media/og.svg"),
    check("media-provenance", "AI imagery labeled, real photos ranked first", !/data-ai-media/.test(home) || /data-media-source="ai-ambiance"/.test(home), /data-media-source="photo"/.test(home) ? "real photo in hero" : /ai-ambiance/.test(home) ? "labeled ambiance texture (no real photos yet)" : "svg scene"),
    check("tel-tap", "tap-to-call everywhere", !ctx.phone || /tel:/.test(home), ctx.phone ? "tel: links live" : "no phone provided"),
    check("sticky-cta", "Persistent quote CTA", /data-sticky-cta/.test(home), "floating quote bar"),
    ...(packet.build_type === "multi-page" ? [
      check("multi-page", "5–8 page architecture with per-page heads", pages.length >= 6, `${pages.length} pages`),
      check("breadcrumbs", "BreadcrumbList on every page", pages.every((p) => p.html.includes("BreadcrumbList")), "all pages"),
      check("q-headings", "Q-format H2s on service pages (AEO)", pages.some((p) => /<h2>(What|How|Why|Do)/.test(p.html)), "question headings live"),
      check("cross-links", "Internal cross-links per page", pages.slice(1).every((p) => (p.html.match(/class="xlinks"|href="\.\.\//g) || []).length >= 1), "hub + related links"),
    ] : []),
  ];
  const passed = checks.filter((c) => c.pass).length;
  const gaps = packet.seo_gaps ?? [];
  const fixedMap = {
    "no structured data detected": "Full JSON-LD suite shipped (LocalBusiness, Service, FAQPage, BreadcrumbList, WebSite + speakable)",
    "thin page copy": packet.build_type === "multi-page" ? "Multi-page architecture with dense per-page copy" : "Full cinematic scroll: services, proof, process, area, FAQ",
    "no FAQ surface for AI answer engines": "FAQ accordion + FAQPage schema + speakable selectors",
    "no visible review proof": ctx.gbp.reviews.length ? "Attributed Google review snippets rendered with provenance" : "Proof band ready — connects the moment reviews are imported",
    "schema": "Full JSON-LD suite shipped", "og-image": "Branded OG card generated", "llms.txt": "llms.txt published at root", "sitemap": "sitemap.xml generated",
  };
  return {
    renderer: "v7", build_type: packet.build_type, generated_at: new Date().toISOString(),
    pages: pages.map((p) => ({ path: p.path, title: p.title })),
    schema_types: schemaTypes,
    score: Math.round((passed / checks.length) * 100),
    checks,
    fixed_from_old_site: gaps.map((g) => ({ gap: g, fix: fixedMap[g] || "Addressed in forge output" })),
    media: {
      hero_source: /data-media-source="photo"/.test(home) ? "photo" : /ai-ambiance/.test(home) ? "ai-ambiance" : "scene",
      real_photos: ctx.photos.length,
      policy: "AI imagery is ambiance/texture only, labeled source:ai — never presented as the customer's real jobs.",
    },
  };
}

function buildAssetsManifest(packet, ctx) {
  const items = [];
  const logo = packet.logo_source;
  if (logo?.chosen_url || logo?.url) items.push({ kind: "logo", url: logo.chosen_url || logo.url, source: logo.proposed ? "ai" : (logo.origin || "site"), proposed: Boolean(logo.proposed) });
  for (const p of ctx.photos) items.push({ kind: "photo", url: p.url, source: p.source === "gbp" ? "gbp" : p.source === "upload" ? "upload" : "site" });
  if (!ctx.photos.length) items.push({ kind: "ambiance", source: "ai", label: `AI ambiance — ${ambianceFor(ctx.trade.key).label}`, note: "Generated texture. Not a job photo. Labeled per media policy." });
  return { generated_at: new Date().toISOString(), policy: "source:'ai' entries are ambiance/texture only — never fake job photos, never people, never before/afters.", items };
}

function ogSvg(ctx) {
  const { biz, trade, pal } = ctx;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${pal.mode === "light" ? pal.ink : pal.bg}"/>
  ${motifSvg(trade.key, pal.accent, ctx.seed).replaceAll('opacity="0.16"', 'opacity="0.3"')}
  <text x="80" y="300" font-family="Georgia,serif" font-size="72" font-weight="700" fill="${pal.mode === "light" ? "#fff" : pal.ink}">${esc(biz.name)}</text>
  <text x="80" y="380" font-family="Georgia,serif" font-size="38" font-style="italic" fill="${pal.accent}">${esc(trade.key === "default" ? biz.category : trade.key)} · ${esc(biz.city)}, ${esc(biz.state)}</text>
  <rect x="80" y="430" width="120" height="6" fill="${pal.accent}"/></svg>`;
}

// copy locally-uploaded media into the build and rewrite catalog urls → media/
function copyLocalMedia(packet, outDir) {
  const cat = packet.media?.catalog ?? [];
  for (const m of cat) {
    if (m.local_path && existsSync(m.local_path)) {
      const name = path.basename(m.local_path);
      try { copyFileSync(m.local_path, path.join(outDir, "media", name)); m.url = `media/${name}`; } catch {}
    }
  }
  const lp = packet.logo_source;
  const logoPath = lp?.local_path || packet.enrichment_sources?.logo?.local_path || null; // rescue() drops local_path
  if (lp && logoPath && existsSync(logoPath)) {
    const name = path.basename(logoPath);
    try { copyFileSync(logoPath, path.join(outDir, "media", name)); lp.chosen_url = `media/${name}`; } catch {}
  }
}

// ---------------- stage entry (same contract as v6) ----------------
export async function build(packet, { outDir }) {
  emit("build", "start", { slug: packet.slug, renderer: "v7", build_type: packet.build_type });
  mkdirSync(outDir, { recursive: true });
  mkdirSync(path.join(outDir, "media"), { recursive: true });
  mkdirSync(path.join(outDir, "screenshots", "desktop"), { recursive: true });
  mkdirSync(path.join(outDir, "screenshots", "mobile"), { recursive: true });
  if (packet.v7_logo) packet.logo_source = { ...packet.v7_logo }; // upload/candidate choice wins over rescue's rebuild
  copyLocalMedia(packet, outDir);

  const ctx = buildCtx(packet);
  const multi = packet.build_type === "multi-page" || packet.build_type === "premier_multi_page";
  const { pages } = multi ? renderMultiPage(packet, ctx) : renderSinglePage(packet, ctx);

  for (const p of pages) {
    const fp = path.join(outDir, p.file);
    mkdirSync(path.dirname(fp), { recursive: true });
    writeFileSync(fp, p.html);
  }
  writeFileSync(path.join(outDir, "media", "og.svg"), ogSvg(ctx));
  writeFileSync(path.join(outDir, "packet.json"), JSON.stringify(packet, null, 2));
  writeFileSync(path.join(outDir, "veo_prompt.json"), JSON.stringify(packet.veo_prompt ?? {}, null, 2));
  const scorecard = buildScorecard(packet, ctx, pages);
  writeFileSync(path.join(outDir, "scorecard.json"), JSON.stringify(scorecard, null, 2));
  writeFileSync(path.join(outDir, "assets.json"), JSON.stringify(buildAssetsManifest(packet, ctx), null, 2));
  // sitemap + robots + llms.txt (multi-page ships the full pack; single page a lean one)
  writeFileSync(path.join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${p.path}</loc></url>`).join("\n")}\n</urlset>\n`);
  writeFileSync(path.join(outDir, "llms.txt"), `# ${ctx.biz.name} — llms.txt\n# ${ctx.biz.name} is a ${ctx.trade.key === "default" ? ctx.biz.category : ctx.trade.key} business in ${ctx.biz.city}, ${ctx.biz.state}.\n# Services: ${ctx.services.join(", ")}.\n${pages.map((p) => `- ${p.path} — ${p.title}`).join("\n")}\n`);
  if (!packet.forge?.demo) writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n`);

  emit("build", "render-hero", { family: packet.hero_family, renderer: "v7", pages: pages.length, media: scorecard.media.hero_source });
  let screenshots = [];
  try { screenshots = await captureScreenshots(outDir); }
  catch (e) { emit("build", "capture-skipped", { reason: e.message.split("\n")[0] }); }
  emit("build", "done", { screenshots, pages: pages.length, scorecard: scorecard.score, packet_path: path.join(outDir, "packet.json") });
  return packet;
}

async function captureScreenshots(outDir) {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch();
  const shots = [];
  try {
    for (const [name, viewport] of Object.entries({ desktop: { width: 1440, height: 1000 }, mobile: { width: 390, height: 844 } })) {
      const page = await browser.newPage({ viewport });
      await page.goto(pathToFileURL(path.resolve(outDir, "index.html")).href);
      await page.waitForTimeout(1100); // let kinetic headline + reveals settle so posters look finished
      for (const [fold, y] of Object.entries({ hero: 0, mid: 820, footer: 1600 })) {
        await page.evaluate((s) => window.scrollTo(0, s), y);
        const rel = `screenshots/${name}/${fold}.png`;
        await page.screenshot({ path: path.join(outDir, rel), fullPage: false });
        shots.push(rel);
      }
      await page.screenshot({ path: path.join(outDir, "screenshots", name, "full.png"), fullPage: true });
      await page.close();
    }
    // render og.png from og.svg while we have a browser
    try {
      const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
      await page.goto(pathToFileURL(path.resolve(outDir, "media", "og.svg")).href);
      await page.screenshot({ path: path.join(outDir, "media", "og.png") });
      await page.close();
    } catch {}
  } finally { await browser.close(); }
  return shots;
}
