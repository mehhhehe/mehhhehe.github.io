/* ============================================================
   app.js — shared behaviour (no need to edit)
   neural background · typed hero · count-up · reveal · render
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const base = document.body.getAttribute("data-base") || "";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* -------- neural network canvas -------- */
  function neural() {
    if (reduce) return;
    const c = document.getElementById("neural");
    if (!c) return;
    const ctx = c.getContext("2d");
    let w, h, dpr, nodes = [], pulses = [];
    const ACCENT = "41,240,168", CYAN = "56,224,214";

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = w * dpr; c.height = h * dpr;
      c.style.width = w + "px"; c.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    function build() {
      const area = w * h;
      const count = Math.max(28, Math.min(72, Math.round(area / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .14, vy: (Math.random() - .5) * .14,
        r: Math.random() * 1.6 + 1.1,
        glow: Math.random()
      }));
      pulses = [];
    }
    const LINK = 150;
    function step() {
      ctx.clearRect(0, 0, w, h);
      // brighter near the top of the page (hero zone)
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.glow += .01;
      }
      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const fade = 1 - d / LINK;
            const top = 1 - Math.min((a.y + b.y) / 2 / h, 1) * .65;
            ctx.strokeStyle = `rgba(${ACCENT},${(fade * .18 * top).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        const top = 1 - Math.min(n.y / h, 1) * .55;
        const a = (.35 + Math.sin(n.glow) * .25) * top;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${ACCENT},${a.toFixed(3)})`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
      // travelling signal pulses
      if (pulses.length < 7 && Math.random() < .04 && nodes.length > 2) {
        const a = nodes[(Math.random() * nodes.length) | 0];
        let b = nodes[(Math.random() * nodes.length) | 0];
        if (a !== b && Math.hypot(a.x - b.x, a.y - b.y) < LINK * 1.4) {
          pulses.push({ a, b, t: 0, sp: .012 + Math.random() * .014 });
        }
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.t += p.sp;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const top = 1 - Math.min(y / h, 1) * .5;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${CYAN},${(.9 * top).toFixed(3)})`;
        ctx.shadowBlur = 8; ctx.shadowColor = `rgba(${ACCENT},.8)`;
        ctx.arc(x, y, 1.9, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
      requestAnimationFrame(step);
    }
    size();
    window.addEventListener("resize", size, { passive: true });
    requestAnimationFrame(step);
  }

  /* -------- typed hero subtitle -------- */
  function typed() {
    const el = document.getElementById("typed");
    if (!el) return;
    const phrases = (window.DATA && window.DATA.identity.typed) || [];
    if (!phrases.length) return;
    const cursor = '<span class="type-cursor"></span>';
    if (reduce) { el.innerHTML = esc(phrases[0]) + cursor; return; }
    let pi = 0, ci = 0, deleting = false;
    function tick() {
      const full = phrases[pi];
      ci += deleting ? -1 : 1;
      el.innerHTML = esc(full.slice(0, ci)) + cursor;
      let delay = deleting ? 28 : 52;
      if (!deleting && ci === full.length) { delay = 2100; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 380; }
      setTimeout(tick, delay);
    }
    setTimeout(tick, 700);
  }

  /* -------- count-up stats -------- */
  function counts() {
    $$("[data-count]").forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
      if (reduce) { el.textContent = target.toFixed(dec); return; }
      const obs = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          obs.unobserve(el);
          const dur = 1300, t0 = performance.now();
          (function run(t) {
            const k = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - k, 3);
            el.textContent = (target * eased).toFixed(dec);
            if (k < 1) requestAnimationFrame(run);
            else el.textContent = target.toFixed(dec);
          })(t0);
        });
      }, { threshold: .5 });
      obs.observe(el);
    });
  }

  /* -------- scroll reveal -------- */
  function reveal() {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* -------- render home + work from DATA -------- */
  function renderProfile() {
    const D = window.DATA; if (!D) return;
    const id = D.identity;

    if ($("#hero-name")) {
      const parts = id.name.split(" ");
      $("#hero-name").innerHTML = parts
        .map((p, i) => `<span class="w">${i === parts.length - 1 ? `<span class="grad">${esc(p)}</span>` : esc(p)}</span>`)
        .join(" ");
    }
    set("#hero-role", id.role);
    set("#hero-lead", id.lead);
    if ($("#hero-meta")) $("#hero-meta").innerHTML =
      `<span><b>where</b>${esc(id.location)}</span>` +
      `<span><b>github</b><a href="${esc(id.github)}" target="_blank" rel="noopener">${esc(id.github.replace("https://", ""))}</a></span>` +
      `<span><b>email</b><a href="mailto:${esc(id.email)}">${esc(id.email)}</a></span>`;
    if ($("#hero-cta")) $("#hero-cta").innerHTML =
      `<a class="btn solid" href="${base}papers.html">read my paper notes</a>` +
      `<a class="btn" href="${base}work.html">see my work</a>`;

    // stats
    if ($("#stats") && D.stats) $("#stats").innerHTML = D.stats.map((s) => {
      const value = s.source === "projects" ? (D.projects || []).length : s.value;
      return `<div class="stat"><div class="n"><span class="accent" data-count="${value}" data-dec="${s.decimals || 0}">0</span></div><div class="l">${esc(s.label)}</div></div>`;
    }).join("");

    if ($("#about-text")) $("#about-text").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
    if ($("#currently")) $("#currently").innerHTML = D.currently.map((c) => `<li>${esc(c)}</li>`).join("");

    if ($("#skills")) $("#skills").innerHTML = D.skills.map((s) =>
      `<div class="skill-row reveal"><div class="g">${esc(s.group)}</div><div class="chips">${s.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`
    ).join("");

    if ($("#xp")) $("#xp").innerHTML = D.experience.map((x) =>
      `<div class="xp reveal"><div class="xp-when">${esc(x.period)}<span class="where">${esc(x.where)}</span></div>` +
      `<div><h3><span class="org">${esc(x.org)}</span> — ${esc(x.title)}</h3><ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div></div>`
    ).join("");

    if ($("#projects")) $("#projects").innerHTML = D.projects.map((p) =>
      `<article class="proj reveal"><h3>${esc(p.name)}</h3><div class="stack">${esc(p.stack)}</div><p>${esc(p.desc)}</p>` +
      (p.link ? `<a class="repo" href="${esc(p.link)}" target="_blank" rel="noopener">view repository</a>` : `<span class="repo muted">${esc(p.status || "private repo")}</span>`) +
      `</article>`
    ).join("");

    if ($("#education")) $("#education").innerHTML = D.education.map((e) =>
      `<div class="edu-item"><div class="school">${esc(e.school)}</div><div class="degree">${esc(e.degree)}</div><div class="period">${esc(e.period)}</div><div class="detail">${esc(e.detail)}</div></div>`
    ).join("");

    if ($("#certs")) $("#certs").innerHTML = D.certifications.map((c) =>
      `<div class="cert"><div class="org">${esc(c.org)}</div><div class="name">${esc(c.name)}</div><div class="year">${esc(c.year)}</div></div>`
    ).join("");
    if ($("#langline")) $("#langline").innerHTML = `<b>languages:</b> ` + D.languages.map(esc).join("  ·  ");

    // footer
    if ($("#foot-links")) $("#foot-links").innerHTML =
      `<a class="btn solid" href="mailto:${esc(id.email)}">say hello</a>` +
      `<a class="btn" href="${esc(id.github)}" target="_blank" rel="noopener">github →</a>`;
    if ($("#foot-name")) $("#foot-name").textContent = "© " + new Date().getFullYear() + " " + id.name;
    if ($("#foot-loc")) $("#foot-loc").textContent = id.location;

    function set(sel, val) { if ($(sel)) $(sel).textContent = val; }
  }

  /* -------- render paper teasers (home) + list (papers.html) -------- */
  function renderPapers() {
    const P = window.PAPERS; if (!P) return;
    const tagName = { ml: "ML", dl: "DL", neuro: "Neuro" };

    if ($("#teasers")) {
      $("#teasers").innerHTML = P.slice(0, 3).map((p) =>
        `<a class="teaser reveal" href="${base}posts/${p.slug}.html">` +
        `<span class="tag ${p.tag}">${tagName[p.tag]}</span>` +
        `<h4>${esc(p.title)}</h4>` +
        `<span class="meta">${esc(p.venue)} · ${p.year} — ${esc(p.read)}</span></a>`
      ).join("");
    }

    const list = $("#paper-list");
    if (list) {
      const cards = P.map((p) =>
        `<a class="paper-card reveal" data-tag="${p.tag}" href="${base}posts/${p.slug}.html">` +
        `<div class="top"><span class="tag ${p.tag}">${tagName[p.tag]}</span><span class="year">${esc(p.venue)} · ${p.year}</span></div>` +
        `<h3>${esc(p.title)}</h3>` +
        `<div class="authors">${esc(p.authors)}</div>` +
        `<p class="blurb">${esc(p.blurb)}</p>` +
        `<span class="read">read the note · ${esc(p.read)}</span></a>`
      ).join("");
      list.innerHTML = cards;
      reveal();
      $$(".filter").forEach((f) => f.addEventListener("click", () => {
        $$(".filter").forEach((x) => x.classList.remove("active"));
        f.classList.add("active");
        const t = f.getAttribute("data-filter");
        $$(".paper-card").forEach((card) => {
          card.style.display = (t === "all" || card.getAttribute("data-tag") === t) ? "" : "none";
        });
      }));
    }
  }

  /* -------- boot -------- */
  document.addEventListener("DOMContentLoaded", () => {
    const safe = (fn) => { try { fn(); } catch (e) { console.error(e); } };
    safe(renderProfile);
    safe(renderPapers);
    safe(typed);
    safe(counts);
    safe(reveal);
    safe(neural); // last: purely decorative, never blocks content
  });
})();
