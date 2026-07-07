// SiteForge SaaS — public pages: landing, templates, pricing, login, legal.
import { esc, fmtMoney } from "../lib/util.mjs";
import { page, MOTIF_SVG } from "./layout.mjs";
import { HERO_FAMILIES } from "../lib/engine-adapter.mjs";
import { CATALOG } from "../lib/billing.mjs";

const INDUSTRIES = ["roofing", "landscaping", "plumbing", "electrical", "hvac", "tree care", "concrete", "fencing", "painting", "pool service", "cleaning", "general contracting", "excavation", "solar", "pest control", "garage door", "other"];
export const industryOptions = (sel) => INDUSTRIES.map((i) => `<option value="${i}" ${i === sel ? "selected" : ""}>${i[0].toUpperCase() + i.slice(1)}</option>`).join("");
const STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
export const stateOptions = (sel) => STATES.map((s) => `<option ${s === sel ? "selected" : ""}>${s}</option>`).join("");

function tplPoster(family, i) {
  const hues = [["#22301F", "#C2571B"], ["#1E2733", "#B98A2F"], ["#2C2420", "#3E5C41"], ["#252525", "#A97E24"], ["#30231C", "#93400F"], ["#1F2B29", "#C2571B"]];
  const [bg, ac] = hues[i % hues.length];
  const shapes = [
    `<rect x="30" y="150" width="240" height="16" rx="4" fill="#FAF6EE" opacity=".9"/><rect x="30" y="178" width="170" height="16" rx="4" fill="#FAF6EE" opacity=".55"/><rect x="30" y="216" width="90" height="26" rx="13" fill="${ac}"/><circle cx="430" cy="120" r="85" fill="${ac}" opacity=".25"/><path d="M340 260 Q 430 140 520 250" stroke="${ac}" stroke-width="2" fill="none"/>`,
    `<rect x="30" y="40" width="230" height="220" rx="8" fill="${ac}" opacity=".3"/><rect x="290" y="60" width="220" height="12" rx="4" fill="#FAF6EE" opacity=".85"/><rect x="290" y="86" width="180" height="12" rx="4" fill="#FAF6EE" opacity=".5"/><rect x="290" y="120" width="200" height="1.5" fill="#FAF6EE" opacity=".3"/><rect x="290" y="140" width="150" height="10" rx="4" fill="#FAF6EE" opacity=".4"/>`,
    `<circle cx="180" cy="140" r="100" fill="none" stroke="${ac}" stroke-width="1.4" opacity=".7"/><circle cx="180" cy="140" r="65" fill="none" stroke="${ac}" stroke-width="1.2" opacity=".5"/><circle cx="215" cy="105" r="5" fill="${ac}"/><circle cx="150" cy="170" r="5" fill="${ac}"/><circle cx="240" cy="180" r="5" fill="${ac}"/><rect x="330" y="110" width="180" height="14" rx="4" fill="#FAF6EE" opacity=".9"/><rect x="330" y="136" width="120" height="12" rx="4" fill="#FAF6EE" opacity=".5"/>`,
    `<g>${[0, 1, 2, 3].map((c) => `<rect x="${40 + c * 120}" y="80" width="100" height="140" rx="8" fill="${ac}" opacity="${0.55 - c * 0.1}"/>`).join("")}</g><rect x="40" y="245" width="200" height="10" rx="4" fill="#FAF6EE" opacity=".6"/>`,
    `<rect x="60" y="50" width="300" height="10" rx="4" fill="#FAF6EE" opacity=".8"/><rect x="60" y="76" width="340" height="10" rx="4" fill="#FAF6EE" opacity=".6"/><rect x="60" y="102" width="260" height="10" rx="4" fill="#FAF6EE" opacity=".6"/><path d="M70 230 q 30 -35 60 0 t 60 0" stroke="${ac}" stroke-width="2.4" fill="none"/><circle cx="450" cy="160" r="70" fill="${ac}" opacity=".3"/>`,
    `<g>${Array.from({ length: 12 }, (_, c) => `<rect x="${35 + (c % 4) * 125}" y="${45 + Math.floor(c / 4) * 78}" width="110" height="64" rx="6" fill="${c === 5 ? ac : "#FAF6EE"}" opacity="${c === 5 ? ".9" : ".14"}"/>`).join("")}</g>`,
  ];
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300"><rect width="560" height="300" fill="${bg}"/>${shapes[i % shapes.length]}</svg>`)}`;
}

