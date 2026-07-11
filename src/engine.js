// Rendering engine — trip-data independent. Reads a `config` object
// (see docs/SCHEMA.md) and a Design Set module (see docs/DESIGN_SETS.md) and
// drives the DOM skeleton declared in index.html.
import { iconSvg, DEFAULT_TYPE_ICONS, TYPE_TINT } from "./icons.js";
import { createChecklistStore } from "./storage.js";

const FALLBACK_TONE = { bg: "#f5f5f5", fg: "#737373", border: "#e5e5e5" };

// ---------- i18n (#2) ----------

const I18N = {
  ja: {
    travelItinerary: "旅のしおり",
    accommodations: "宿泊",
    travelNotes: "旅のメモ",
    checklist: "チェックリスト",
    openInMaps: "Google マップで開く",
    synced: "同期済み",
    syncFailed: "同期失敗",
    required: "要予約",
    recommended: "推奨",
  },
  en: {
    travelItinerary: "Travel Itinerary",
    accommodations: "Accommodations",
    travelNotes: "Travel Notes",
    checklist: "Checklist",
    openInMaps: "Open in Google Maps",
    synced: "Synced",
    syncFailed: "Sync failed",
    required: "Required",
    recommended: "Recommended",
  },
};

function t(key) {
  const lang = state.config?.meta?.lang || "en";
  return (I18N[lang] || I18N.en)[key] ?? I18N.en[key] ?? key;
}

// ---------- State ----------

const state = {
  config: null,
  designSet: null,
  weatherMode: null,
  checklistStore: null,
  checklistData: [],
};

// ---------- Validation (#5) ----------

const VALID_DESIGNS = ["iberia", "coastal", "noir", "washi"];

function validateConfig(config) {
  if (!config || typeof config !== "object") {
    throw new Error("[trip-itinerary] config が見つかりません。config.js を作成してください（config.example.js を参照）。");
  }
  const required = ["design", "meta", "tabs", "days"];
  for (const key of required) {
    if (config[key] == null) {
      throw new Error(`[trip-itinerary] config.${key} は必須です。docs/SCHEMA.md を参照してください。`);
    }
  }
  if (!VALID_DESIGNS.includes(config.design)) {
    throw new Error(`[trip-itinerary] config.design "${config.design}" は無効です。"${VALID_DESIGNS.join(" | ")}" のいずれかを指定してください。`);
  }
  for (const key of ["title", "period"]) {
    if (!config.meta[key]) {
      throw new Error(`[trip-itinerary] config.meta.${key} は必須です。`);
    }
  }
  if (!Array.isArray(config.tabs) || config.tabs.length === 0) {
    throw new Error("[trip-itinerary] config.tabs は1件以上の配列である必要があります。");
  }
}

// ---------- Init ----------

export async function init(config) {
  validateConfig(config);
  state.config = config;
  state.designSet = await loadDesignSet(config.design);

  if (config.meta && config.meta.title) document.title = config.meta.title;
  applyTheme(state.designSet);
  injectGoogleFonts(state.designSet);

  renderSidebarHeader();
  renderFlights();
  renderNotes();

  if (config.features && config.features.checklist) {
    initChecklist();
  }

  if (config.features && config.features.weatherModes && config.weatherModes && config.weatherModes.length) {
    const active = config.weatherModes.find((m) => m.active) || config.weatherModes[0];
    state.weatherMode = active.mode;
    document.getElementById("weather-tabs").classList.remove("is-hidden");
    renderWeatherTabs();
  }

  renderTabs();
}

function loadDesignSet(name) {
  return import(`../design-sets/${name}.js`).then((mod) => mod.default);
}

