// SiteForge SaaS — billing. Stripe TEST-MODE via REST when STRIPE_SECRET_KEY
// (sk_test_...) is set; otherwise a clearly-labeled built-in mock checkout so
// the full flow runs anywhere. Live keys are refused by design.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readJsonFile, timingSafeEq, id, token, nowIso, fmtMoney } from "./util.mjs";
import { insert, update, find, where, get, subscriptionOf, entitlementsOf, audit, generationsThisMonth, projectsOf } from "./store.mjs";
import { createHmac } from "node:crypto";

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const CATALOG = readJsonFile(path.join(APP_ROOT, "config", "plans.json"));

const RAW_KEY = process.env.STRIPE_SECRET_KEY || "";
if (RAW_KEY.startsWith("sk_live_")) {
  throw new Error("SiteForge refuses live Stripe keys in this build. Use sk_test_… (guard: docs/launch/STRIPE_PLANS.md).");
}
export const STRIPE_LIVE_TEST = RAW_KEY.startsWith("sk_test_") || RAW_KEY.startsWith("rk_test_");
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

export const planByKey = (key) => CATALOG.plans.find((p) => p.key === key) ?? null;
export const addonByKey = (key) => CATALOG.addons.find((a) => a.key === key) ?? null;
export const oneTimeByKey = (key) => CATALOG.one_time.find((o) => o.key === key) ?? null;

// ---------- entitlements ----------
export function entitlementFor(user) {
  const sub = subscriptionOf(user.id);
  const plan = planByKey(sub?.plan_key || user.plan || "free") ?? planByKey("free");
  const extra = entitlementsOf(user.id);
  const addons = new Set([...(plan.limits.addons || []), ...extra.filter((e) => e.kind === "addon").map((e) => e.key)]);
  const oneTimes = extra.filter((e) => e.kind === "one_time").map((e) => e.key);
  return {
    plan_key: plan.key, plan_name: plan.name, subscription: sub ?? null,
    limits: plan.limits, addons: [...addons], one_times: oneTimes,
    can_publish: plan.limits.publish || oneTimes.includes("build") || oneTimes.includes("build_pro"),
    can_custom_domain: plan.limits.custom_domain || oneTimes.length > 0,
    can_multipage: plan.limits.multipage_export,
    can_edit_requests: plan.limits.edit_requests || oneTimes.length > 0,
  };
}
export function generationGate(user) {
  const ent = entitlementFor(user);
  const used = generationsThisMonth(user.id);
  const max = ent.limits.generations_per_month;
  return { ok: used < max, used, max, ent };
}
export function projectGate(user) {
  const ent = entitlementFor(user);
  const count = projectsOf(user.id).length;
  return { ok: count < ent.limits.projects, count, max: ent.limits.projects, ent };
}

// ---------- Stripe REST (test mode) ----------
async function stripe(pathname, params) {
  const body = new URLSearchParams();
  const flat = (obj, prefix = "") => {
    for (const [k, v] of Object.entries(obj)) {
      const key = prefix ? `${prefix}[${k}]` : k;
      if (v && typeof v === "object") flat(v, key); else if (v != null) body.append(key, String(v));
    }
  };
  flat(params);
  const r = await fetch(`https://api.stripe.com/v1/${pathname}`, {
    method: "POST", headers: { Authorization: `Bearer ${RAW_KEY}`, "Content-Type": "application/x-www-form-urlencoded" }, body,
  });
  const data = await r.json();
  if (!r.ok) throw new Error(`Stripe: ${data.error?.message || r.status}`);
  return data;
}

