/* ===================== Learning Path View ===================== */

function renderPath(root) {
  root.innerHTML = "";

  root.appendChild(
    el("h1", { class: "page-title" }, "Learning Path")
  );

  root.appendChild(
    el(
      "p",
      { class: "page-sub" },
      "Learn → Practice → Review → Track Progress → Level Up"
    )
  );

  const container = el("div", {
    class: "path-container"
  });

  PATH.forEach((section) => {

    const sectionEl = el(
      "div",
      { class: "path-section" },
      [
        el(
          "h2",
          { class: "path-section-title" },
          section.section
        ),

        el(
          "div",
          { class: "path-units" },

          section.units.map((unit) =>
            renderUnitNode(unit)
          )
        )
      ]
    );

    container.appendChild(sectionEl);
  });

  root.appendChild(container);
}

function getUnitProgress(unit) {
  const lessonIds = unit.lessonIds || [];

  if (!lessonIds.length) {
    return {
      completed: 0,
      total: 5,
      percent: 0,
    };
  }

  /*
   * A unit currently contains one lesson.
   *
   * If more lessons are added to a unit later,
   * their progress will be averaged into the unit.
   */
  let totalProgress = 0;

  lessonIds.forEach((lessonId) => {
    /*
     * Completed lessons are always 5/5.
     */
    if (STATE.lessonsCompleted.includes(lessonId)) {
      totalProgress += 5;
      return;
    }

    /*
     * Otherwise use the saved partial progress.
     */
    const savedProgress =
      STATE.lessonPathProgress &&
      STATE.lessonPathProgress[lessonId]
        ? STATE.lessonPathProgress[lessonId]
        : 0;

    totalProgress += Math.min(5, savedProgress);
  });

  /*
   * Convert multiple lessons into a single 5-step unit.
   */
  const averageProgress =
    totalProgress / lessonIds.length;

  const completed = Math.round(averageProgress);

  return {
    completed: Math.min(5, completed),
    total: 5,
    percent: Math.min(
      100,
      Math.round((averageProgress / 5) * 100)
    ),
  };
}


function unitStatus(unit) {
  const lessonIds = unit.lessonIds || [];

  if (!lessonIds.length) {
    return "locked";
  }

  const progress = getUnitProgress(unit);

  /*
   * Completely finished.
   */
  if (progress.completed >= 5) {
    return "completed";
  }

  /*
   * Check whether the first lesson is unlocked.
   */
  const firstLessonId = lessonIds[0];
  const locked = isLessonLocked(firstLessonId);

  if (locked && progress.completed === 0) {
    return "locked";
  }

  return "available";
}


function renderUnitNode(unit) {
  const status = unitStatus(unit);
  const lessonIds = unit.lessonIds || [];

  const progress = getUnitProgress(unit);

  /*
   * Find the first unfinished lesson.
   */
  const nextLessonId =
    lessonIds.find(
      (id) => !STATE.lessonsCompleted.includes(id)
    ) || lessonIds[0];

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
      disabled: status === "locked" ? "true" : null,
    },
    [
      el(
        "div",
        { class: "path-node-icon" },
        icon
      ),

      el(
        "div",
        { class: "path-node-title" },
        unit.title
      ),

      el(
        "div",
        { class: "path-node-progress" },
        `${progress.completed}/5`
      ),

      /*
       * Visual progress bar inside the node.
       */
      el(
        "div",
        { class: "path-node-progress-bar" },
        [
          el(
            "div",
            {
              class: "path-node-progress-fill",
              style: `width:${progress.percent}%`,
            }
          ),
        ]
      ),
    ]
  );

  if (status !== "locked" && nextLessonId) {
    node.addEventListener("click", () => {
      startLesson(nextLessonId);
    });
  }

  return node;
}


  if (
    status !== "locked" &&
    nextLessonId
  ) {

    node.addEventListener(
      "click",
      () => {
        startLesson(nextLessonId);
      }
    );

  }


  return node;
}