function applyTheme(designSet) {
  document.documentElement.dataset.design = state.config.design;

  const colorVars = (c) =>
    `--c-base:${c.base};--c-surface:${c.surface};--c-primary:${c.primary};` +
    `--c-accent:${c.accent};--c-support:${c.support};--c-text:${c.text};` +
    `--c-text-muted:${c.textMuted};--c-border:${c.border}`;

  const f = designSet.fonts;
  const s = designSet.surface;
  const dc = designSet.darkColors;

  let styleEl = document.getElementById("design-theme");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "design-theme";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent =
    `:root{${colorVars(designSet.colors)};` +
    `--font-display:${f.display};--font-sans:${f.sans};--font-serif:${f.serif};` +
    `--radius:${s.radius};--shadow-soft:${s.shadowSoft};--shadow-float:${s.shadowFloat}}` +
    (dc ? `@media(prefers-color-scheme:dark){:root{${colorVars(dc)}}}` : "");
}

function injectGoogleFonts(designSet) {
  const head = document.head;
  if (!document.getElementById("gfonts-preconnect-1")) {
    const p1 = document.createElement("link");
    p1.id = "gfonts-preconnect-1";
    p1.rel = "preconnect";
    p1.href = "https://fonts.googleapis.com";
    const p2 = document.createElement("link");
    p2.id = "gfonts-preconnect-2";
    p2.rel = "preconnect";
    p2.href = "https://fonts.gstatic.com";
    p2.crossOrigin = "anonymous";
    head.appendChild(p1);
    head.appendChild(p2);
  }

  const existing = document.getElementById("gfonts-link");
  if (existing) existing.remove();
  if (!designSet.googleFonts || !designSet.googleFonts.length) return;

  const link = document.createElement("link");
  link.id = "gfonts-link";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?" +
    designSet.googleFonts.map((f) => "family=" + f).join("&") +
    "&display=swap";
  head.appendChild(link);
}

function mapsUrlFor(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

function resolveMapUrl(key) {
  if (!key) return null;
  const fixed = state.config.mapUrls && state.config.mapUrls[key];
  return fixed || mapsUrlFor(key);
}

function resolveIcon(type) {
  const override = state.designSet.icons && state.designSet.icons[type];
  return override || DEFAULT_TYPE_ICONS[type] || "info";
}

function badgeStyle(tone) {
  const t2 = (state.designSet.badgeTones && state.designSet.badgeTones[tone]) || FALLBACK_TONE;
  return `background:${t2.bg};color:${t2.fg};border-color:${t2.border}`;
}

// ---------- Sidebar ----------

function renderSidebarHeader() {
  const { meta, hotels } = state.config;
  const hotelsHtml = (hotels || [])
    .map(
      (h) => `
      <li class="hotel-item">
        <span class="hotel-item__night">${h.night}</span>
        <a class="hotel-item__name" href="${mapsUrlFor(h.mapQuery)}" target="_blank" rel="noopener noreferrer">
          ${h.name} ${iconSvg("chevron-right")}
        </a>
      </li>`
    )
    .join("");

  document.getElementById("sidebar-header-content").innerHTML = `
    <div class="header-eyebrow">${t("travelItinerary")}</div>
    <h1 class="header-title">${meta.title}</h1>
    <p class="header-period">${meta.period}</p>
    <div class="hotel-card">
      <div class="hotel-card__heading">${iconSvg("hotel")} ${t("accommodations")}</div>
      <ul class="hotel-list">${hotelsHtml}</ul>
    </div>
  `;

  const header = document.querySelector(".sidebar-header");
  const oldWave = header.querySelector(".header-wave");
  if (oldWave) oldWave.remove();
  if (state.designSet.decorations && state.designSet.decorations.headerWave) {
    const wave = document.createElement("div");
    wave.className = "header-wave";
    wave.innerHTML =
      '<svg viewBox="0 0 400 32" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M0,16 C80,32 160,0 240,16 C320,32 380,8 400,16 L400,32 L0,32Z" fill="var(--c-primary)"/></svg>';
    header.appendChild(wave);
  }
}

function renderFlights() {
  document.getElementById("sidebar-flights").innerHTML = (state.config.flights || [])
    .map(
      (f) => `
      <div class="flight-card">
        <div class="flight-card__label">${iconSvg("plane")} ${f.label}</div>
        <div class="flight-card__route">${f.route}</div>
        <div class="flight-card__detail">${f.detail}</div>
      </div>`
    )
    .join("");
}

function renderNotes() {
  const notes = state.config.notes || [];
  const el = document.getElementById("sidebar-notes");
  if (!notes.length) {
    el.innerHTML = "";
    return;
  }
  el.innerHTML = `
    <div class="notes-card">
      <div class="notes-card__heading">${iconSvg("info")} ${t("travelNotes")}</div>
      <ul class="notes-list">
        ${notes.map((n) => `<li>${iconSvg(n.icon || "info")}<span>${n.text}</span></li>`).join("")}
      </ul>
    </div>`;
}

// ---------- Checklist ----------

function initChecklist() {
  const block = document.getElementById("sidebar-checklist");
  block.classList.remove("is-hidden");
  block.innerHTML = `
    <div class="checklist-panel">
      <button class="checklist-toggle" id="checklist-toggle" type="button"
              aria-expanded="false" aria-controls="checklist-content">
        <span class="checklist-toggle__label">${iconSvg("clipboard-check")} ${t("checklist")}
          <span class="checklist-sync is-hidden" id="checklist-sync"></span>
        </span>
        ${iconSvg("chevron-down", "checklist-icon")}
      </button>
      <div class="checklist-content is-hidden" id="checklist-content" role="region">
        <ul class="checklist-items" id="checklist-items" role="list"></ul>
      </div>
    </div>`;

  const toggle = document.getElementById("checklist-toggle");
  toggle.addEventListener("click", () => {
    const content = document.getElementById("checklist-content");
    const isHidden = content.classList.toggle("is-hidden");
    toggle.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(!isHidden));
  });

  state.checklistStore = createChecklistStore(state.config);
  state.checklistStore.load(state.config.checklist || []).then((data) => {
    state.checklistData = data;
    renderChecklistItems();
  });
}

