/* ===================== TOPIK Practice View ===================== */

function renderTopik(root) {
  root.innerHTML = "";

  root.appendChild(
    el("h1", { class: "page-title" }, "TOPIK Practice")
  );

  root.appendChild(
    el(
      "p",
      { class: "page-sub" },
      "Practice original questions inspired by TOPIK exam formats."
    )
  );

  const groups = {
    "TOPIK I": [],
    "TOPIK II": []
  };

  TOPIK_SETS.forEach((t) => {
    if (groups[t.level]) {
      groups[t.level].push(t);
    }
  });

  Object.entries(groups).forEach(([level, sets]) => {

    /* ==================== LEVEL HEADER ==================== */

    root.appendChild(
      el(
        "div",
        { class: "topik-level-header" },
        [
          el(
            "h2",
            { class: "section-heading" },
            level
          ),

          el(
            "p",
            { class: "muted small" },
            level === "TOPIK I"
              ? "Beginner-level reading and listening practice."
              : "Intermediate to advanced reading, listening, and writing practice."
          )
        ]
      )
    );


    /* ==================== SET GRID ==================== */

    const grid = el(
      "div",
      { class: "topik-grid" },
      sets.map((t) => topikCard(t))
    );

    root.appendChild(grid);
  });


  /* ==================== PROGRESS ==================== */

  const statsCard = el(
    "div",
    { class: "card topik-progress-card" },
    [
      el(
        "div",
        { class: "card-title" },
        "TOPIK Progress"
      ),

      el(
        "div",
        { class: "card-row" },
        [
          el(
            "span",
            {},
            "Practice sets completed"
          ),

          el(
            "span",
            { class: "card-value" },
            `${STATE.topikSetsCompleted}`
          )
        ]
      )
    ]
  );

  root.appendChild(statsCard);
}


/* ===================== TOPIK CARD ===================== */

function topikCard(t) {

  const lesson = LESSONS[t.lessonId];

  if (!lesson) {
    console.warn(
      `TOPIK set "${t.id}" references missing lesson "${t.lessonId}".`
    );
    return el(
      "div",
      { class: "topik-card" },
      "Practice set unavailable."
    );
  }

  const completed =
    STATE.lessonsCompleted.includes(t.lessonId);

  const card = el(
    "div",
    {
      class:
        `topik-card ${completed ? "done" : ""}`
    },
    [
      /* Skill */

      el(
        "div",
        { class: "topik-skill" },
        t.skill
      ),

      /* Title */

      el(
        "div",
        { class: "topik-title" },
        t.title || lesson.title
      ),

      /* Description */

      el(
        "div",
        { class: "muted small" },
        `${lesson.questions.length} questions · Original practice material`
      ),

      /* Mock badge */

      t.mock
        ? el(
            "span",
            { class: "topik-mock-badge" },
            "📝 Shortened Mock"
          )
        : null,

      /* Completed */

      completed
        ? el(
            "span",
            { class: "grammar-done-check" },
            "✓ Completed"
          )
        : null
    ]
  );


  /* ==================== BUTTON ==================== */

  const btn = el(
    "button",
    {
      class: "btn btn-primary btn-block"
    },
    completed
      ? "Retry Practice"
      : "Start Practice"
  );

  btn.addEventListener(
    "click",
    () => startTopikSet(t)
  );

  card.appendChild(btn);

  return card;
}


/* ===================== START TOPIK SET ===================== */

function startTopikSet(t) {

  const lesson = LESSONS[t.lessonId];

  if (!lesson) {
    toast(
      "This practice set is unavailable.",
      "error"
    );
    return;
  }

  startLesson(t.lessonId);

  const originalFinish = finishLesson;

  finishLesson = function () {

    completeTopikSet();

    originalFinish();

    finishLesson = originalFinish;
  };
}
