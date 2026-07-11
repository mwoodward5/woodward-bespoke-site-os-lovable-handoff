#!/usr/bin/env node
/**
 * Woodward SiteForge — prompt → packet → build → QC, one command, repeatable.
 *
 *   node scripts/forge.mjs --prompt "Site for Summit Roofing in Plano, TX. 20 years, family-owned..."
 *   node scripts/forge.mjs --from-intake intake.json          (ghost-agency intake payload)
 *   node scripts/forge.mjs --prompt "..." --footprint lm.json (merge LeadMiner/GBP evidence)
 *   Flags: --slug x  --hero <family>  --demo  --dry-run  --no-build
 *
 * Honesty contract: every fact in the packet is traceable to the prompt, the
 * footprint file, or engine enrichment. Nothing is invented. Ambiguities are
 * recorded in enrichment_sources with reduced confidence, never asserted.
 * Same prompt + same inputs => same packet => same site (deterministic seed).
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HERO_FAMILIES = ["cinematic-video-parallax","split-editorial-index","service-map-pins","material-lab-swatch","magazine-owner-letter","atlas-grid-reveal"];
const STATES = {alabama:"AL",alaska:"AK",arizona:"AZ",arkansas:"AR",california:"CA",colorado:"CO",connecticut:"CT",delaware:"DE",florida:"FL",georgia:"GA",hawaii:"HI",idaho:"ID",illinois:"IL",indiana:"IN",iowa:"IA",kansas:"KS",kentucky:"KY",louisiana:"LA",maine:"ME",maryland:"MD",massachusetts:"MA",michigan:"MI",minnesota:"MN",mississippi:"MS",missouri:"MO",montana:"MT",nebraska:"NE",nevada:"NV","new hampshire":"NH","new jersey":"NJ","new mexico":"NM","new york":"NY","north carolina":"NC","north dakota":"ND",ohio:"OH",oklahoma:"OK",oregon:"OR",pennsylvania:"PA","rhode island":"RI","south carolina":"SC","south dakota":"SD",tennessee:"TN",texas:"TX",utah:"UT",vermont:"VT",virginia:"VA",washington:"WA","west virginia":"WV",wisconsin:"WI",wyoming:"WY"};
const TRADES = [
  [/roof/i,"roofing"],[/landscap|lawn|yard/i,"landscaping"],[/electric/i,"electrical"],
  [/plumb/i,"plumbing"],[/hvac|heating|air condition|\bac repair/i,"hvac"],[/pool/i,"pool service"],
  [/tree (care|service|removal)|arborist/i,"tree care"],[/paint/i,"painting"],[/concrete|paving|asphalt/i,"concrete"],
  [/fence|fencing/i,"fencing"],[/clean/i,"cleaning"],[/garage door/i,"garage door"],[/pest/i,"pest control"],
  [/solar/i,"solar"],[/remodel|renovat|general contract/i,"general contracting"],[/excavat/i,"excavation"],
];

const sha = (s) => createHash("sha256").update(s).digest("hex");
const kebab = (s) => String(s).toLowerCase().replace(/&/g," and ").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60);

function parseArgs(argv) {
  const a = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    const t = argv[i];
    if (t.startsWith("--")) {
      const k = t.slice(2);
      const flagOnly = ["demo","dry-run","no-build","deploy","json"].includes(k);
      a[k] = flagOnly ? true : (argv[i+1] && !argv[i+1].startsWith("--") ? argv[++i] : true);
    } else a._.push(t);
  }
  return a;
}

function extract(prompt) {
  const facts = {}; const src = {};
  const put = (k, value, confidence, note) => { if (value != null && value !== "") { facts[k] = value; src[k] = { source: "prompt", confidence, value: String(value), ...(note ? { note } : {}) }; } };

  // business name: "for <Name> in" > "called <Name>" > short leading quote
  const forIn = prompt.match(/\bfor\s+([A-Z][\w&'.-]*(?:\s+[A-Z0-9][\w&'.-]*){0,5})\s+(?:in|of|at|serving)\b/);
  const called = prompt.match(/\b(?:called|named)\s+([A-Z][\w&'.-]*(?:\s+[A-Z0-9][\w&'.-]*){0,5})/);
  const quoted = prompt.match(/["“']([^"”']{3,40})["”']/);
  const quotedName = quoted && prompt.indexOf(quoted[0]) < 80 ? quoted[1] : "";
  const nameUsedQuote = !forIn && !called && Boolean(quotedName);
  put("name", (forIn?.[1] || called?.[1] || quotedName || "").trim(), forIn || called ? 0.9 : 0.75);

  // location: "in City, ST" / "in City, StateName"
  const loc = prompt.match(/\bin\s+([A-Z][A-Za-z .'-]{2,30}?),\s*(?:([A-Z]{2})\b|([A-Z][a-z]+(?: [A-Z][a-z]+)?))/);
  if (loc) { put("city", loc[1].trim(), 0.9); put("state", loc[2] || STATES[(loc[3]||"").toLowerCase()] || "", loc[2] ? 0.95 : 0.85); }

  // trade
  for (const [re, cat] of TRADES) if (re.test(prompt)) { put("category", cat, 0.9); break; }

  put("phone", (prompt.match(/(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/) || [])[1], 0.95);
  put("email", (prompt.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})/) || [])[1], 0.95);
  put("website", (prompt.match(/(https?:\/\/[^\s"'<>]+)/) || [])[1], 0.95);
  put("years", (prompt.match(/(\d{1,2})\+?\s*years?/i) || [])[1], 0.85);
  const owner = prompt.match(/\b(?:owner|founder|run by|i'?m|my name is)\s+(?:is\s+)?([A-Z][a-z]+(?: [A-Z][a-z]+)?)/i);
  put("owner_name", owner?.[1], 0.8);

  // tone
  const tone = /luxur|premium|high[- ]end|upscale/i.test(prompt) ? "refined, assured"
    : /family|friendly|neighborly|hometown/i.test(prompt) ? "warm, family-run, plainspoken"
    : /no[- ]nonsense|straight|blue[- ]collar|hardworking/i.test(prompt) ? "direct, hardworking, honest"
    : "warm, plainspoken, professional";
  facts.tone = tone; src.tone = { source: "prompt", confidence: 0.7, value: tone, note: "inferred from prompt wording" };

  // verbatim first-person snippets only (never fabricated)
  const allQuotes = (prompt.match(/[“"]([^"”]{15,160})[”"]/g) || []).map(s => s.replace(/[“”"]/g, ""));
  const snippets = (nameUsedQuote ? allQuotes.slice(1) : allQuotes).slice(0, 3);
  if (snippets.length) { facts.snippets = snippets; src.snippets = { source: "prompt", confidence: 0.9, value: snippets.join(" | ") }; }

  // services list: "services: a, b, c" or "offering a, b and c"
  const svc = prompt.match(/\b(?:services?|offering|specializ\w+ in)[:\s]+([^.;\n]{10,160})/i);
  if (svc) { facts.services = svc[1].split(/,| and /).map(s => s.trim()).filter(s => s && s.length < 40).slice(0, 8); src.services = { source: "prompt", confidence: 0.85, value: svc[1] }; }

  return { facts, src };
}

function fromIntake(file) {
  const d = JSON.parse(readFileSync(file, "utf8"));
  const facts = {
    name: d.businessName, category: (d.industry || "").toLowerCase() || undefined,
    city: d.city, state: d.state, phone: d.phone || undefined, email: d.ownerEmail || undefined,
    website: d.currentWebsite || undefined,
    services: d.services ? String(d.services).split(/,/).map(s => s.trim()).filter(Boolean) : undefined,
    tone: "warm, plainspoken, professional",
  };
  const src = {};
  for (const [k, v] of Object.entries(facts)) if (v != null) src[k] = { source: "intake_form", confidence: 0.95, value: Array.isArray(v) ? v.join(", ") : String(v) };
  return { facts, src, intake: d };
}

function buildPacket({ facts, src }, opts) {
  const missing = ["name","category","city","state"].filter(k => !facts[k]);
  if (missing.length) throw new Error(`Cannot forge packet — missing required business facts: ${missing.join(", ")}. Add them to the prompt (e.g. 'for Summit Roofing in Plano, TX').`);

  const slug = opts.slug || `wss-${kebab(facts.category)}-${kebab(facts.name)}`;
  const seed = sha(slug).slice(0, 12); // deterministic: same slug => same layout DNA
  const hero = opts.hero && HERO_FAMILIES.includes(opts.hero) ? opts.hero : HERO_FAMILIES[parseInt(sha(slug).slice(0, 8), 16) % HERO_FAMILIES.length];

  const enrichment = {};
  for (const [k, v] of Object.entries(src)) enrichment[k] = v;

  const packet = {
    slug,
    prompt: opts.prompt || `Forged from intake for ${facts.name}`,
    forge: { version: "1.0.0", generated_at: new Date().toISOString(), deterministic_seed: seed, demo: Boolean(opts.demo) },
    business: {
      name: facts.name, category: facts.category, city: facts.city, state: facts.state,
      ...(facts.phone ? { phone: facts.phone } : {}),
      ...(facts.email ? { email: facts.email } : {}),
      ...(facts.website ? { current_website: facts.website } : {}),
      source_platform: "other",
    },
    build_type: opts["build-type"] || "multi-page",
    hero_family: hero,
    layout_seed: seed,
    toggles: {
      firecrawl: Boolean(facts.website && process.env.FIRECRAWL_API_KEY),
      gbp: Boolean(facts.gbp_url), local_serp: false,
      video_prompt: /video|cinematic/i.test(opts.prompt || ""),
      map: true, ai_chat: /chat|assistant/i.test(opts.prompt || ""), payment_cta: /payment|checkout|book(ing)? online/i.test(opts.prompt || ""),
    },
    enrichment_sources: enrichment,
    voice_persona: {
      owner_name: facts.owner_name || `${facts.name} team`,
      tone: facts.tone,
      ...(facts.snippets ? { first_person_snippets: facts.snippets } : {}),
    },
    ...(facts.services ? { services: facts.services } : {}),
  };
  return packet;
}

function validate(packet) {
  const schema = JSON.parse(readFileSync(path.join(ROOT, "generator-queue-v5.schema.json"), "utf8"));
  const errs = [];
  for (const k of schema.required || []) if (packet[k] == null) errs.push(`missing root field: ${k}`);
  for (const k of schema.properties?.business?.required || []) if (packet.business?.[k] == null) errs.push(`missing business.${k}`);
  const heroEnum = schema.properties?.hero_family?.enum;
  if (heroEnum && !heroEnum.includes(packet.hero_family)) errs.push(`hero_family not in enum`);
  for (const k of schema.properties?.voice_persona?.required || []) if (packet.voice_persona?.[k] == null) errs.push(`missing voice_persona.${k}`);
  if (errs.length) throw new Error("Packet failed schema validation:\n  - " + errs.join("\n  - "));
}

function injectDemoGuards(siteDir) {
  // demo builds must never masquerade as a real business site
  for (const f of readdirSync(siteDir, { recursive: true })) {
    const fp = path.join(siteDir, String(f));
    if (!fp.endsWith(".html")) continue;
    let html = readFileSync(fp, "utf8");
    if (!/name="robots"/.test(html)) html = html.replace(/<head([^>]*)>/i, `<head$1>\n  <meta name="robots" content="noindex, nofollow" />`);
    html = html.replace(/<body([^>]*)>/i, `<body$1>\n  <!-- SiteForge demo build — not a live business site -->`);
    writeFileSync(fp, html);
  }
}

// ---------- main ----------
const args = parseArgs(process.argv);
try {
  let parsed;
  if (args["from-intake"]) parsed = fromIntake(args["from-intake"]);
  else if (args.prompt) parsed = extract(args.prompt);
  else { console.error("Usage: forge --prompt \"...\" | --from-intake intake.json  [--footprint f.json] [--slug s] [--hero fam] [--demo] [--dry-run] [--no-build]"); process.exit(2); }

  if (args.footprint) { // merge LeadMiner/GBP evidence file (footprint wins on conflicts, higher provenance)
    const fp = JSON.parse(readFileSync(args.footprint, "utf8"));
    const map = { name:"name", category:"category", city:"city", state:"state", phone:"phone", address:"address", current_website:"website", gbp_url:"gbp_url" };
    for (const [pk, fk] of Object.entries(map)) {
      let v = fp.business?.[pk] ?? fp[pk];
      // City sanitizer: LeadMiner sometimes leaks the state token into city
      // ("CA" -> title renders "CA, CA"). Reject 2-letter/state-equal cities and
      // fall back to parsing the street address.
      if (pk === "city" && v) {
        const state = fp.business?.state ?? fp.state ?? parsed.facts.state ?? "";
        if (/^[A-Z]{2}$/.test(String(v).trim()) || String(v).trim().toLowerCase() === String(state).trim().toLowerCase()) {
          const addr = String(fp.business?.address ?? fp.address ?? "");
          const m = addr.match(/,\s*([A-Za-z .'-]{3,40}),\s*[A-Z]{2}\b/);
          v = m ? m[1].trim() : "";
        }
      }
      if (v) { parsed.facts[fk] = v; parsed.src[fk] = { source: "footprint", confidence: 0.98, value: String(v) }; }
    }
    // Lat/lng passthrough: LeadMiner/GBP location unlocks the real satellite map
    // + GeoCoordinates schema (gbpData reads enrichment_sources.latlng.value).
    const loc = fp.business?.latlng ?? fp.business?.location ?? fp.latlng ?? fp.location;
    const lat = Number(loc?.lat ?? loc?.latitude), lng = Number(loc?.lng ?? loc?.longitude);
    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      parsed.src.latlng = { source: "footprint", confidence: 0.98, value: { lat, lng } };
    }
    if (fp.source) parsed.footprintSource = fp.source;
  }

  const packet = buildPacket(parsed, args);
  if (parsed.footprintSource) packet.source = parsed.footprintSource;
  validate(packet);

  mkdirSync(path.join(ROOT, "packets"), { recursive: true });
  const packetPath = path.join(ROOT, "packets", `${packet.slug}.json`);
  writeFileSync(packetPath, JSON.stringify(packet, null, 2) + "\n");
  console.log(`✔ packet forged: packets/${packet.slug}.json  (hero: ${packet.hero_family}, seed: ${packet.layout_seed})`);
  const lowConf = Object.entries(packet.enrichment_sources).filter(([, v]) => v.confidence < 0.8).map(([k]) => k);
  if (lowConf.length) console.log(`  low-confidence facts (review): ${lowConf.join(", ")}`);

  if (args["dry-run"] || args["no-build"]) { if (args.json) console.log(JSON.stringify(packet, null, 2)); process.exit(0); }

  const r = spawnSync("node", ["factory/pipeline/run.mjs", "--packet", packetPath], { cwd: ROOT, stdio: ["ignore", "pipe", "inherit"], encoding: "utf8", env: { ...process.env, ...(args.deploy ? {} : { VERCEL_DEPLOY_HOOK_URL: "" }) } });
  process.stdout.write(r.stdout || "");
  const qcLine = (r.stdout || "").split("\n").find(l => l.includes('"stage":"qc"') && l.includes('"phase":"done"'));
  const grade = qcLine ? JSON.parse(qcLine.replace(/^data: /, "")).payload.grade : "unknown";

  const siteDir = path.join(ROOT, "generated-sites", packet.slug);
  if (args.demo && existsSync(siteDir)) { injectDemoGuards(siteDir); console.log("✔ demo guards injected (noindex)"); }

  console.log(`\n=== FORGE RESULT ===\nsite: generated-sites/${packet.slug}\nQC grade: ${grade}`);
  process.exit(r.status === 0 && grade === "A" ? 0 : 1);
} catch (e) {
  console.error("✖ forge failed:", e.message);
  process.exit(1);
}