// ---------- checkout ----------
// kind: plan | addon | one_time
export async function createCheckout({ user, kind, key, baseUrl, projectId = null }) {
  const item = kind === "plan" ? planByKey(key) : kind === "addon" ? addonByKey(key) : oneTimeByKey(key);
  if (!item || (kind === "plan" && item.key === "free")) { const e = new Error("Unknown or non-purchasable item."); e.status = 400; throw e; }
  const co = insert("webhook_events", { kind: "checkout_intent", user_id: user.id, item_kind: kind, item_key: key, project_id: projectId, status: "created" });

  if (STRIPE_LIVE_TEST) {
    const recurring = item.interval ? { recurring: { interval: item.interval } } : {};
    const session = await stripe("checkout/sessions", {
      mode: item.interval ? "subscription" : "payment",
      success_url: `${baseUrl}/billing/success?ref=${co.id}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=1`,
      customer_email: user.email,
      client_reference_id: co.id,
      metadata: { user_id: user.id, item_kind: kind, item_key: key, project_id: projectId ?? "" },
      "line_items[0][quantity]": 1,
      "line_items[0][price_data]": undefined,
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][unit_amount]": item.price_cents,
      "line_items[0][price_data][product_data][name]": `SiteForge — ${item.name}`,
      ...(item.interval ? { "line_items[0][price_data][recurring][interval]": item.interval } : {}),
    });
    update("webhook_events", co.id, { stripe_session_id: session.id });
    return { url: session.url, mode: "stripe-test" };
  }
  // Built-in mock checkout (no Stripe key configured)
  const t = token(16);
  update("webhook_events", co.id, { mock_token: t });
  return { url: `/billing/mock-checkout?ref=${co.id}&t=${t}`, mode: "mock" };
}

export function mockCheckoutIntent(ref, t) {
  const co = get("webhook_events", ref);
  if (!co || !timingSafeEq(co.mock_token || "", t)) return null;
  const item = co.item_kind === "plan" ? planByKey(co.item_key) : co.item_kind === "addon" ? addonByKey(co.item_key) : oneTimeByKey(co.item_key);
  return { co, item };
}

// Grants after payment (mock confirm or Stripe webhook). Idempotent per ref.
export function grantPurchase(ref, meta = {}) {
  const co = get("webhook_events", ref);
  if (!co || co.status === "granted") return co;
  const userId = co.user_id;
  if (co.item_kind === "plan") {
    for (const s of where("subscriptions", (s) => s.user_id === userId && ["active", "trialing"].includes(s.status))) {
      update("subscriptions", s.id, { status: "replaced" });
    }
    insert("subscriptions", {
      user_id: userId, plan_key: co.item_key, status: "active",
      stripe_subscription_id: meta.subscription || null, stripe_customer_id: meta.customer || null,
      current_period_end: new Date(Date.now() + 32 * 86400000).toISOString(),
      mode: meta.mode || (STRIPE_LIVE_TEST ? "stripe-test" : "mock"),
    });
    update("users", userId, { plan: co.item_key });
  } else {
    insert("entitlements", { user_id: userId, kind: co.item_kind === "addon" ? "addon" : "one_time", key: co.item_key, active: true, source_ref: ref, mode: meta.mode || (STRIPE_LIVE_TEST ? "stripe-test" : "mock") });
  }
  insert("dev_inbox", {
    to: get("users", userId)?.email, subject: `Receipt — SiteForge ${co.item_key}`,
    body: `Thanks! Your ${co.item_kind} "${co.item_key}" is active. Ref ${ref}. ${STRIPE_LIVE_TEST ? "(Stripe TEST mode — no real charge)" : "(mock checkout — no charge)"}`,
  });
  audit(userId, "billing.granted", ref, { item: co.item_key, kind: co.item_kind });
  return update("webhook_events", co.id, { status: "granted", granted_at: nowIso() });
}

// ---------- Stripe webhook ----------
export function verifyStripeSignature(rawBody, sigHeader) {
  if (!WEBHOOK_SECRET) return { ok: false, reason: "STRIPE_WEBHOOK_SECRET not set" };
  const parts = Object.fromEntries(String(sigHeader || "").split(",").map((p) => p.split("=")));
  const signed = `${parts.t}.${rawBody}`;
  const expected = createHmac("sha256", WEBHOOK_SECRET).update(signed).digest("hex");
  const ok = Boolean(parts.v1) && timingSafeEq(parts.v1, expected);
  const fresh = Math.abs(Date.now() / 1000 - Number(parts.t)) < 300;
  return { ok: ok && fresh, reason: ok ? (fresh ? "ok" : "stale timestamp") : "bad signature" };
}
export function handleStripeEvent(event) {
  if (event.type === "checkout.session.completed") {
    const s = event.data.object;
    const ref = s.client_reference_id;
    if (ref) return grantPurchase(ref, { subscription: s.subscription, customer: s.customer, mode: "stripe-test" });
  }
  if (event.type === "customer.subscription.deleted") {
    const sub = find("subscriptions", (r) => r.stripe_subscription_id === event.data.object.id);
    if (sub) { update("subscriptions", sub.id, { status: "canceled" }); update("users", sub.user_id, { plan: "free" }); }
  }
  return null;
}
export { fmtMoney };
