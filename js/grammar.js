/* ===================== Grammar View ===================== */

function renderGrammar(root) {
  root.innerHTML = "";
  root.appendChild(el("h1", { class: "page-title" }, "Grammar Library"));
  root.appendChild(el("p", { class: "page-sub" }, `${STATE.grammarCompleted.length} of ${GRAMMAR.length} topics completed`));

  const levels = ["Beginner", "Intermediate", "Formal"];
  levels.forEach((level) => {
    const items = GRAMMAR.filter((g) => g.level === level);
    if (!items.length) return;
    root.appendChild(el("h2", { class: "section-heading" }, level));
    const grid = el("div", { class: "grammar-grid" }, items.map((g) => grammarCard(g)));
    root.appendChild(grid);
  });
}

function grammarCard(g) {
  const done = STATE.grammarCompleted.includes(g.id);
  const card = el("div", { class: `grammar-card ${done ? "done" : ""}` }, [
    el("div", { class: "grammar-header" }, [
      el("span", { class: "grammar-pattern" }, g.pattern),
      done ? el("span", { class: "grammar-done-check" }, "✓") : null,
    ]),
    el("div", { class: "grammar-meaning" }, g.meaning),
    el("p", { class: "grammar-explanation" }, g.explanation),
    el("div", { class: "grammar-examples" }, g.examples.map((ex) =>
      el("div", { class: "grammar-example" }, [
        el("div", { class: "grammar-example-ko" }, ex.ko),
        el("div", { class: "grammar-example-en" }, ex.en),
      ])
    )),
  ]);
  const practiceBtn = el("button", { class: "btn btn-secondary btn-block" }, done ? "Practice Again" : "Try Practice");
  card.appendChild(practiceBtn);
  practiceBtn.addEventListener("click", () => openGrammarPractice(g));
  return card;
}

function openGrammarPractice(g) {
  const overlay = el("div", { class: "modal-overlay" });
  const p = g.practice;
  let selected = null;
  const optWrap = el("div", { class: "option-grid" });
  p.options.forEach((opt) => {
    const btn = el("button", { class: "option-btn ko-option" }, opt);
    btn.addEventListener("click", () => {
      optWrap.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selected = opt;
    });
    optWrap.appendChild(btn);
  });

  const feedback = el("div", { class: "feedback-zone" });
  const checkBtn = el("button", { class: "btn btn-primary" }, "Check");
  checkBtn.addEventListener("click", () => {
    if (checkBtn.dataset.state === "next") { overlay.remove(); return; }
    if (selected === null) { toast("Choose an answer first", "info"); return; }
    const correct = selected === p.answer;
    optWrap.querySelectorAll(".option-btn").forEach((b) => {
      if (b.textContent === p.answer) b.classList.add("correct");
      else if (b.textContent === selected) b.classList.add("incorrect");
      b.disabled = true;
    });
    feedback.className = `feedback-zone show ${correct ? "feedback-correct" : "feedback-incorrect"}`;
    feedback.textContent = correct ? "정답이에요! 🎉" : "아쉬워요! Try again.";
    if (correct) {
      const newly = completeGrammar(g.id);
      announceAchievements(newly);
    }
    checkBtn.textContent = "Close";
    checkBtn.dataset.state = "next";
  });

  const modal = el("div", { class: "modal-card" }, [
    el("button", { class: "modal-close", onclick: () => overlay.remove() }, "✕"),
    el("div", { class: "q-prompt" }, `Practice: ${g.pattern}`),
    el("div", { class: "q-korean" }, p.prompt),
    optWrap, feedback, checkBtn,
  ]);
  overlay.appendChild(modal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

