// SiteForge SaaS — data store. JSON-file backed with the same shape as
// app/schema.sql (Postgres/Supabase). Swap by implementing the same interface
// against postgres; every call site goes through this module.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readJsonFile, writeJsonFile, nowIso, id, ensureDir } from "./util.mjs";

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const DATA_DIR = process.env.SITEFORGE_DATA_DIR || path.join(APP_ROOT, "data");
export const SITES_DIR = path.join(DATA_DIR, "sites");       // generated site versions
export const PUBLISHED_DIR = path.join(DATA_DIR, "published"); // locally published sites
export const TRY_DIR = path.join(DATA_DIR, "try");            // template try-on previews
const DB_PATH = path.join(DATA_DIR, "db.json");

const TABLES = [
  "users", "sessions", "magic_tokens", "site_projects", "business_profiles",
  "business_assets", "site_generations", "site_qc_reports", "deployments",
  "subscriptions", "entitlements", "edit_requests", "audit_logs", "jobs",
  "dev_inbox", "webhook_events",
];

let db = null;
let writeTimer = null;
let dirty = false;

function load() {
  if (db) return db;
  ensureDir(DATA_DIR); ensureDir(SITES_DIR); ensureDir(PUBLISHED_DIR); ensureDir(TRY_DIR);
  db = readJsonFile(DB_PATH, null) ?? {};
  for (const t of TABLES) db[t] ??= [];
  return db;
}
function persist() {
  dirty = true;
  // debounce writes; flush is also called on process exit
  if (writeTimer) return;
  writeTimer = setTimeout(() => { writeTimer = null; writeJsonFile(DB_PATH, db); }, 50);
}
export function flush() { if (db) { if (writeTimer) { clearTimeout(writeTimer); writeTimer = null; } writeJsonFile(DB_PATH, db); } }
process.on("exit", flush);

// ---------- serverless (Vercel Blob) persistence ----------
// hydrate() runs once per cold start BEFORE any request; flushRemote() runs
// after each mutating request (awaited by the api wrapper).
// The db lives at IMMUTABLE versioned pathnames (db/<ts>.json): overwriting a
// fixed path serves stale CDN copies; unique paths are always fresh. The
// authorized list API finds the newest version.
export async function hydrate() {
  const { BLOB_ENABLED, blobList } = await import("./blob-store.mjs");
  if (!BLOB_ENABLED()) return false;
  load();
  const blobs = (await blobList("db/").catch(() => [])).sort((a, b) => (a.pathname < b.pathname ? 1 : -1));
  if (blobs[0]?.url) {
    const res = await fetch(blobs[0].url, { cache: "no-store" }).catch(() => null);
    const remote = res?.ok ? await res.json().catch(() => null) : null;
    if (remote) { db = remote; for (const t of TABLES) db[t] ??= []; writeJsonFile(DB_PATH, db); }
  }
  dirty = false;
  return true;
}
export async function flushRemote() {
  if (!dirty || !db) return;
  const { BLOB_ENABLED, blobPut, blobList, blobDeleteUrls } = await import("./blob-store.mjs");
  if (!BLOB_ENABLED()) return;
  dirty = false;
  flush();
  try {
    await blobPut(`db/${String(Date.now()).padStart(15, "0")}-${Math.random().toString(36).slice(2, 7)}.json`, JSON.stringify(db), "application/json");
    const old = (await blobList("db/")).sort((a, b) => (a.pathname < b.pathname ? 1 : -1)).slice(3);
    await blobDeleteUrls(old.map((b) => b.url));
  } catch (e) { dirty = true; console.error("[store] blob flush failed:", e.message); }
}

// ---------- generic ----------
export function insert(table, row) {
  const d = load();
  const rec = { id: row.id ?? id(table.slice(0, 4)), created_at: nowIso(), updated_at: nowIso(), ...row };
  d[table].push(rec); persist();
  return rec;
}
export function update(table, idv, patch) {
  const d = load();
  const rec = d[table].find((r) => r.id === idv);
  if (!rec) return null;
  Object.assign(rec, patch, { updated_at: nowIso() }); persist();
  return rec;
}
export function get(table, idv) { return load()[table].find((r) => r.id === idv) ?? null; }
export function find(table, pred) { return load()[table].find(pred) ?? null; }
export function where(table, pred) { return load()[table].filter(pred); }
export function all(table) { return [...load()[table]]; }
export function remove(table, idv) {
  const d = load();
  const i = d[table].findIndex((r) => r.id === idv);
  if (i >= 0) { d[table].splice(i, 1); persist(); return true; }
  return false;
}

// ---------- audit ----------
export function audit(actor_user_id, action, subject, meta = {}) {
  return insert("audit_logs", { actor_user_id, action, subject, meta });
}

// ---------- domain helpers ----------
export function userByEmail(email) {
  const e = String(email).toLowerCase().trim();
  return find("users", (u) => u.email === e);
}
export function projectsOf(userId) {
  return where("site_projects", (p) => p.user_id === userId && p.status !== "deleted")
    .sort((a, b) => (b.created_at || "").localeCompare(a.created_at || ""));
}
export function profileOf(projectId) { return find("business_profiles", (b) => b.project_id === projectId); }
export function assetsOf(projectId) { return where("business_assets", (a) => a.project_id === projectId); }
export function generationsOf(projectId) {
  return where("site_generations", (g) => g.project_id === projectId)
    .sort((a, b) => b.version - a.version);
}
export function latestGeneration(projectId) { return generationsOf(projectId)[0] ?? null; }
export function qcOf(generationId) { return find("site_qc_reports", (q) => q.generation_id === generationId); }
export function deploymentsOf(projectId) {
  return where("deployments", (d) => d.project_id === projectId)
    .sort((a, b) => (b.created_at || "").localeCompare(a.created_at || ""));
}
export function subscriptionOf(userId) {
  return where("subscriptions", (s) => s.user_id === userId && ["active", "trialing"].includes(s.status))
    .sort((a, b) => (b.created_at || "").localeCompare(a.created_at || ""))[0] ?? null;
}
export function entitlementsOf(userId) { return where("entitlements", (e) => e.user_id === userId && e.active); }
export function editRequestsOf(projectId) {
  return where("edit_requests", (e) => e.project_id === projectId)
    .sort((a, b) => (b.created_at || "").localeCompare(a.created_at || ""));
}
export function generationsThisMonth(userId) {
  const monthStart = new Date(); monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
  const iso = monthStart.toISOString();
  return where("site_generations", (g) => g.user_id === userId && g.created_at >= iso && g.status !== "failed").length;
}
export function siteDirFor(projectId, version) { return path.join(SITES_DIR, projectId, `v${version}`); }