function renderChecklistItems() {
  const container = document.getElementById("checklist-items");
  container.innerHTML = "";
  state.checklistData.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "checklist-item" + (item.isDone ? " is-done" : "");
    li.setAttribute("role", "checkbox");
    li.setAttribute("aria-checked", item.isDone ? "true" : "false");
    li.setAttribute("tabindex", "0");

    let badge = "";
    if (!item.isDone && item.type === "required") {
      badge = `<span class="checklist-item__badge" style="${badgeStyle("required")}">${t("required")}</span>`;
    } else if (!item.isDone && item.type === "recommended") {
      badge = `<span class="checklist-item__badge" style="${badgeStyle("recommended")}">${t("recommended")}</span>`;
    }

    li.innerHTML = `
      <span class="checklist-item__mark">${iconSvg(item.isDone ? "circle-check" : "circle")}</span>
      <div class="checklist-item__text">
        <span class="checklist-item__title">${item.title}${badge}</span>
        <span class="checklist-item__desc">${item.desc}</span>
      </div>
    `;
    li.addEventListener("click", () => onChecklistToggle(index));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onChecklistToggle(index);
      }
    });
    container.appendChild(li);
  });
}

async function onChecklistToggle(index) {
  state.checklistData[index].isDone = !state.checklistData[index].isDone;
  renderChecklistItems();
  const result = await state.checklistStore.save(state.checklistData);
  showSyncStatus(result);
}

function showSyncStatus(result) {
  if (!state.config.storage || state.config.storage.kind !== "restApi") return;
  if (result.aborted) return;
  const el = document.getElementById("checklist-sync");
  if (!el) return;
  el.classList.remove("is-hidden", "is-error");
  if (result.synced) {
    el.textContent = t("synced");
  } else {
    el.textContent = t("syncFailed");
    el.classList.add("is-error");
  }
  setTimeout(() => el.classList.add("is-hidden"), result.synced ? 2000 : 3000);
}

