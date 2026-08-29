/* ===================== Onboarding (first-visit name prompt) ===================== */

function maybeShowOnboarding() {
  if (STATE.onboarded) return;
  const overlay = el("div", { class: "modal-overlay" });
  const input = el("input", { class: "text-input", type: "text", placeholder: "e.g. 지나 or Jina" });
  const startBtn = el("button", { class: "btn btn-primary btn-block" }, "Start Learning");
  startBtn.addEventListener("click", () => {
    setUserName(input.value.trim());
    STATE.onboarded = true;
    saveState();
    overlay.remove();
    render();
  });
  const modal = el("div", { class: "modal-card onboarding-card" }, [
    el("div", { class: "onboarding-mark" }, "한"),
    el("h2", {}, "환영합니다! Welcome to 한국OH!"),
    el("p", { class: "muted" }, "What should we call you on your Korean learning journey?"),
    input,
    startBtn,
  ]);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(maybeShowOnboarding, 50);
});