export function landing({ user, demos = [] }) {
  const tpls = HERO_FAMILIES.map((f, i) => {
    const demo = demos.find((d) => d.family === f.key);
    return `<article class="tpl-card">
      <img class="tpl-poster" src="${demo?.poster || tplPoster(f.key, i)}" alt="${esc(f.name)} template collection preview" loading="lazy" width="560" height="300">
      <div class="tpl-body">
        <h3>${esc(f.name)}</h3>
        <p>${esc(f.blurb)}</p>
        <div class="btn-row">
          ${demo ? `<a class="btn ghost sm" href="${demo.url}" target="_blank" rel="noopener">Live demo</a>` : ""}
          <a class="btn sm" href="/templates/${f.key}">Try with your business</a>
        </div>
      </div>
    </article>`;
  }).join("");

  const pricing = CATALOG.plans.map((p) => priceCard(p)).join("");

  return page({
    title: "Type your business. Get a premium website that's already graded.",
    desc: "SiteForge finds your real content, forges a one-of-one premium website with local SEO and AI-answer-engine optimization built in, grades it with a hard QC gate, and publishes it. No templates-in-a-trenchcoat, no credit treadmill.",
    path: "/", user,
    body: `
<section class="hero">
  ${MOTIF_SVG}
  <div class="wrap hero-inner">
    <div>
      <p class="eyebrow">Woodward SiteForge</p>
      <h1 class="kinetic">Websites forged from your <em>real business</em> — graded before you ever see them.</h1>
      <p class="sub">Give us a name or a URL. SiteForge discovers your logo, photos, services, and proof; forges a one-of-one site with a unique hero anatomy; runs a 14-point quality gate; and only then hands you the keys. Local SEO, schema, and AI-answer-engine (GEO) optimization ship standard.</p>
      <div class="btn-row" style="margin:1.6rem 0 1rem">
        <a class="btn ember" href="/new">Generate your first site</a>
        <a class="btn ghost" href="/templates">Browse the collections</a>
      </div>
      <p class="muted" style="font-size:.85rem">Free to forge and preview. Pay only to publish. Failed builds never count against you.</p>
    </div>
    <div class="forge-card">
      <h3 style="margin-top:0">Try it in 20 seconds</h3>
      <p style="color:#C9C1B0;font-size:.9rem">We'll forge a real preview around your business name — not a mockup with your name pasted on.</p>
      <form id="try-form">
        <input type="hidden" name="family" value="split-editorial-index">
        <div class="field"><label for="t-name">Business name</label><input id="t-name" name="name" type="text" required maxlength="60" placeholder="Summit Roofing"></div>
        <div class="grid-2">
          <div class="field"><label for="t-city">City</label><input id="t-city" name="city" type="text" required maxlength="40" placeholder="Plano"></div>
          <div class="field"><label for="t-state">State</label><select id="t-state" name="state">${stateOptions("TX")}</select></div>
        </div>
        <div class="field"><label for="t-ind">Industry</label><select id="t-ind" name="category">${industryOptions("roofing")}</select></div>
        <button class="btn ember" type="submit" style="width:100%">Forge my free preview</button>
      </form>
      <div id="try-result" style="margin-top: .9rem"></div>
    </div>
  </div>
</section>

<section class="section alt" id="how">
  <div class="wrap">
    <div class="section-head"><div><p class="eyebrow">How it works</p><h2>Watch it forge.</h2></div>
    <p>Every stage streams live to your screen. Nothing is hidden, including the grade.</p></div>
    <div class="how-grid">
      <div class="how"><h3>Discover</h3><p>Firecrawl reads your current site and Google Business Profile: logo, colors, photos, services, reviews, contact, tech stack, SEO gaps.</p></div>
      <div class="how"><h3>Approve</h3><p>You see everything we found and approve, remove, or edit it. Nothing renders that you didn't sanction — and nothing is ever invented.</p></div>
      <div class="how"><h3>Forge</h3><p>A deterministic engine composes a one-of-one site: unique hero anatomy, layered visuals, your voice. Same inputs, same site — no slot-machine rerolls.</p></div>
      <div class="how"><h3>Grade</h3><p>A hard QC gate checks hero depth, anti-template uniqueness, copy bans, schema, mobile at 320px, and accessibility. You see the report card.</p></div>
      <div class="how"><h3>Publish</h3><p>Grade A unlocks publish. Your domain, SSL, sitemap, robots, llms.txt — live. Add the AI Voice Receptionist when you're ready.</p></div>
    </div>
  </div>
</section>

<section class="section" id="templates">
  <div class="wrap">
    <div class="section-head"><div><p class="eyebrow">Collections</p><h2>Six hero anatomies. Zero clones.</h2></div>
    <p>These aren't templates you squeeze into — they're layout systems the forge composes around <em>your</em> content. Two businesses never get the same site; the QC gate enforces it.</p></div>
    <div class="tpl-grid">${tpls}</div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section-head"><div><p class="eyebrow">The difference</p><h2>Before the forge / after the forge</h2></div></div>
    <div class="grid-2">
      <div class="panel"><h3 style="color:var(--danger)">The site you have</h3>
        <ul class="qc-list">
          <li class="fail"><span class="mark">✗</span><span class="detail">Stock template shared with 40,000 other businesses</span></li>
          <li class="fail"><span class="mark">✗</span><span class="detail">No schema — invisible to Google's local pack and AI answers</span></li>
          <li class="fail"><span class="mark">✗</span><span class="detail">Phone number buried, no quote path, broken on phones</span></li>
          <li class="fail"><span class="mark">✗</span><span class="detail">"We pride ourselves on quality" — copy written by nobody, for nobody</span></li>
        </ul>
      </div>
      <div class="panel"><h3 style="color:var(--ok)">The site we forge</h3>
        <ul class="qc-list">
          <li class="pass"><span class="mark">✓</span><span class="detail">One-of-one layout — uniqueness enforced by a batch-level QC gate</span></li>
          <li class="pass"><span class="mark">✓</span><span class="detail">LocalBusiness, Service, FAQ + speakable schema, llms.txt for AI engines</span></li>
          <li class="pass"><span class="mark">✓</span><span class="detail">Call, quote, and booking paths above the fold, graded at 320px</span></li>
          <li class="pass"><span class="mark">✓</span><span class="detail">Copy in your voice from your real story — fabricated claims are a build failure</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" id="pricing">
  <div class="wrap">
    <div class="section-head"><div><p class="eyebrow">Pricing</p><h2>Flat prices. Never credits.</h2></div>
    <p>Vibe-coder tools charge you per attempt and profit from their own failures. SiteForge's QC gate means a failed forge is our problem, not your bill.</p></div>
    <div class="price-grid">${pricing}</div>
    <p class="muted" style="margin-top:1.4rem;font-size:.9rem">Want it done for you? <a href="/pricing#dfy">Done-For-You builds</a> from ${fmtMoney(CATALOG.one_time[0].price_cents)} — our operators run the forge until it grades A.</p>
  </div>
</section>

<section class="section alt" id="faq">
  <div class="wrap" style="max-width:860px">
    <p class="eyebrow">FAQ</p>
    <h2>Fair questions.</h2>
    ${faq("Is this another AI website toy?", "No. SiteForge is a production engine with a hard quality gate: hero-layer depth, anti-template signatures, copy ban-lists, schema, 320px mobile integrity, accessibility. If a build doesn't clear the gate, it doesn't ship — and it doesn't count against your quota.")}
    ${faq("Where does my content come from?", "From you and your real footprint: your current website, your Google Business Profile, photos and reviews you approve. Every fact on the site traces to a source. If we can't source it, we don't say it — the engine refuses to invent awards, years, or testimonials.")}
    ${faq("What if I don't have a website yet?", "Give us your business name, city, and trade. The forge builds from your intake and anything public we can verify, and you can upload photos and your logo in the import step.")}
    ${faq("What's GEO / AEO?", "Generative-engine optimization: structured answers, speakable schema, llms.txt, and FAQ surfaces so AI assistants (ChatGPT, Gemini, Claude) can cite your business, not just Google.")}
    ${faq("Can it answer my phone too?", "Yes — the AI Voice Receptionist add-on gives your business a trained voice agent that answers calls, books jobs, and texts you transcripts. It wires straight into your site's call CTAs.")}
    ${faq("Do you lock me in?", "No. Pro and Agency plans include full static export of your site. Your domain stays yours.")}
  </div>
</section>`,
  });
}

