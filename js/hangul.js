/* ===================== Hangul View ===================== */

let hangulFilter = "All";
let hangulFlashcardMode = false;
let hangulFlashcardIndex = 0;
let hangulFlashcardFlipped = false;

function renderHangul(root) {
  root.innerHTML = "";

  root.appendChild(
    el("h1", { class: "page-title" }, "Hangul")
  );

  root.appendChild(
    el(
      "p",
      { class: "page-sub" },
      "Learn the Korean alphabet through sounds, shapes, and memory stories."
    )
  );

  /* ==================== TOOLBAR ==================== */

  const toolbar = el("div", { class: "toolbar" });

  const categories = ["All", "Consonant", "Vowel"];

  const filterWrap = el(
    "div",
    { class: "filter-chips" },
    categories.map((category) => {
      const chip = el(
        "button",
        {
          class: `chip ${
            hangulFilter === category ? "active" : ""
          }`
        },
        category === "All"
          ? "All"
          : category === "Consonant"
          ? "Consonants"
          : "Vowels"
      );

      chip.addEventListener("click", () => {
        hangulFilter = category;
        hangulFlashcardMode = false;
        hangulFlashcardIndex = 0;
        hangulFlashcardFlipped = false;
        renderHangul(root);
      });

      return chip;
    })
  );

  const flashBtn = el(
    "button",
    { class: "btn btn-secondary" },
    "🗂️ Flashcard Mode"
  );

  flashBtn.addEventListener("click", () => {
    hangulFlashcardMode = true;
    hangulFlashcardIndex = 0;
    hangulFlashcardFlipped = false;
    renderHangul(root);
  });

  toolbar.append(filterWrap, flashBtn);

  root.appendChild(toolbar);

  /* ==================== FLASHCARD MODE ==================== */

  if (hangulFlashcardMode) {
    renderHangulFlashcards(root);
    return;
  }

  /* ==================== CARD MODE ==================== */

  const list = HANGUL.filter(
    (h) =>
      hangulFilter === "All" ||
      h.type === hangulFilter
  );

  const grid = el(
    "div",
    { class: "vocab-grid" },
    list.map((h) => hangulCard(h))
  );

  root.appendChild(grid);
}


/* ===================== Hangul Card ===================== */

function hangulCard(h) {
  return el("div", { class: "vocab-card hangul-card" }, [
    el("div", { class: "vocab-cat" }, h.type),

    el(
      "div",
      { class: "vocab-ko hangul-character" },
      h.character
    ),

    el(
      "div",
      { class: "vocab-rom" },
      `${h.name} · ${h.rom}`
    ),

    el(
      "div",
      { class: "vocab-en" },
      h.sound
    ),

    el(
      "div",
      { class: "vocab-example" },
      [
        el(
          "div",
          { class: "vocab-example-ko" },
          `Example: ${h.example}`
        ),

        el(
          "div",
          { class: "vocab-example-en" },
          h.exampleMeaning
        )
      ]
    ),

    el(
      "div",
      { class: "hangul-memory" },
      [
        el(
          "div",
          { class: "hangul-memory-title" },
          h.memory
        ),

        el(
          "div",
          { class: "hangul-memory-story" },
          h.story
        )
      ]
    )
  ]);
}


/* ===================== Flashcards ===================== */

function renderHangulFlashcards(root) {
  const list = HANGUL.filter(
    (h) =>
      hangulFilter === "All" ||
      h.type === hangulFilter
  );

  /*
   * Safety check in case the filter ever produces
   * an empty list.
   */
  if (!list.length) {
    hangulFlashcardMode = false;
    renderHangul(root);
    return;
  }

  if (hangulFlashcardIndex >= list.length) {
    hangulFlashcardIndex = 0;
  }

  const h = list[hangulFlashcardIndex];

  const wrap = el("div", { class: "flashcard-wrap" });

  /* ==================== FLASHCARD ==================== */

  const card = el(
    "div",
    {
      class: `flashcard ${
        hangulFlashcardFlipped ? "flipped" : ""
      } hangul-flashcard`
    },
    [
      /* FRONT */

      el(
        "div",
        {
          class:
            "flashcard-face flashcard-front"
        },
        [
          el(
            "div",
            { class: "vocab-cat" },
            h.type
          ),

          el(
            "div",
            {
              class:
                "vocab-ko big hangul-flash-character"
            },
            h.character
          ),

          el(
            "div",
            { class: "vocab-rom" },
            h.name
          ),

          el(
            "div",
            { class: "flip-hint" },
            "Tap to reveal"
          )
        ]
      ),

      /* BACK */

      el(
        "div",
        {
          class:
            "flashcard-face flashcard-back"
        },
        [
          el(
            "div",
            {
              class:
                "vocab-en big"
            },
            h.sound
          ),

          el(
            "div",
            { class: "vocab-rom" },
            h.rom
          ),

          el(
            "div",
            {
              class:
                "vocab-example-ko"
            },
            `Example: ${h.example}`
          ),

          el(
            "div",
            {
              class:
                "vocab-example-en"
            },
            h.exampleMeaning
          ),

          el(
            "div",
            {
              class:
                "hangul-memory"
            },
            [
              el(
                "div",
                {
                  class:
                    "hangul-memory-title"
                },
                h.memory
              ),

              el(
                "div",
                {
                  class:
                    "hangul-memory-story"
                },
                h.story
              )
            ]
          )
        ]
      )
    ]
  );

  card.addEventListener("click", () => {
    hangulFlashcardFlipped =
      !hangulFlashcardFlipped;

    renderHangulRoot();
  });


  /* ==================== CONTROLS ==================== */

  const previousBtn = el(
    "button",
    { class: "btn btn-secondary" },
    "← Previous"
  );

  previousBtn.addEventListener("click", () => {
    hangulFlashcardFlipped = false;

    hangulFlashcardIndex =
      (hangulFlashcardIndex - 1 + list.length) %
      list.length;

    renderHangulRoot();
  });


  const nextBtn = el(
    "button",
    { class: "btn btn-primary" },
    "Next →"
  );

  nextBtn.addEventListener("click", () => {
    hangulFlashcardFlipped = false;

    hangulFlashcardIndex =
      (hangulFlashcardIndex + 1) %
      list.length;

    renderHangulRoot();
  });


  const controlRow = el(
    "div",
    { class: "flashcard-controls" },
    [
      previousBtn,
      nextBtn
    ]
  );


  /* ==================== EXIT ==================== */

  const exitBtn = el(
    "button",
    { class: "btn btn-ghost" },
    "Exit Flashcards"
  );

  exitBtn.addEventListener("click", () => {
    hangulFlashcardMode = false;
    hangulFlashcardIndex = 0;
    hangulFlashcardFlipped = false;

    renderHangulRoot();
  });


  /* ==================== APPEND ==================== */

  wrap.append(
    el(
      "div",
      { class: "flashcard-progress" },
      `${hangulFlashcardIndex + 1} / ${list.length}`
    ),

    card,

    controlRow,

    exitBtn
  );

  root.appendChild(wrap);
}


/* ===================== Re-render Helper ===================== */

function renderHangulRoot() {
  const root = document.getElementById("app");

  if (root) {
    renderHangul(root);
  }
}
