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
  const lessonIds = unit.lessonIds || [];

  if (!lessonIds.length) return "locked";

  const completedCount = lessonIds.filter((id) =>
    STATE.lessonsCompleted.includes(id)
  ).length;

  // All lessons in this unit are completed
  if (completedCount === lessonIds.length) {
    return "completed";
  }

  // At least one lesson has been completed
  // but the unit is not finished yet
  if (completedCount > 0) {
    return "available";
  }

  // Check whether the first lesson is unlocked
  const locked = isLessonLocked(lessonIds[0]);

  if (locked) return "locked";

  return "available";
}

function renderUnitNode(unit) {
  const status = unitStatus(unit);
  const lessonIds = unit.lessonIds || [];

  const completedLessons = lessonIds.filter((id) =>
    STATE.lessonsCompleted.includes(id)
  );

  const completedCount = completedLessons.length;
  const totalLessons = lessonIds.length;

  // Find the first unfinished lesson
  const nextLessonId = lessonIds.find(
    (id) => !STATE.lessonsCompleted.includes(id)
  );

  const icon =
    status === "completed"
      ? "✓"
      : status === "locked"
      ? "🔒"
      : unit.icon;

  const node = el(
    "button",
    {
      class: `path-node path-node-${status}`,
      disabled: status === "locked" ? "true" : null
    },
    [
      el("div", { class: "path-node-icon" }, icon),

      el("div", { class: "path-node-title" }, unit.title),

      el(
        "div",
        { class: "path-node-progress" },
        `${completedCount}/${totalLessons} lessons`
      )
    ]
  );

  if (status !== "locked" && nextLessonId) {
    node.addEventListener("click", () => {
      startLesson(nextLessonId);
    });
  }

  return node;
}
