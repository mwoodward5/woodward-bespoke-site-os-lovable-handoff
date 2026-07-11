/* SiteForge client sprinkles — no framework, no build step. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const csrf = () => (document.cookie.match(/(?:^|;\s*)sf_csrf=([^;]+)/) || [])[1] || "";

  // Kinetic headline: per-word rise (reduced-motion handled in CSS)
  $$(".kinetic").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span style="animation-delay:${60 * i}ms">${w}</span>`).join(" ");
  });

  // Device toggle for preview
  $$("[data-device]").forEach((btn) => btn.addEventListener("click", () => {
    const wrap = $(".preview-frame-wrap");
    if (!wrap) return;
    wrap.classList.toggle("mobile", btn.dataset.device === "mobile");
    $$("[data-device]").forEach((b) => b.classList.toggle("ghost", b !== btn));
  }));

  // Wizard step progression
  const wiz = $("#wizard");
  if (wiz) {
    const steps = $$(".wiz-step", wiz);
    const dots = $$(".steps span");
    let cur = 0;
    const show = (i) => {
      cur = Math.max(0, Math.min(steps.length - 1, i));
      steps.forEach((s, j) => (s.hidden = j !== cur));
      dots.forEach((d, j) => { d.classList.toggle("on", j === cur); d.classList.toggle("done", j < cur); });
      window.scrollTo({ top: 0 });
    };
    $$("[data-next]", wiz).forEach((b) => b.addEventListener("click", () => {
      const inputs = $$("input[required], select[required]", steps[cur]);
      for (const inp of inputs) if (!inp.reportValidity()) return;
      show(cur + 1);
    }));
    $$("[data-back]", wiz).forEach((b) => b.addEventListener("click", () => show(cur - 1)));
    show(0);
  }

  // Asset approval toggles
  $$("[data-asset-toggle]").forEach((cb) => cb.addEventListener("change", async () => {
    const card = cb.closest(".asset");
    card.classList.toggle("off", !cb.checked);
    await fetch(`/api/assets/${cb.dataset.assetToggle}`, {
      method: "PATCH", headers: { "Content-Type": "application/json", "x-csrf-token": csrf() },
      body: JSON.stringify({ approved: cb.checked }),
    }).catch(() => {});
  }));

  // SSE forge timeline
  const tl = $("#forge-timeline");
  if (tl && tl.dataset.job) {
    const stages = ["discover", "scrape", "rescue", "design", "build", "qc", "deploy", "job"];
    const labels = { discover: "Discovering", scrape: "Collecting", rescue: "Rescuing assets", design: "Designing", build: "Forging", qc: "Grading", deploy: "Staging", job: "Result" };
    const rows = {};
    stages.forEach((s) => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="dot"></i><span class="stage">${labels[s]}</span><span class="detail">queued</span>`;
      tl.appendChild(li); rows[s] = li;
    });
    const es = new EventSource(`/api/jobs/${tl.dataset.job}/stream`);
    es.onmessage = (m) => {
      let e; try { e = JSON.parse(m.data); } catch { return; }
      const li = rows[e.stage]; if (!li) return;
      const d = li.querySelector(".detail");
      if (e.phase === "start") { li.className = "run"; d.textContent = "running…"; }
      else if (e.phase === "done") { li.className = "done"; d.textContent = summarize(e); }
      else if (e.phase === "failed" || e.phase === "error") { li.className = "fail"; d.textContent = e.payload?.message || "failed"; }
      else { li.className = "run"; d.textContent = `${e.phase} ${short(e.payload)}`; }
      if (e.stage === "job" && (e.phase === "done" || e.phase === "failed")) {
        es.close();
        const target = $("#forge-result");
        if (target && e.phase === "done") {
          target.innerHTML = `<div class="notice ok">Forged. Grade <b>${e.payload.grade}</b> — <a href="${e.payload.preview}" target="_blank" rel="noopener">open raw preview</a></div>`;
          setTimeout(() => location.href = tl.dataset.redirect || location.href, 1200);
        } else if (target) {
          target.innerHTML = `<div class="notice bad">Forge failed: ${e.payload?.message || "unknown error"}. Nothing was charged or consumed.</div>`;
        }
      }
    };
    const summarize = (e) => {
      const p = e.payload || {};
      if (e.stage === "qc") return `grade ${p.grade}${p.failed?.length ? " · " + p.failed.join(", ") : ""}`;
      if (e.stage === "design") return `${p.family || ""} · ${p.sections || "?"} sections`;
      if (e.stage === "build") return "site rendered";
      if (e.stage === "job") return `grade ${p.grade || "?"}`;
      return "done";
    };
    const short = (p) => { try { const s = JSON.stringify(p); return s.length > 60 ? s.slice(0, 57) + "…" : s; } catch { return ""; } };
  }

  // Template try-on: poll job then swap in preview link
  const tryForm = $("#try-form");
  if (tryForm) tryForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const btn = $("button[type=submit]", tryForm);
    const out = $("#try-result");
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Forging your preview…';
    const body = Object.fromEntries(new FormData(tryForm).entries());
    try {
      const r = await fetch("/api/templates/try", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Could not forge preview");
      const poll = setInterval(async () => {
        const jr = await fetch(`/api/jobs/${data.job_id}`);
        const j = await jr.json();
        if (j.status === "done") {
          clearInterval(poll);
          out.innerHTML = `<div class="notice ok">Your one-of-one preview is forged — <a href="${j.result.preview}" target="_blank" rel="noopener"><b>open ${body.name}'s site</b></a>. Sign up to keep and customize it.</div>`;
          btn.disabled = false; btn.textContent = "Forge another";
        } else if (j.status === "failed") {
          clearInterval(poll);
          out.innerHTML = `<div class="notice bad">${j.error || "Forge failed"}</div>`;
          btn.disabled = false; btn.textContent = "Try again";
        }
      }, 1500);
    } catch (err) {
      out.innerHTML = `<div class="notice bad">${err.message}</div>`;
      btn.disabled = false; btn.textContent = "Try again";
    }
  });

  // V7 media engine: dropzones (logo + photos)
  $$("[data-dropzone]").forEach((zone) => {
    const input = $("input[type=file]", zone);
    const label = $("span", zone);
    const orig = label?.textContent;
    const refresh = () => {
      const n = input.files?.length || 0;
      zone.classList.toggle("has-file", n > 0);
      if (label) label.textContent = n ? `${n} file${n > 1 ? "s" : ""} ready — hit Upload` : orig;
    };
    zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add("drag"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag"));
    zone.addEventListener("drop", (e) => {
      e.preventDefault(); zone.classList.remove("drag");
      if (e.dataTransfer?.files?.length) { input.files = e.dataTransfer.files; refresh(); }
    });
    input.addEventListener("change", refresh);
  });
  const upForm = $("[data-upload-form]");
  if (upForm) upForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const btn = $("[data-upload-btn]", upForm);
    const status = $("[data-upload-status]", upForm);
    const fd = new FormData(upForm);
    if (![...fd.values()].some((v) => v instanceof File && v.size > 0)) { if (status) status.textContent = "Pick a logo or photos first."; return; }
    btn.disabled = true; btn.textContent = "Uploading…";
    try {
      const r = await fetch(upForm.action, { method: "POST", body: fd, headers: { accept: "application/json", "x-csrf-token": csrf() } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || `Upload failed (${r.status})`);
      if (status) status.textContent = `Uploaded ${j.count} file(s) ✓`;
      setTimeout(() => location.reload(), 600);
    } catch (err) {
      if (status) status.textContent = err.message;
      btn.disabled = false; btn.textContent = "Upload selected";
    }
  });

  // V7: pick a proposed logo candidate (exclusive approval)
  $$("[data-pick-logo]").forEach((btn) => btn.addEventListener("click", async () => {
    btn.disabled = true; btn.textContent = "Saving…";
    await fetch(`/api/assets/${btn.dataset.pickLogo}`, {
      method: "PATCH", headers: { "Content-Type": "application/json", "x-csrf-token": csrf() },
      body: JSON.stringify({ approved: true, exclusive: "logo-candidate" }),
    }).catch(() => {});
    location.reload();
  }));

  // Consent banner
  const consent = $("#consent");
  if (consent && !localStorage.getItem("sf-consent")) {
    consent.hidden = false;
    $("#consent-ok")?.addEventListener("click", () => { localStorage.setItem("sf-consent", "1"); consent.hidden = true; });
  }
})();
