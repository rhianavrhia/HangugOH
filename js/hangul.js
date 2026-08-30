/* ===================== HANGUL LEARNING ===================== */

let hangulMode = "cards";
let hangulFilter = "all";
let hangulFlashIndex = 0;
let hangulFlashRevealed = false;


/* ============================================================
   GET FILTERED HANGUL
============================================================ */

function getHangulItems() {
  if (hangulFilter === "all") {
    return HANGUL;
  }

  return HANGUL.filter(item => item.type === hangulFilter);
}


/* ============================================================
   RENDER HANGUL TAB
============================================================ */

function renderHangul() {
  const container = document.getElementById("hangul-content");

  if (!container) {
    console.warn("Hangul container #hangul-content was not found.");
    return;
  }

  if (hangulMode === "flashcards") {
    renderHangulFlashcards(container);
  } else {
    renderHangulCards(container);
  }
}


/* ============================================================
   NORMAL CARD MODE
============================================================ */

function renderHangulCards(container) {
  const items = getHangulItems();

  container.innerHTML = `
    <div class="hangul-toolbar">

      <div class="hangul-filters">
        <button
          class="hangul-filter ${hangulFilter === "all" ? "active" : ""}"
          data-filter="all"
        >
          All
        </button>

        <button
          class="hangul-filter ${hangulFilter === "consonant" ? "active" : ""}"
          data-filter="consonant"
        >
          Consonants
        </button>

        <button
          class="hangul-filter ${hangulFilter === "vowel" ? "active" : ""}"
          data-filter="vowel"
        >
          Vowels
        </button>
      </div>

      <button id="hangul-flashcard-btn" class="hangul-mode-btn">
        🃏 Flashcard Mode
      </button>

    </div>

    <div class="hangul-grid">
      ${items.map(item => createHangulCard(item)).join("")}
    </div>
  `;

  attachHangulCardEvents();
}


/* ============================================================
   CREATE NORMAL CARD
============================================================ */

function createHangulCard(item) {
  return `
    <div class="hangul-card" data-id="${item.id}">

      <div class="hangul-card-character">
        ${item.char}
      </div>

      <div class="hangul-card-name">
        ${item.name}
      </div>

      <div class="hangul-card-sound">
        ${item.sound}
      </div>

      <div class="hangul-card-divider"></div>

      <div class="hangul-card-mnemonic">
        <strong>💡 ${item.mnemonic}</strong>
      </div>

      <div class="hangul-card-story">
        ${item.story}
      </div>

    </div>
  `;
}


/* ============================================================
   CARD EVENTS
============================================================ */

function attachHangulCardEvents() {

  document.querySelectorAll(".hangul-filter").forEach(button => {

    button.addEventListener("click", () => {

      hangulFilter = button.dataset.filter;

      renderHangul();

    });

  });


  const flashcardButton =
    document.getElementById("hangul-flashcard-btn");

  if (flashcardButton) {

    flashcardButton.addEventListener("click", () => {

      hangulMode = "flashcards";
      hangulFlashIndex = 0;
      hangulFlashRevealed = false;

      renderHangul();

    });

  }

}


/* ============================================================
   FLASHCARD MODE
============================================================ */

function renderHangulFlashcards(container) {

  const items = getHangulItems();

  if (!items.length) {
    container.innerHTML = `
      <p>No Hangul items found.</p>
    `;
    return;
  }

  const item = items[hangulFlashIndex];

  container.innerHTML = `

    <div class="hangul-flashcard-wrapper">

      <div class="hangul-flashcard-progress">
        ${hangulFlashIndex + 1} / ${items.length}
      </div>

      <div
        class="hangul-flashcard ${hangulFlashRevealed ? "revealed" : ""}"
        id="hangul-flashcard"
      >

        ${
          hangulFlashRevealed
            ? `
              <div class="hangul-flashcard-character">
                ${item.char}
              </div>

              <div class="hangul-flashcard-name">
                ${item.name}
              </div>

              <div class="hangul-flashcard-sound">
                ${item.sound}
              </div>

              <div class="hangul-flashcard-mnemonic">
                💡 ${item.mnemonic}
              </div>

              <div class="hangul-flashcard-story">
                ${item.story}
              </div>
            `
            : `
              <div class="hangul-flashcard-question">
                <div class="hangul-flashcard-hidden">
                  ?
                </div>

                <p>What Hangul character is this?</p>

                <small>
                  Click the card to reveal
                </small>
              </div>
            `
        }

      </div>


      <div class="hangul-flashcard-controls">

        <button
          id="hangul-prev"
          class="hangul-nav-btn"
          ${hangulFlashIndex === 0 ? "disabled" : ""}
        >
          ← Previous
        </button>

        <button
          id="hangul-reveal"
          class="hangul-reveal-btn"
        >
          ${hangulFlashRevealed ? "Hide Answer" : "Reveal Answer"}
        </button>

        <button
          id="hangul-next"
          class="hangul-nav-btn"
          ${hangulFlashIndex === items.length - 1 ? "disabled" : ""}
        >
          Next →
        </button>

      </div>


      <div class="hangul-flashcard-footer">

        <button
          id="hangul-exit-flashcards"
          class="hangul-exit-btn"
        >
          ← Back to Hangul Cards
        </button>

      </div>

    </div>
  `;

  attachHangulFlashcardEvents();
}


/* ============================================================
   FLASHCARD EVENTS
============================================================ */

function attachHangulFlashcardEvents() {

  const card =
    document.getElementById("hangul-flashcard");

  const revealButton =
    document.getElementById("hangul-reveal");

  const previousButton =
    document.getElementById("hangul-prev");

  const nextButton =
    document.getElementById("hangul-next");

  const exitButton =
    document.getElementById("hangul-exit-flashcards");


  /* Click card to reveal */

  if (card) {

    card.addEventListener("click", () => {

      hangulFlashRevealed =
        !hangulFlashRevealed;

      renderHangul();

    });

  }


  /* Reveal button */

  if (revealButton) {

    revealButton.addEventListener("click", () => {

      hangulFlashRevealed =
        !hangulFlashRevealed;

      renderHangul();

    });

  }


  /* Previous */

  if (previousButton) {

    previousButton.addEventListener("click", () => {

      if (hangulFlashIndex > 0) {

        hangulFlashIndex--;

        hangulFlashRevealed = false;

        renderHangul();

      }

    });

  }


  /* Next */

  if (nextButton) {

    nextButton.addEventListener("click", () => {

      const items = getHangulItems();

      if (hangulFlashIndex < items.length - 1) {

        hangulFlashIndex++;

        hangulFlashRevealed = false;

        renderHangul();

      }

    });

  }


  /* Exit */

  if (exitButton) {

    exitButton.addEventListener("click", () => {

      hangulMode = "cards";

      hangulFlashIndex = 0;

      hangulFlashRevealed = false;

      renderHangul();

    });

  }

}


/* ============================================================
   PUBLIC INITIALIZER
============================================================ */

function initHangul() {

  const container =
    document.getElementById("hangul-content");

  if (!container) {
    console.warn(
      "Hangul tab exists, but #hangul-content was not found."
    );

    return;
  }

  renderHangul();

}


/* ============================================================
   EXPOSE FUNCTIONS
============================================================ */

window.initHangul = initHangul;
window.renderHangul = renderHangul;
