// SiteForge SaaS — authenticated app pages.
import { esc, fmtMoney, fmtDate } from "../lib/util.mjs";
import { page } from "./layout.mjs";
import { HERO_FAMILIES, SECTION_TOGGLES, GOALS } from "../lib/engine-adapter.mjs";
import { industryOptions, stateOptions, priceCard } from "./pages-public.mjs";
import { CATALOG } from "../lib/billing.mjs";
import { mediaEnginePanel, logoCandidateBar, scorecardPanel, sourceChip } from "./v7-partials.mjs";

const gradeBadge = (g) => `<span class="grade ${g || "unknown"}" title="QC grade">${g || "–"}</span>`;
const statusChip = (s) => {
  const map = { draft: ["chip", "Draft"], discovery_ready: ["chip warn", "Review import"], generating: ["chip warn", "Forging…"], preview_ready: ["chip ok", "Preview ready"], published: ["chip ok", "Published"] };
  const [cls, label] = map[s] || ["chip", s || "New"];
  return `<span class="${cls}">${label}</span>`;
};

export function dashboard({ user, projects, ent, gens }) {
  const rows = projects.map((p) => `
    <tr>
      <td><a href="/p/${p.id}"><b>${esc(p.name)}</b></a><br><small class="muted">${esc(p.city || "")}${p.city ? ", " : ""}${esc(p.state || "")} · ${esc(p.industry || "")}</small></td>
      <td>${statusChip(p.status)}</td>
      <td>${p.last_grade ? gradeBadge(p.last_grade) : '<span class="muted">not forged</span>'}</td>
      <td>${p.deploy_url ? `<a href="${esc(p.deploy_url)}" target="_blank" rel="noopener">${esc(p.deploy_url.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a>` : '<span class="muted">—</span>'}</td>
      <td><a class="btn ghost sm" href="/p/${p.id}">Open</a></td>
    </tr>`).join("");
  return page({
    title: "Dashboard", desc: "Your forged sites.", path: "/dashboard", user, noindex: true,
    body: `<section class="section" style="padding-top:2rem"><div class="wrap">
      <div class="app-head">
        <div><p class="eyebrow">Dashboard</p><h1 style="font-size:2.2rem;margin:0">${esc(user.name || "Your")} projects</h1></div>
        <a class="btn ember" href="/new">+ New site</a>
      </div>
      <div class="stat-row" style="margin-bottom:1.8rem">
        <div class="stat"><b>${projects.length}</b><span>projects</span></div>
        <div class="stat"><b>${gens.used}/${gens.max}</b><span>forge runs this month</span></div>
        <div class="stat"><b>${esc(ent.plan_name)}</b><span>plan${ent.subscription?.mode === "mock" ? " (mock)" : ent.subscription?.mode === "stripe-test" ? " (test)" : ""}</span></div>
        <div class="stat"><b>${projects.filter((p) => p.status === "published").length}</b><span>published</span></div>
      </div>
      ${projects.length ? `<div class="panel flush"><table class="data">
        <thead><tr><th>Project</th><th>Status</th><th>Grade</th><th>Live URL</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`
      : `<div class="empty"><h3>No sites yet — the forge is cold.</h3><p>Start with your business name or your current website URL. Discovery takes about a minute.</p><a class="btn ember" href="/new">Forge your first site</a></div>`}
      <p class="muted" style="margin-top:1.4rem;font-size:.88rem">Need a human? <a href="/support">Support</a> · Billing lives in <a href="/account">Account</a>.</p>
    </div></section>`,
  });
}

export function wizardPage({ user, csrf }) {
  const styleCards = HERO_FAMILIES.map((f, i) => `
    <label class="asset" style="cursor:pointer">
      <input type="radio" name="hero_family" value="${f.key}" ${i === 0 ? "" : ""} style="accent-color:var(--ember)">
      <span class="kind">${esc(f.name)}</span><span style="font-size:.83rem;color:var(--ink-2)">${esc(f.blurb)}</span>
    </label>`).join("");
  const goalOpts = GOALS.map((g) => `<label class="chip" style="cursor:pointer;padding:.5rem 1rem"><input type="radio" name="goal" value="${g}" ${g === "calls" ? "checked" : ""} style="accent-color:var(--ember);margin-right:.4rem">${g[0].toUpperCase() + g.slice(1)}</label>`).join(" ");
  return page({
    title: "New site", desc: "Start a new SiteForge build.", path: "/new", user, noindex: true,
    body: `<section class="section" style="padding-top:2rem"><div class="wrap" style="max-width:760px">
      <p class="eyebrow">New site</p><h1 style="font-size:2.2rem">Tell the forge who you are.</h1>
      <div class="steps"><span>1 · Business</span><span>2 · Sources</span><span>3 · Style & goal</span></div>
      <form id="wizard" method="post" action="/api/projects">
        <input type="hidden" name="_csrf" value="${esc(csrf)}">
        <div class="wiz-step panel">
          <div class="field"><label for="w-name">Business name</label><input id="w-name" name="business_name" type="text" required maxlength="80" placeholder="Summit Roofing"></div>
          <div class="grid-2">
            <div class="field"><label for="w-city">City</label><input id="w-city" name="city" type="text" required maxlength="60" placeholder="Plano"></div>
            <div class="field"><label for="w-state">State</label><select id="w-state" name="state">${stateOptions("TX")}</select></div>
          </div>
          <div class="grid-2">
            <div class="field"><label for="w-ind">Industry</label><select id="w-ind" name="industry">${industryOptions("roofing")}</select></div>
            <div class="field"><label for="w-phone">Phone <span class="muted" style="text-transform:none">(optional)</span></label><input id="w-phone" name="phone" type="tel" maxlength="20" placeholder="(214) 555-0148"></div>
          </div>
          <div class="btn-row" style="justify-content:end"><button class="btn" type="button" data-next>Next: sources →</button></div>
        </div>
        <div class="wiz-step panel" hidden>
          <div class="field"><label for="w-site">Current website URL <span class="muted" style="text-transform:none">(optional — we'll mine it)</span></label><input id="w-site" name="website" type="url" maxlength="200" placeholder="https://summitroofingtx.com"></div>
          <div class="field"><label for="w-gbp">Google Business Profile URL <span class="muted" style="text-transform:none">(optional)</span></label><input id="w-gbp" name="gbp_url" type="url" maxlength="300" placeholder="https://maps.google.com/…"><p class="hint">We pull hours, reviews, photos, and your map pin from here — with provenance attached.</p></div>
          <div class="field"><label for="w-services">Services <span class="muted" style="text-transform:none">(comma-separated, optional)</span></label><input id="w-services" name="services" type="text" maxlength="400" placeholder="Roof replacement, storm repair, gutters"></div>
          <div class="btn-row" style="justify-content:space-between"><button class="btn ghost" type="button" data-back>← Back</button><button class="btn" type="button" data-next>Next: style →</button></div>
        </div>
        <div class="wiz-step panel" hidden>
          <div class="field"><label>Build type</label>
            <label class="chip" style="cursor:pointer;padding:.5rem 1rem;margin-right:.5rem"><input type="radio" name="build_type" value="single_page_cinematic" checked style="accent-color:var(--ember);margin-right:.4rem">Single-page cinematic</label>
            <label class="chip" style="cursor:pointer;padding:.5rem 1rem"><input type="radio" name="build_type" value="premier_multi_page" style="accent-color:var(--ember);margin-right:.4rem">Premier multi-page</label>
            <p class="hint">Single-page: the full cinematic scroll (hero → proof → process → map → FAQ). Premier: a real 5–8 page authority hub — About, Services with per-service pages, Process, Service areas, FAQ, Contact — each with its own head, breadcrumbs, and cross-links.</p>
          </div>
          <div class="field"><label>Primary goal</label><div class="btn-row">${goalOpts}</div></div>
          <div class="field"><label>Style direction <span class="muted" style="text-transform:none">(optional — leave blank and the forge picks by trade)</span></label>
            <div class="asset-grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
              <label class="asset" style="cursor:pointer"><input type="radio" name="hero_family" value="" checked style="accent-color:var(--ember)"><span class="kind">Forge's choice</span><span style="font-size:.83rem;color:var(--ink-2)">Deterministic pick from your name + trade. Recommended.</span></label>
              ${styleCards}
            </div>
          </div>
          <div class="btn-row" style="justify-content:space-between"><button class="btn ghost" type="button" data-back>← Back</button><button class="btn ember" type="submit">Create project & find my business</button></div>
        </div>
      </form>
    </div></section>`,
  });
}

export function projectShell({ user, project, tab, inner, notice = "" }) {
  const tabs = [["", "Overview"], ["discovery", "Import"], ["build", "Forge"], ["preview", "Preview & QC"], ["publish", "Publish"]];
  return page({
    title: project.name, desc: `Project ${project.name}`, user, noindex: true,
    body: `<section class="section" style="padding-top:2rem"><div class="wrap">
      <div class="app-head">
        <div><p class="eyebrow">Project</p><h1 style="font-size:2rem;margin:0">${esc(project.name)} ${statusChip(project.status)}</h1>
        <small class="muted">${esc(project.city || "")}${project.city ? ", " : ""}${esc(project.state || "")} · ${esc(project.industry || "")}${project.hero_family ? ` · ${esc(project.hero_family)}` : ""}</small></div>
        <div class="btn-row">${project.last_grade ? gradeBadge(project.last_grade) : ""}</div>
      </div>
      <div class="tabs">${tabs.map(([t, label]) => `<a href="/p/${project.id}${t ? "/" + t : ""}" class="${t === tab ? "active" : ""}">${label}</a>`).join("")}</div>
      ${notice}
      ${inner}
    </div></section>`,
  });
}

export function projectOverview({ user, project, profile, gens, edits, csrf }) {
  const genRows = gens.map((g) => `<tr>
    <td>v${g.version}</td><td>${esc(g.hero_family || "—")}</td><td>${esc(g.build_type || "")}</td>
    <td>${g.qc_grade ? gradeBadge(g.qc_grade) : esc(g.status)}</td>
    <td>${g.status === "done" ? `<a href="/preview/${project.id}/${g.version}/" target="_blank" rel="noopener">raw</a> · <a href="/p/${project.id}/preview?v=${g.version}">inspect</a>` : esc(g.status)}</td>
    <td class="muted">${fmtDate(g.created_at)}</td></tr>`).join("");
  const editRows = edits.map((e) => `<tr><td>${fmtDate(e.created_at)}</td><td>${esc(e.message)}</td><td><span class="chip ${e.status === "done" ? "ok" : "warn"}">${esc(e.status)}</span></td></tr>`).join("");
  return projectShell({
    user, project, tab: "",
    inner: `
    <div class="grid-2">
      <div class="panel"><h3>Business</h3>
        <table class="data"><tbody>
          <tr><td class="muted">Name</td><td>${esc(profile.business_name)}</td></tr>
          <tr><td class="muted">Location</td><td>${esc(profile.city)}, ${esc(profile.state)}</td></tr>
          <tr><td class="muted">Industry</td><td>${esc(profile.industry)}</td></tr>
          <tr><td class="muted">Website</td><td>${profile.website ? `<a href="${esc(profile.website)}" target="_blank" rel="noopener">${esc(profile.website)}</a>` : "—"}</td></tr>
          <tr><td class="muted">GBP</td><td>${profile.gbp_url ? `<a href="${esc(profile.gbp_url)}" target="_blank" rel="noopener">profile</a>` : "—"}</td></tr>
          <tr><td class="muted">Goal</td><td>${esc(project.goal || "calls")}</td></tr>
        </tbody></table>
      </div>
      <div class="panel"><h3>Request an edit</h3>
        <p style="font-size:.92rem">On Care+ and Agency, our operators handle these for you. Describe the change; we'll confirm by email.</p>
        <form method="post" action="/api/projects/${project.id}/edit-requests">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <div class="field"><textarea name="message" rows="3" required maxlength="2000" placeholder="Swap the hero photo for the crew shot, and add our Saturday hours."></textarea></div>
          <button class="btn sm" type="submit">Send edit request</button>
        </form>
        ${editRows ? `<table class="data" style="margin-top:1rem"><thead><tr><th>When</th><th>Request</th><th>Status</th></tr></thead><tbody>${editRows}</tbody></table>` : ""}
      </div>
    </div>
    <div class="panel" style="margin-top:1.2rem"><h3>Forge history</h3>
      ${genRows ? `<table class="data"><thead><tr><th>Version</th><th>Hero</th><th>Type</th><th>Grade</th><th>Preview</th><th>When</th></tr></thead><tbody>${genRows}</tbody></table>`
      : `<div class="empty"><h3>Nothing forged yet.</h3><p>Import your content, then run the forge.</p><a class="btn ember" href="/p/${project.id}/discovery">Go to Import</a></div>`}
    </div>`,
  });
}

export function projectDiscovery({ user, project, profile, assets, csrf, jobId = null }) {
  const d = project.discovery;
  const foundBar = d ? `<div class="stat-row" style="margin-bottom:1.4rem">
      <div class="stat"><b>${d.logo_found ? "✓" : "–"}</b><span>logo</span></div>
      <div class="stat"><b>${d.colors_found}</b><span>brand colors</span></div>
      <div class="stat"><b>${d.photos_found}</b><span>photos</span></div>
      <div class="stat"><b>${d.services_found}</b><span>services</span></div>
      <div class="stat"><b>${d.socials_found}</b><span>social links</span></div>
      <div class="stat"><b>${d.map_found ? "✓" : "–"}</b><span>map pin</span></div>
    </div>
    ${d.seo_gaps?.length ? `<div class="notice warn"><b>Gaps we found on your current site:</b> ${d.seo_gaps.map(esc).join(" · ")} — the forge fixes all of these.</div>` : ""}` : "";
  const grouped = {};
  for (const a of assets) (grouped[a.kind] ??= []).push(a);
  const order = ["logo", "color", "photo", "service", "review", "contact", "social", "citation", "map"];
  const sections = order.filter((k) => grouped[k]?.length).map((k) => `
    <h3 style="margin-top:1.6rem;text-transform:capitalize">${k === "citation" ? "Citations & profiles" : k + "s"}</h3>
    <div class="asset-grid">${grouped[k].map((a) => assetCard(a)).join("")}</div>`).join("");
  return projectShell({
    user, project, tab: "discovery",
    inner: `
    <div class="grid-2" style="align-items:start">
      <div>
        <h2 style="font-size:1.5rem">Find my business</h2>
        <p style="font-size:.95rem">Discovery mines your current site${project.gbp_url ? " and Google Business Profile" : ""} for everything worth keeping: logo, colors, photos, services, proof. You approve every piece before it renders.</p>
        <form method="post" action="/api/projects/${project.id}/discover">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <button class="btn ember" type="submit">${d ? "Re-run discovery" : "Find my business"}</button>
          ${!process.env.FIRECRAWL_API_KEY ? `<p class="hint" style="margin-top:.5rem">Firecrawl key not configured — discovery runs in manual mode (add assets below). Set <code>FIRECRAWL_API_KEY</code> for full auto-import.</p>` : ""}
        </form>
      </div>
      <div class="panel"><h3>Add an asset manually</h3>
        <form method="post" action="/api/projects/${project.id}/assets">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <div class="grid-2">
            <div class="field"><label>Kind</label><select name="kind"><option>photo</option><option>logo</option><option>service</option><option>review</option><option>color</option><option>social</option></select></div>
            <div class="field"><label>Label / text</label><input name="label" type="text" maxlength="200" placeholder="Crew photo, spring 2026"></div>
          </div>
          <div class="field"><label>URL (for photos/logos/socials)</label><input name="url" type="url" maxlength="400" placeholder="https://…"></div>
          <button class="btn sm" type="submit">Add asset</button>
        </form>
      </div>
    </div>
    ${mediaEnginePanel({ project, profile: profile || {}, csrf })}
    ${logoCandidateBar(assets, project, csrf)}
    ${foundBar}
    ${sections || `<div class="empty" style="margin-top:1.5rem"><h3>Nothing imported yet.</h3><p>Run discovery, import your Google profile, or drop assets above — then head to the Forge tab.</p></div>`}
    ${assets.length ? `<div class="btn-row" style="margin-top:1.8rem"><a class="btn ember" href="/p/${project.id}/build">Continue to Forge →</a><span class="muted" style="font-size:.87rem">Unchecked assets stay in your library but won't render.</span></div>` : ""}`,
  });
}

function assetCard(a) {
  const body =
    a.kind === "photo" || a.kind === "logo" ? `<img src="${esc(a.url)}" alt="${esc(a.label || a.kind)}" loading="lazy">` :
    a.kind === "color" ? `<div class="swatch" style="background:${esc((a.meta?.value?.hex || a.meta?.value || a.label || "#ccc"))}"></div>` : "";
  return `<div class="asset ${a.approved ? "" : "off"}">
    <span class="kind">${esc(a.kind)} ${sourceChip(a.origin === "upload" ? "upload" : a.origin === "ai-candidate" ? "ai" : a.source)}</span>
    ${body}
    <span>${esc(a.label || a.url || "")}</span>
    <label style="display:flex;gap:.4rem;align-items:center;text-transform:none;letter-spacing:0;font-size:.82rem;margin:0">
      <input type="checkbox" data-asset-toggle="${a.id}" ${a.approved ? "checked" : ""} style="accent-color:var(--ember)"> use this
    </label>
  </div>`;
}

export function projectBuild({ user, project, gens, csrf, jobId = null, gate }) {
  const heroOpts = [`<option value="">Forge's choice (rotates each version)</option>`]
    .concat(HERO_FAMILIES.map((f) => `<option value="${f.key}" ${project.hero_family === f.key ? "selected" : ""}>${f.name}</option>`)).join("");
  const sectionBoxes = SECTION_TOGGLES.map((s) => `<label class="chip" style="cursor:pointer"><input type="checkbox" name="sections_off" value="${s.key}" style="accent-color:var(--ember);margin-right:.35rem">skip ${s.label}</label>`).join(" ");
  const last = gens[0];
  return projectShell({
    user, project, tab: "build",
    inner: `
    ${jobId ? `<div class="panel" style="margin-bottom:1.4rem"><h3>Forging now</h3>
      <ul id="forge-timeline" class="timeline" data-job="${jobId}" data-redirect="/p/${project.id}/preview"></ul>
      <div id="forge-result" style="margin-top:.8rem"><span class="spinner"></span> <span class="muted">Streaming live from the forge…</span></div></div>` : ""}
    <div class="grid-2" style="align-items:start">
      <div class="panel">
        <h3>Describe what you want</h3>
        <form method="post" action="/api/projects/${project.id}/generate">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <div class="field"><textarea name="prompt" rows="4" maxlength="4000" placeholder="Family-run since 2008. We want storm-repair front and center, warm but no-nonsense tone, and the crew photo in the hero.">${esc(last?.prompt || "")}</textarea>
          <p class="hint">Facts you state here become sourced content. The engine won't invent anything you don't give it.</p></div>
          <div class="grid-2">
            <div class="field"><label>Build type</label><select name="build_type">
              <option value="single_page_cinematic" ${last?.build_type !== "premier_multi_page" ? "selected" : ""}>Single-page cinematic</option>
              <option value="premier_multi_page" ${last?.build_type === "premier_multi_page" ? "selected" : ""}>Premier multi-page</option>
            </select></div>
            <div class="field"><label>Hero anatomy</label><select name="hero_family">${heroOpts}</select></div>
          </div>
          <div class="field"><label>Section toggles</label><div class="btn-row" style="gap:.45rem">${sectionBoxes}</div></div>
          <div class="field"><label style="display:inline-flex;gap:.45rem;align-items:center"><input type="checkbox" name="video_prompt" value="1" style="accent-color:var(--ember)"> Generate cinematic video hero prompt (Veo)</label></div>
          ${gate.ok
            ? `<button class="btn ember" type="submit" style="width:100%">Forge site (${gate.max - gate.used} runs left this month)</button>`
            : `<div class="notice warn">You've used ${gate.used}/${gate.max} forge runs this month on the ${esc(gate.ent.plan_name)} plan. <a href="/pricing">Upgrade for more</a>.</div>`}
        </form>
      </div>
      <div>
        <div class="panel"><h3>Regenerate one piece</h3>
          ${last && last.status === "done" ? `
          <p style="font-size:.9rem">Keep the rest, reforge one part. Each creates a new graded version.</p>
          <div class="btn-row">
            ${["hero", "copy", "gallery", "map"].map((t) => `
            <form method="post" action="/api/projects/${project.id}/regenerate" style="display:inline">
              <input type="hidden" name="_csrf" value="${esc(csrf)}"><input type="hidden" name="target" value="${t}">
              <button class="btn ghost sm" type="submit">↻ ${t[0].toUpperCase() + t.slice(1)}</button></form>`).join("")}
          </div>` : `<p class="muted" style="font-size:.9rem">Run your first forge to unlock piece-by-piece regeneration.</p>`}
        </div>
        <div class="panel" style="margin-top:1.2rem"><h3>What the gate checks</h3>
          <ul class="qc-list" style="font-size:.85rem">
            <li class="pass"><span class="mark">✓</span><span class="detail">Hero depth ≥ 6 layers · unique layout signature</span></li>
            <li class="pass"><span class="mark">✓</span><span class="detail">Copy ban-list (no "look no further" sludge)</span></li>
            <li class="pass"><span class="mark">✓</span><span class="detail">LocalBusiness/Service/FAQ schema + llms.txt</span></li>
            <li class="pass"><span class="mark">✓</span><span class="detail">320px mobile integrity · reduced-motion · screenshots</span></li>
          </ul>
        </div>
      </div>
    </div>`,
  });
}

export function projectPreview({ user, project, gen, qc, csrf, version, scorecard = null, seo = null }) {
  if (!gen) {
    return projectShell({ user, project, tab: "preview", inner: `<div class="empty"><h3>No build to preview yet.</h3><p>Run the forge first — it takes about a minute.</p><a class="btn ember" href="/p/${project.id}/build">Go to Forge</a></div>` });
  }
  const results = qc?.results || [];
  const qcRows = results.map((r) => `<li class="${r.deferred ? "defer" : r.pass ? "pass" : "fail"}"><span class="mark">${r.deferred ? "◔" : r.pass ? "✓" : "✗"}</span><span class="name">${esc(r.name)}</span><span class="detail">${esc(r.detail || "")}</span></li>`).join("");
  return projectShell({
    user, project, tab: "preview",
    inner: `
    <div class="grid-2" style="grid-template-columns: 2.2fr 1fr; align-items:start">
      <div>
        <div class="device-bar"><span class="dots"><i></i><i></i><i></i></span>
          <span style="flex:1;font-family:var(--font-mono);font-size:.78rem">${esc(project.slug)} · v${gen.version}</span>
          <button class="btn sm ghost" data-device="desktop" type="button">Desktop</button>
          <button class="btn sm" data-device="mobile" type="button">Mobile</button>
          <a class="btn sm ghost" href="/preview/${project.id}/${gen.version}/" target="_blank" rel="noopener">Open ↗</a>
        </div>
        <div class="preview-frame-wrap"><iframe src="/preview/${project.id}/${gen.version}/" title="Site preview" loading="lazy"></iframe></div>
      </div>
      <div>
        <div class="panel" style="text-align:center">
          ${gradeBadge(gen.qc_grade)}
          <h3 style="margin:.6rem 0 .2rem">Quality ${qc?.score ?? "–"}/100</h3>
          <p class="muted" style="font-size:.85rem;margin:0">${gen.qc_grade === "A" ? "Cleared the gate. Ready to publish." : qc?.degraded ? "Browser checks deferred in this environment — full gate runs on the build server." : "Fix the flagged items or regenerate."}</p>
        </div>
        ${scorecardPanel(scorecard, seo)}
        <div class="panel" style="margin-top:1rem"><h3>Report card</h3><ul class="qc-list">${qcRows || '<li class="muted">No report.</li>'}</ul></div>
        <div class="panel" style="margin-top:1rem"><h3>Not right yet?</h3>
          <div class="btn-row">
            ${["hero", "copy"].map((t) => `<form method="post" action="/api/projects/${project.id}/regenerate"><input type="hidden" name="_csrf" value="${esc(csrf)}"><input type="hidden" name="target" value="${t}"><button class="btn ghost sm" type="submit">↻ ${t}</button></form>`).join("")}
            <a class="btn sm ember" href="/p/${project.id}/publish">Publish →</a>
          </div>
        </div>
      </div>
    </div>`,
  });
}

export function projectPublish({ user, project, gen, ent, deployments, csrf, baseUrl }) {
  const canPublish = ent.can_publish;
  const gradeOk = gen?.qc_grade === "A" || (gen?.qc_grade === "B" && gen?.degraded !== false);
  const deployRows = deployments.map((d) => `<tr><td>${fmtDate(d.created_at)}</td><td>${esc(d.target)}</td><td>${d.url ? `<a href="${esc(d.url)}" target="_blank" rel="noopener">${esc(d.url)}</a>` : "—"}</td><td><span class="chip ${d.status === "live" ? "ok" : "warn"}">${esc(d.status)}</span></td></tr>`).join("");
  return projectShell({
    user, project, tab: "publish",
    inner: `
    ${!gen ? `<div class="empty"><h3>Forge a site first.</h3><a class="btn ember" href="/p/${project.id}/build">Go to Forge</a></div>` : `
    <div class="grid-2" style="align-items:start">
      <div class="panel">
        <h3>Publish v${gen.version}</h3>
        <ul class="qc-list">
          <li class="${gradeOk ? "pass" : "fail"}"><span class="mark">${gradeOk ? "✓" : "✗"}</span><span class="detail">QC grade ${esc(gen.qc_grade || "—")} ${gradeOk ? "— clears the gate" : "— must grade A to publish"}</span></li>
          <li class="${canPublish ? "pass" : "fail"}"><span class="mark">${canPublish ? "✓" : "✗"}</span><span class="detail">${canPublish ? `Publishing included in ${esc(ent.plan_name)}` : "Publishing requires a paid plan"}</span></li>
        </ul>
        ${canPublish && gradeOk ? `
        <form method="post" action="/api/projects/${project.id}/publish">
          <input type="hidden" name="_csrf" value="${esc(csrf)}">
          <button class="btn ember" style="width:100%" type="submit">Publish this version</button>
          <p class="hint" style="margin-top:.5rem">Goes live on your SiteForge URL instantly; custom domain below.</p>
        </form>` : !canPublish ? `
        <div class="price-grid" style="grid-template-columns:1fr">${priceCard(CATALOG.plans.find((p) => p.key === "starter"))}</div>` : `
        <a class="btn" href="/p/${project.id}/build">Reforge to grade A</a>`}
      </div>
      <div>
        <div class="panel"><h3>Custom domain</h3>
          ${ent.can_custom_domain ? `
          <ol style="font-size:.92rem;color:var(--ink-2);padding-left:1.2rem;line-height:1.8">
            <li>Buy or use your domain (e.g. <code>summitroofingtx.com</code>).</li>
            <li>Add a <b>CNAME</b> record: <code>www → sites.siteforge.dev</code></li>
            <li>Add an <b>A</b> record: <code>@ → 76.76.21.21</code></li>
            <li>Paste the domain here — SSL issues automatically.</li>
          </ol>
          <form method="post" action="/api/projects/${project.id}/domain">
            <input type="hidden" name="_csrf" value="${esc(csrf)}">
            <div class="field"><input name="domain" type="text" maxlength="120" placeholder="summitroofingtx.com" pattern="[a-z0-9.-]+\\.[a-z]{2,}"></div>
            <button class="btn sm" type="submit">Attach domain</button>
          </form>` : `<p class="muted" style="font-size:.9rem">Custom domains come with any paid plan.</p>`}
        </div>
        <div class="panel" style="margin-top:1.2rem"><h3>Deployments</h3>
          ${deployRows ? `<table class="data"><thead><tr><th>When</th><th>Target</th><th>URL</th><th>Status</th></tr></thead><tbody>${deployRows}</tbody></table>` : `<p class="muted" style="font-size:.9rem">Nothing published yet.</p>`}
        </div>
      </div>
    </div>`}`,
  });
}

export function accountPage({ user, ent, sub, csrf }) {
  return page({
    title: "Account", desc: "Billing and account.", path: "/account", user, noindex: true,
    body: `<section class="section" style="padding-top:2rem"><div class="wrap" style="max-width:820px">
      <p class="eyebrow">Account</p><h1 style="font-size:2.2rem">Billing & plan</h1>
      <div class="grid-2" style="align-items:start">
        <div class="panel"><h3>Current plan</h3>
          <div class="price" style="font-size:1.8rem">${esc(ent.plan_name)}</div>
          ${sub ? `<p class="muted" style="font-size:.88rem">Status: ${esc(sub.status)} · mode: ${esc(sub.mode)} · renews ${fmtDate(sub.current_period_end)}</p>` : `<p class="muted" style="font-size:.88rem">Free plan — forge and preview without paying.</p>`}
          <ul class="qc-list" style="font-size:.9rem">
            <li class="pass"><span class="mark">→</span><span class="detail">${ent.limits.projects} project${ent.limits.projects > 1 ? "s" : ""} · ${ent.limits.generations_per_month} forge runs/mo</span></li>
            <li class="${ent.can_publish ? "pass" : "fail"}"><span class="mark">${ent.can_publish ? "✓" : "✗"}</span><span class="detail">Publishing</span></li>
            <li class="${ent.can_custom_domain ? "pass" : "fail"}"><span class="mark">${ent.can_custom_domain ? "✓" : "✗"}</span><span class="detail">Custom domain</span></li>
            <li class="${ent.can_edit_requests ? "pass" : "fail"}"><span class="mark">${ent.can_edit_requests ? "✓" : "✗"}</span><span class="detail">Operator edit support</span></li>
          </ul>
          <div class="btn-row">
            <a class="btn sm" href="/pricing">Change plan</a>
            ${sub && sub.plan_key !== "free" ? `<a class="btn ghost sm" href="/billing/portal">Manage billing</a>` : ""}
          </div>
        </div>
        <div class="panel"><h3>Add-ons</h3>
          ${ent.addons.length ? `<div class="btn-row">${ent.addons.map((a) => `<span class="chip ok">${esc(a)}</span>`).join("")}</div>` : `<p class="muted" style="font-size:.9rem">No add-ons yet.</p>`}
          <p style="font-size:.9rem;margin-top:.8rem">Voice AI receptionist, Local SEO boost, AI concierge — <a href="/pricing#upgrades">browse upgrades</a>.</p>
          <hr class="rule" style="margin:1.1rem 0">
          <h3>Profile</h3>
          <p style="font-size:.9rem" class="muted">${esc(user.email)} · signed in with ${esc(user.auth_provider)}</p>
        </div>
      </div>
    </div></section>`,
  });
}

export function mockCheckoutPage({ item, refId, t, csrf }) {
  return page({
    title: "Checkout (test)", desc: "SiteForge mock checkout.", noindex: true,
    body: `<section class="section"><div class="wrap" style="max-width:520px">
      <p class="eyebrow">Checkout · test mode</p>
      <h1 style="font-size:2rem">${esc(item.name)}</h1>
      <div class="notice warn"><b>No real payment happens here.</b> Stripe isn't configured, so this is SiteForge's built-in mock checkout. With <code>STRIPE_SECRET_KEY</code> (test) set, this page is replaced by real Stripe test checkout.</div>
      <div class="panel">
        <div style="display:flex;justify-content:space-between;font-size:1.1rem"><span>${esc(item.name)}</span><b>${fmtMoney(item.price_cents)}${item.interval ? `/${item.interval}` : ""}</b></div>
        <hr class="rule" style="margin:1rem 0">
        <form method="post" action="/billing/mock-confirm">
          <input type="hidden" name="_csrf" value="${esc(csrf)}"><input type="hidden" name="ref" value="${esc(refId)}"><input type="hidden" name="t" value="${esc(t)}">
          <div class="field"><label>Card number</label><input type="text" value="4242 4242 4242 4242" readonly style="font-family:var(--font-mono)"></div>
          <button class="btn ember" style="width:100%" type="submit">Complete test purchase</button>
        </form>
      </div>
    </div></section>`,
  });
}

export function billingSuccessPage({ user, granted }) {
  return page({
    title: "You're in", desc: "Purchase complete.", user, noindex: true,
    body: `<section class="section"><div class="wrap" style="max-width:560px;text-align:center">
      <p class="eyebrow" style="justify-content:center">Receipt sent</p>
      <h1 style="font-size:2.4rem">That's live on your account.</h1>
      <p>${granted ? `Your <b>${esc(granted.item_key)}</b> ${esc(granted.item_kind)} is active — entitlements applied instantly.` : "Payment received; entitlements apply within a minute (webhook)."} A receipt is in your inbox.</p>
      <div class="btn-row" style="justify-content:center"><a class="btn ember" href="/dashboard">Back to dashboard</a></div>
    </div></section>`,
  });
}
