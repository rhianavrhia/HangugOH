/* ===================== Vocabulary View ===================== */

let vocabFilter = "All";
let flashcardMode = false;
let flashcardIndex = 0;
let flashcardFlipped = false;

function renderVocab(root) {
  root.innerHTML = "";
  root.appendChild(el("h1", { class: "page-title" }, "Vocabulary"));
  root.appendChild(el("p", { class: "page-sub" }, `${Object.keys(STATE.vocabProgress).length} words learned so far`));

  const toolbar = el("div", { class: "toolbar" });
  const categories = ["All", ...new Set(VOCAB.map((v) => v.cat))];
  const filterWrap = el("div", { class: "filter-chips" },
    categories.map((c) => {
      const chip = el("button", { class: `chip ${vocabFilter === c ? "active" : ""}` }, c);
      chip.addEventListener("click", () => { vocabFilter = c; renderVocab(root); });
      return chip;
    })
  );
  const flashBtn = el("button", { class: "btn btn-secondary" }, "🗂️ Flashcard Mode");
  flashBtn.addEventListener("click", () => { flashcardMode = true; flashcardIndex = 0; flashcardFlipped = false; renderVocab(root); });
  toolbar.append(filterWrap, flashBtn);
  root.appendChild(toolbar);

  if (flashcardMode) {
    renderFlashcards(root);
    return;
  }

  const list = VOCAB.filter((v) => vocabFilter === "All" || v.cat === vocabFilter);
  const grid = el("div", { class: "vocab-grid" }, list.map((v) => vocabCard(v)));
  root.appendChild(grid);
}

function vocabCard(v) {
  const prog = STATE.vocabProgress[v.id];
  const fam = prog ? prog.familiarity : 0;
  return el("div", { class: "vocab-card" }, [
    el("div", { class: "vocab-cat" }, v.cat),
    el("div", { class: "vocab-ko" }, v.ko),
    el("div", { class: "vocab-rom" }, v.rom),
    el("div", { class: "vocab-en" }, v.en),
    el("div", { class: "vocab-example" }, [
      el("div", { class: "vocab-example-ko" }, v.ex),
      el("div", { class: "vocab-example-en" }, v.exEn),
    ]),
    el("div", { class: "familiarity-dots" }, [0, 1, 2, 3].map((i) =>
      el("span", { class: `dot ${i < fam ? "filled" : ""}` })
    )),
  ]);
}

function renderFlashcards(root) {
  const wrap = el("div", { class: "flashcard-wrap" });
  const v = VOCAB[flashcardIndex];

  const card = el("div", { class: `flashcard ${flashcardFlipped ? "flipped" : ""}` }, [
    el("div", { class: "flashcard-face flashcard-front" }, [
      el("div", { class: "vocab-cat" }, v.cat),
      el("div", { class: "vocab-ko big" }, v.ko),
      el("div", { class: "vocab-rom" }, v.rom),
      el("div", { class: "flip-hint" }, "Tap to reveal meaning"),
    ]),
    el("div", { class: "flashcard-face flashcard-back" }, [
      el("div", { class: "vocab-en big" }, v.en),
      el("div", { class: "vocab-example-ko" }, v.ex),
      el("div", { class: "vocab-example-en" }, v.exEn),
    ]),
  ]);
  card.addEventListener("click", () => { flashcardFlipped = !flashcardFlipped; renderVocabRoot(); });

  const controls = el("div", { class: "flashcard-controls" }, [
    el("button", { class: "btn btn-secondary" }, "✕ Don't Know").addEventListener ? null : null,
  ]);
  const dontKnow = el("button", { class: "btn btn-secondary" }, "✕ Don't Know");
  dontKnow.addEventListener("click", () => { markVocabSeen(v.id, false); nextFlashcard(); });
  const know = el("button", { class: "btn btn-primary" }, "✓ Know It");
  know.addEventListener("click", () => { markVocabSeen(v.id, true); const newly = checkAchievements(); announceAchievements(newly); nextFlashcard(); });
  const controlRow = el("div", { class: "flashcard-controls" }, [dontKnow, know]);

  const exitBtn = el("button", { class: "btn btn-ghost" }, "Exit Flashcards");
  exitBtn.addEventListener("click", () => { flashcardMode = false; renderVocabRoot(); });

  wrap.append(
    el("div", { class: "flashcard-progress" }, `${flashcardIndex + 1} / ${VOCAB.length}`),
    card, controlRow, exitBtn
  );
  root.appendChild(wrap);
}

function nextFlashcard() {
  flashcardFlipped = false;
  flashcardIndex = (flashcardIndex + 1) % VOCAB.length;
  renderVocabRoot();
}

function renderVocabRoot() {
  renderVocab(document.getElementById("app"));
}

