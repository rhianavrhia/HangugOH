/* ===================== TOPIK Practice View ===================== */

function renderTopik(root) {
  root.innerHTML = "";
  root.appendChild(el("h1", { class: "page-title" }, "TOPIK Practice"));
  root.appendChild(el("p", { class: "page-sub" }, "Original practice material inspired by TOPIK exam formats — not official test questions."));

  const groups = { "TOPIK I": [], "TOPIK II": [] };
  TOPIK_SETS.forEach((t) => groups[t.level].push(t));

  Object.entries(groups).forEach(([level, sets]) => {
    root.appendChild(el("h2", { class: "section-heading" }, level));
    const grid = el("div", { class: "topik-grid" }, sets.map((t) => topikCard(t)));
    root.appendChild(grid);
  });

  const statsCard = el("div", { class: "card" }, [
    el("div", { class: "card-title" }, "TOPIK Progress"),
    el("div", { class: "card-row" }, [
      el("span", {}, "Practice sets completed"),
      el("span", { class: "card-value" }, `${STATE.topikSetsCompleted}`),
    ]),
  ]);
  root.appendChild(statsCard);
}

function topikCard(t) {
  const lesson = LESSONS[t.lessonId];
  const completed = STATE.lessonsCompleted.includes(t.lessonId);
  const card = el("div", { class: `topik-card ${completed ? "done" : ""}` }, [
    el("div", { class: "topik-skill" }, t.skill),
    el("div", { class: "topik-title" }, lesson.title),
    el("div", { class: "muted small" }, `${lesson.questions.length} practice questions · Original material`),
    completed ? el("span", { class: "grammar-done-check" }, "✓ Completed") : null,
  ]);
  const btn = el("button", { class: "btn btn-primary btn-block" }, completed ? "Retry Set" : "Start Practice");
  btn.addEventListener("click", () => startTopikSet(t));
  card.appendChild(btn);
  return card;
}

function startTopikSet(t) {
  startLesson(t.lessonId);
  const originalFinish = finishLesson;
  finishLesson = function () {
    completeTopikSet();
    originalFinish();
    finishLesson = originalFinish;
  };
}

