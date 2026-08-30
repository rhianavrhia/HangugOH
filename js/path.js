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


/* ===================== Unit Status ===================== */

function unitStatus(unit) {

  const lessonIds = unit.lessonIds || [];

  if (!lessonIds.length) {
    return "locked";
  }

  const completedCount =
    lessonIds.filter((id) =>
      STATE.lessonsCompleted.includes(id)
    ).length;


  /*
   * Every lesson in this unit has been completed.
   */
  if (completedCount === lessonIds.length) {
    return "completed";
  }


  /*
   * At least one lesson has been completed,
   * but the unit is not finished yet.
   */
  if (completedCount > 0) {
    return "available";
  }


  /*
   * No lessons completed yet.
   *
   * Check whether the first lesson is unlocked.
   */
  const firstLessonId = lessonIds[0];

  if (isLessonLocked(firstLessonId)) {
    return "locked";
  }

  return "available";
}


/* ===================== Unit Node ===================== */

function renderUnitNode(unit) {

  const lessonIds = unit.lessonIds || [];

  const status = unitStatus(unit);


  /*
   * Count completed lessons.
   */
  const completedCount =
    lessonIds.filter((id) =>
      STATE.lessonsCompleted.includes(id)
    ).length;


  /*
   * Total number of lessons in this unit.
   *
   * If the unit contains 5 lesson IDs,
   * this will automatically display 0/5,
   * 1/5, 2/5, etc.
   */
  const totalLessons = lessonIds.length;


  /*
   * Find the next unfinished lesson.
   */
  const nextLessonId =
    lessonIds.find(
      (id) =>
        !STATE.lessonsCompleted.includes(id)
    );


  /*
   * Choose the icon.
   */
  const icon =
    status === "completed"
      ? "✓"
      : status === "locked"
      ? "🔒"
      : unit.icon;


  /*
   * Create the Learning Path card.
   */
  const node = el(
    "button",
    {
      class: `path-node path-node-${status}`,

      disabled:
        status === "locked"
          ? "true"
          : null
    },

    [

      el(
        "div",
        {
          class: "path-node-icon"
        },
        icon
      ),


      el(
        "div",
        {
          class: "path-node-title"
        },
        unit.title
      ),


      /*
       * THIS is the progress display.
       *
       * Example:
       * 0/5 lessons
       * 1/5 lessons
       * 2/5 lessons
       * ...
       * 5/5 lessons
       */
      el(
        "div",
        {
          class: "path-node-progress"
        },
        `${completedCount}/${totalLessons} lessons`
      )

    ]
  );


  /*
   * Clicking a unit starts the NEXT
   * unfinished lesson.
   */
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