// ---------- Weather tabs ----------

function renderWeatherTabs() {
  const container = document.getElementById("weather-tabs");
  container.innerHTML = "";
  (state.config.weatherModes || []).forEach((def) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "weather-tab" + (state.weatherMode === def.mode ? " is-active" : "");
    btn.innerHTML = `${iconSvg(def.icon || "sun")}<span>${def.label}</span>`;
    btn.addEventListener("click", () => switchWeather(def.mode));
    container.appendChild(btn);
  });
}

function switchWeather(mode) {
  state.weatherMode = mode;
  renderWeatherTabs();
  (state.config.tabs || []).forEach((tab) => renderDay(tab.id));
}

// ---------- Tabs & days ----------

export function renderTabs() {
  const tabsContainer = document.getElementById("tabs-container");
  const contentContainer = document.getElementById("content-container");
  tabsContainer.innerHTML = "";
  contentContainer.innerHTML = "";
  tabsContainer.setAttribute("role", "tablist");

  (state.config.tabs || []).forEach((tab, index) => {
    const isFirst = index === 0;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "tab-btn-" + tab.id;
    btn.className = "tab-btn" + (isFirst ? " is-active" : "");
    btn.dataset.target = tab.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isFirst ? "true" : "false");
    btn.setAttribute("aria-controls", tab.id);
    const shortDate = String(tab.date).split(" ")[1] || tab.date;
    btn.innerHTML = `<span class="tab-btn__day">${tab.dayOfWeek}</span><span class="tab-btn__date">${shortDate}</span>`;
    btn.addEventListener("click", () => switchTab(tab.id, btn));
    // Arrow-key navigation between tabs (#7)
    btn.addEventListener("keydown", (e) => {
      const tabs = [...tabsContainer.querySelectorAll(".tab-btn")];
      const idx = tabs.indexOf(e.currentTarget);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        tabs[(idx + 1) % tabs.length].focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        tabs[(idx - 1 + tabs.length) % tabs.length].focus();
      }
    });
    tabsContainer.appendChild(btn);

    const panel = document.createElement("div");
    panel.id = tab.id;
    panel.className = "day-panel" + (isFirst ? " is-active" : " is-hidden");
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-btn-" + tab.id);
    panel.innerHTML = '<h2 class="day-title"></h2><div class="timeline-container timeline"></div>';
    contentContainer.appendChild(panel);
  });

  (state.config.tabs || []).forEach((tab) => renderDay(tab.id));
}

export function switchTab(dayId, tabElement) {
  document.querySelectorAll(".day-panel").forEach((el) => {
    el.classList.add("is-hidden");
    el.classList.remove("is-active");
  });
  const target = document.getElementById(dayId);
  target.classList.remove("is-hidden");
  requestAnimationFrame(() => target.classList.add("is-active"));

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("is-active");
    btn.setAttribute("aria-selected", "false");
  });
  tabElement.classList.add("is-active");
  tabElement.setAttribute("aria-selected", "true");

  const container = document.getElementById("tabs-container");
  const scrollLeft = tabElement.offsetLeft - container.clientWidth / 2 + tabElement.clientWidth / 2;
  container.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

function getDayData(dayId) {
  const days = state.config.days;
  if (Array.isArray(days)) return days.find((d) => d.id === dayId);
  return days ? days[dayId] : null;
}

// A day not defining the current weather mode falls back to the nearest
// declared mode, walking outward through the config's declared mode order.
function resolveDayMode(dayModes, weatherModesList, currentMode) {
  if (dayModes[currentMode]) return currentMode;
  const order = weatherModesList.map((m) => m.mode);
  const idx = order.indexOf(currentMode);
  for (let d = 1; d < order.length; d++) {
    const forward = order[idx + d];
    if (forward && dayModes[forward]) return forward;
    const backward = order[idx - d];
    if (backward && dayModes[backward]) return backward;
  }
  return Object.keys(dayModes)[0];
}

