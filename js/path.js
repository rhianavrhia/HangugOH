/* ===================== Learning Path View ===================== */

function renderPath(root) {
  root.innerHTML = "";
  root.appendChild(el("h1", { class: "page-title" }, "Learning Path"));
  root.appendChild(el("p", { class: "page-sub" }, "Learn → Practice → Review → Track Progress → Level Up"));

  const container = el("div", { class: "path-container" });

  PATH.forEach((section) => {
    const sectionEl = el("div", { class: "path-section" }, [
      el("h2", { class: "path-section-title" }, section.section),
      el("div", { class: "path-units" },
        section.units.map((unit) => renderUnitNode(unit))
      ),
    ]);
    container.appendChild(sectionEl);
  });

  root.appendChild(container);
}

function unitStatus(unit) {
  const lessonId = unit.lessonIds[0];
  const completed = STATE.lessonsCompleted.includes(lessonId);
  const locked = isLessonLocked(lessonId);
  if (completed) return "completed";
  if (locked) return "locked";
  return "available";
}

function renderUnitNode(unit) {
  const status = unitStatus(unit);
  const lessonId = unit.lessonIds[0];
  const node = el("button", { class: `path-node path-node-${status}`, disabled: status === "locked" ? "true" : null }, [
    el("div", { class: "path-node-icon" }, status === "completed" ? "✓" : status === "locked" ? "🔒" : unit.icon),
    el("div", { class: "path-node-title" }, unit.title),
  ]);
  if (status !== "locked") {
    node.addEventListener("click", () => startLesson(lessonId));
  }
  return node;
}