const faq = (q, a) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`;

export function priceCard(p, { compact = false } = {}) {
  return `<div class="price-card ${p.highlight ? "highlight" : ""}">
    <div><h3 style="margin:0">${esc(p.name)}</h3><p class="muted" style="font-size:.88rem;margin:.2rem 0 0">${esc(p.tagline || "")}</p></div>
    <div class="price">${p.price_cents === 0 ? "Free" : fmtMoney(p.price_cents)}${p.interval ? `<small>/${p.interval}</small>` : ""}</div>
    <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    <form method="post" action="/api/checkout"><input type="hidden" name="kind" value="plan"><input type="hidden" name="key" value="${p.key}">
      <button class="btn ${p.highlight ? "ember" : ""}" style="width:100%" type="submit" ${p.key === "free" ? "" : ""}>${p.price_cents === 0 ? "Start free" : `Choose ${esc(p.name)}`}</button>
    </form>
  </div>`;
}

export function pricingPage({ user }) {
  const addons = CATALOG.addons.map((a) => `<div class="panel">
    <div style="display:flex;justify-content:space-between;gap:1rem;align-items:baseline"><h3>${esc(a.name)}</h3><b>${fmtMoney(a.price_cents)}<small class="muted">/${a.interval}</small></b></div>
    <p style="font-size:.93rem">${esc(a.description)}</p>
    <form method="post" action="/api/checkout"><input type="hidden" name="kind" value="addon"><input type="hidden" name="key" value="${a.key}">
    <button class="btn ghost sm" type="submit">Add to plan</button></form>
  </div>`).join("");
  const dfy = CATALOG.one_time.map((o) => `<div class="panel">
    <div style="display:flex;justify-content:space-between;gap:1rem;align-items:baseline"><h3>${esc(o.name)}</h3><b>${fmtMoney(o.price_cents)}</b></div>
    <p style="font-size:.93rem">${esc(o.description)}</p>
    <form method="post" action="/api/checkout"><input type="hidden" name="kind" value="one_time"><input type="hidden" name="key" value="${o.key}">
    <button class="btn sm" type="submit">Book it</button></form>
  </div>`).join("");
  return page({
    title: "Pricing", desc: "Flat prices, hard quality gate. Free to forge and preview; pay to publish.", path: "/pricing", user,
    body: `<section class="section"><div class="wrap">
      <p class="eyebrow">Pricing</p><h1 style="font-size:clamp(2rem,4.5vw,3.4rem)">Flat prices. Never credits.</h1>
      <p style="max-width:56ch">Forge and preview free. Publishing, custom domains, edits, and the upgrade facets are plan features. Every price below runs in <b>Stripe test mode</b> until launch day — you'll never be charged by accident.</p>
      <div class="price-grid" style="margin-top:2rem">${CATALOG.plans.map((p) => priceCard(p)).join("")}</div>
      <h2 id="upgrades" style="margin-top:3.5rem">Upgradable facets</h2>
      <p>Every facet of local dominance, attachable to any paid plan.</p>
      <div class="grid-3">${addons}</div>
      <h2 id="dfy" style="margin-top:3.5rem">Done-for-you</h2>
      <p>Our operators run discovery, rescue, and the forge for you until it grades A.</p>
      <div class="grid-2">${dfy}</div>
    </div></section>`,
  });
}

export function templatesPage({ user, demos = [] }) {
  const cards = HERO_FAMILIES.map((f, i) => {
    const demo = demos.find((d) => d.family === f.key);
    return `<article class="tpl-card" id="${f.key}">
      <img class="tpl-poster" src="${demo?.poster || tplPoster(f.key, i)}" alt="${esc(f.name)} collection" loading="lazy" width="560" height="300">
      <div class="tpl-body"><h3>${esc(f.name)}</h3><p>${esc(f.blurb)}</p>
      <div class="btn-row">${demo ? `<a class="btn ghost sm" href="${demo.url}" target="_blank" rel="noopener">Live demo</a>` : ""}<a class="btn sm ember" href="/templates/${f.key}">Try it with your business</a></div></div>
    </article>`;
  }).join("");
  return page({
    title: "Template collections", desc: "Six hero anatomies the forge composes around your real content. Try any of them with your business name — free.", path: "/templates", user,
    body: `<section class="section"><div class="wrap">
      <p class="eyebrow">Collections</p>
      <h1 style="font-size:clamp(2rem,4.5vw,3.4rem)">Not templates. Layout systems.</h1>
      <p style="max-width:60ch">Each collection is a different hero anatomy and section grammar. The forge seeds every build from <em>your</em> name and trade, so two businesses in the same collection still get structurally different sites — enforced by the anti-template QC gate.</p>
      <div class="tpl-grid" style="margin-top:2rem">${cards}</div>
    </div></section>`,
  });
}

export function templateTryPage({ user, family }) {
  const f = HERO_FAMILIES.find((x) => x.key === family);
  return page({
    title: `Try ${f.name}`, desc: `Forge a free ${f.name} preview around your business.`, path: `/templates/${family}`, user,
    body: `<section class="section"><div class="wrap" style="max-width:720px">
      <p class="eyebrow">Try before you buy</p>
      <h1 style="font-size:clamp(2rem,4vw,3rem)">${esc(f.name)}, forged for <em>your</em> business.</h1>
      <p>${esc(f.blurb)} Enter your details — the engine will forge a real one-of-one preview (not a name-swap mockup) in about half a minute.</p>
      <div class="panel" style="margin-top:1.5rem">
        <form id="try-form">
          <input type="hidden" name="family" value="${f.key}">
          <div class="field"><label for="t-name">Business name</label><input id="t-name" name="name" required maxlength="60" type="text" placeholder="Ironvale Excavation"></div>
          <div class="grid-2">
            <div class="field"><label for="t-city">City</label><input id="t-city" name="city" required maxlength="40" type="text" placeholder="Boise"></div>
            <div class="field"><label for="t-state">State</label><select id="t-state" name="state">${stateOptions("ID")}</select></div>
          </div>
          <div class="field"><label for="t-cat">Industry</label><select id="t-cat" name="category">${industryOptions("excavation")}</select></div>
          <button class="btn ember" type="submit">Forge my free preview</button>
          <p class="hint" style="margin-top:.6rem">Previews are watermarked, noindexed, and expire in 24 hours. Sign up to keep yours.</p>
        </form>
        <div id="try-result" style="margin-top:.9rem"></div>
      </div>
    </div></section>`,
  });
}

export function loginPage({ sent = false, error = null, googleEnabled = false, csrf = "" }) {
  return page({
    title: "Sign in", desc: "Sign in to SiteForge with a magic link or Google.", path: "/login", noindex: true,
    body: `<section class="section"><div class="wrap" style="max-width:460px">
      <p class="eyebrow">Sign in</p>
      <h1 style="font-size:2.4rem">Back to the forge.</h1>
      ${error ? `<div class="notice bad">${esc(error)}</div>` : ""}
      ${sent ? `<div class="notice ok">Check your email — your sign-in link is on the way. (No email service configured? It's waiting in the <a href="/dev/inbox">dev inbox</a>.)</div>` : ""}
      <div class="panel">
        <form method="post" action="/auth/magic-link">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@business.com"></div>
          ${process.env.SITEFORGE_BETA_CODE ? `<div class="field"><label for="beta">Beta access code</label><input id="beta" name="beta_code" type="text" required placeholder="FORGE-…"><p class="hint">Private beta — email hello@woodwardsoftware.com for a code.</p></div>
          <button class="btn ember" style="width:100%" type="submit">Enter the forge</button>` : `<button class="btn ember" style="width:100%" type="submit">Email me a magic link</button>`}
        </form>
        <hr class="rule" style="margin:1.3rem 0">
        ${googleEnabled
          ? `<a class="btn ghost" style="width:100%" href="/auth/google">Continue with Google</a>`
          : `<button class="btn ghost" style="width:100%" disabled title="Set GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET to enable">Continue with Google (not configured)</button>`}
        <p class="hint" style="margin-top:.9rem">New here? Same form — your account is created on first sign-in.</p>
      </div>
    </div></section>`,
  });
}

export function legalPage({ user, kind }) {
  const bodies = {
    privacy: ["Privacy Policy", `<p>SiteForge collects the minimum needed to run the service: your email, the business details you provide, and content discovered from sources you point us at (your website, your Google Business Profile). We use it to build and host your sites. We don't sell your data, and we don't run ad trackers on this product.</p><p>Discovered content stays attached to your project and is deleted when you delete the project. Payment details are handled by Stripe and never touch our servers.</p><p class="muted">Placeholder for counsel review before public launch. Contact: hello@woodwardsoftware.com</p>`],
    terms: ["Terms of Service", `<p>SiteForge forges websites from content you provide or approve. You're responsible for having the rights to that content and for the accuracy of claims about your business. We enforce a no-fabrication policy: the engine will not invent reviews, awards, or credentials — please don't ask it to.</p><p>Paid plans renew until canceled; you can export your site on plans that include export. Failed builds never consume your quota. Service is provided as-is during the launch period.</p><p class="muted">Placeholder for counsel review before public launch.</p>`],
    accessibility: ["Accessibility", `<p>Every forged site ships with skip links, visible focus, reduced-motion support, alt text, and WCAG 2.2 AA contrast checks in the QC gate. This product site holds itself to the same gate. Found an issue? <a href="/support">Tell us</a> — accessibility reports jump the support queue.</p>`],
  };
  const [title, html] = bodies[kind];
  return page({ title, desc: `${title} for SiteForge.`, path: `/legal/${kind}`, user, body: `<section class="section"><div class="wrap" style="max-width:760px"><p class="eyebrow">Legal</p><h1>${title}</h1>${html}</div></section>` });
}

export function supportPage({ user }) {
  return page({
    title: "Support", desc: "Get help with SiteForge.", path: "/support", user,
    body: `<section class="section"><div class="wrap" style="max-width:680px">
      <p class="eyebrow">Support</p><h1>We answer like a small shop.</h1>
      <p>Email <a href="mailto:hello@woodwardsoftware.com">hello@woodwardsoftware.com</a> and a human replies — usually same day, always within one business day. Care+ and Agency plans get a priority lane, and edit requests go straight from your <a href="/dashboard">dashboard</a>.</p>
      <div class="panel"><h3>Before you write in</h3><ul class="qc-list">
        <li class="pass"><span class="mark">→</span><span class="detail">Build stuck or graded below A? Open the project's QC tab — every issue lists its fix.</span></li>
        <li class="pass"><span class="mark">→</span><span class="detail">Sign-in link missing? Check spam, then request a fresh one; links expire after 15 minutes.</span></li>
        <li class="pass"><span class="mark">→</span><span class="detail">Domain not connecting? DNS instructions are on your project's Publish tab.</span></li>
      </ul></div>
    </div></section>`,
  });
}

export function devInboxPage({ user, messages }) {
  const rows = messages.map((m) => `<tr><td>${esc(m.created_at?.slice(0, 19).replace("T", " ") || "")}</td><td>${esc(m.to || "")}</td><td>${esc(m.subject || "")}</td><td style="font-family:var(--font-mono);font-size:.8rem">${m.link ? `<a href="${esc(m.link)}">${esc(m.link)}</a>` : esc((m.body || "").slice(0, 140))}</td></tr>`).join("");
  return page({
    title: "Dev inbox", desc: "Local email inbox for development.", user, noindex: true,
    body: `<section class="section"><div class="wrap">
      <p class="eyebrow">Development</p><h1>Dev inbox</h1>
      <p class="muted">No email provider is configured (set <code>RESEND_API_KEY</code> for real delivery), so outbound mail lands here. This page only exists in dev mode.</p>
      <div class="panel flush"><table class="data"><thead><tr><th>When</th><th>To</th><th>Subject</th><th>Content</th></tr></thead><tbody>${rows || '<tr><td colspan="4" class="muted" style="padding:2rem">Nothing sent yet.</td></tr>'}</tbody></table></div>
    </div></section>`,
  });
}