function renderDay(dayId) {
  const panel = document.getElementById(dayId);
  if (!panel) return;
  const dayData = getDayData(dayId);
  if (!dayData) return;

  let title, events;
  if (dayData.events) {
    title = dayData.title;
    events = dayData.events;
  } else {
    const mode = resolveDayMode(dayData, state.config.weatherModes || [], state.weatherMode);
    const modeData = dayData[mode] || Object.values(dayData)[0];
    title = modeData.title;
    events = modeData.events;
  }

  panel.querySelector(".day-title").textContent = title;
  buildTimeline(events, panel.querySelector(".timeline-container"));
}

// ---------- Timeline ----------

export function buildTimeline(events, container) {
  container.innerHTML = "";
  events.forEach((ev, idx) => {
    const isLast = idx === events.length - 1;
    const iconName = resolveIcon(ev.type);
    const tint = TYPE_TINT[ev.type] || "muted";
    const mapUrl = ev.map ? resolveMapUrl(ev.map) : null;

    const badgesHtml = (ev.badges || [])
      .map((b) => `<span class="badge" style="${badgeStyle(b.tone)}">${b.text}</span>`)
      .join("");

    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-expanded", "false");
    item.addEventListener("click", () => toggleAccordion(item));
    // Keyboard open/close for accordion (#7)
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleAccordion(item);
      }
    });

    item.innerHTML = `
      ${isLast ? "" : '<div class="timeline-line"></div>'}
      <div class="timeline-icon" data-tint="${tint}">${iconSvg(iconName)}</div>
      <div class="timeline-card">
        <div class="timeline-card__row">
          <div class="timeline-card__main">
            ${ev.drive ? `<span class="timeline-drive">${iconSvg("map-pin")}${ev.drive}</span>` : ""}
            <span class="timeline-time">${ev.time}</span>
            <h3 class="timeline-title">${ev.title}${badgesHtml}</h3>
          </div>
          <div class="timeline-toggle">${iconSvg("chevron-down")}</div>
        </div>
        <div class="timeline-detail"><div class="timeline-detail__inner">
          <p class="timeline-detail__desc">${ev.desc}</p>
          ${ev.tip ? `<div class="timeline-tip">${iconSvg("info")}<span>${ev.tip}</span></div>` : ""}
          ${mapUrl ? `<a class="map-btn" href="${mapUrl}" target="_blank" rel="noopener noreferrer">${iconSvg("map-pin")}${t("openInMaps")}</a>` : ""}
          ${renderCandidates(ev.candidates)}
        </div></div>
      </div>
    `;

    item.querySelectorAll("a").forEach((a) => a.addEventListener("click", (e) => e.stopPropagation()));
    container.appendChild(item);
  });
}

function renderCandidates(candidates) {
  if (!candidates || !candidates.length) return "";
  if (!(state.config.features && state.config.features.candidates)) return "";

  return (
    '<div class="candidates">' +
    candidates
      .map(
        (c) => `
        <div class="candidate">
          <div class="candidate__body">
            <div class="candidate__name">${c.name}</div>
            <div class="candidate__genre">${c.genre}</div>
            <div class="candidate__note">${c.note}</div>
          </div>
          <a class="candidate__map" href="${mapsUrlFor(c.map)}" target="_blank" rel="noopener noreferrer">${iconSvg("map-pin")} Map</a>
        </div>`
      )
      .join("") +
    "</div>"
  );
}

export function toggleAccordion(item) {
  const wasOpen = item.classList.contains("is-open");
  item.classList.toggle("is-open");
  item.setAttribute("aria-expanded", wasOpen ? "false" : "true");
  if (!wasOpen) {
    setTimeout(() => {
      const rect = item.getBoundingClientRect();
      if (rect.bottom > window.innerHeight - 20) {
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 300);
  }
}
