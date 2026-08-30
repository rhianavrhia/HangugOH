/* ===================== App Shell & Router ===================== */

const app = document.getElementById("app");
const navEl = document.getElementById("nav");

const ROUTES = ["dashboard", "path", "hangul", "vocab", "grammar", "topik", "stats"];

function navigate(route) {
  if (!ROUTES.includes(route)) route = "dashboard";
  window.location.hash = route;
  render();
}

function currentRoute() {
  const h = window.location.hash.replace("#", "");
  return ROUTES.includes(h) ? h : "dashboard";
}

function render() {
  touchDailyState();
  const route = currentRoute();
  document.querySelectorAll(".nav-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.route === route);
  });

  switch (route) {
    case "dashboard": renderDashboard(app); break;
    case "path": renderPath(app); break;
    case "hangul": renderHangul(app); break;
    case "vocab": renderVocab(app); break;
    case "grammar": renderGrammar(app); break;
    case "topik": renderTopik(app); break;
    case "stats": renderStats(app); break;
    default: renderDashboard(app);
}
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined) return;
    if (typeof c === "string") node.appendChild(document.createTextNode(c));
    else node.appendChild(c);
  });
  return node;
}

function toast(message, type = "success") {
  const t = el("div", { class: `toast toast-${type}` }, message);
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 2200);
}

function showAchievementPopup(achievement) {
  const popup = el("div", { class: "achievement-popup" }, [
    el("div", { class: "achievement-popup-icon" }, achievement.icon),
    el("div", { class: "achievement-popup-text" }, [
      el("div", { class: "achievement-popup-title" }, "Achievement Unlocked!"),
      el("div", { class: "achievement-popup-name" }, achievement.name),
    ]),
  ]);
  document.body.appendChild(popup);
  requestAnimationFrame(() => popup.classList.add("show"));
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 400);
  }, 3200);
}

function announceAchievements(newly) {
  newly.forEach((a, i) => setTimeout(() => showAchievementPopup(a), i * 3400));
}

/* Nav wiring */
function initNav() {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => navigate(btn.dataset.route));
  });
}

window.addEventListener("hashchange", render);

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  render();
});

