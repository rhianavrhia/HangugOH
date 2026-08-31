/* ===================== Lesson Engine ===================== */

let lessonSession = null;

function startLesson(lessonId) {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;

  lessonSession = {
    lesson,
    index: 0,
    correctCount: 0,
    total: lesson.questions.length,
    listeningCount: lesson.questions.filter(
      (q) => q.type === "listening"
    ).length,
    answers: [],
  };

  /*
   * Restore previously reached Learning Path progress.
   *
   * This is stored separately from lessonsCompleted because
   * the lesson itself may contain more than 5 questions.
   */
  STATE.lessonPathProgress = STATE.lessonPathProgress || {};

  /*
   * If the lesson was already completed, it is automatically 5/5.
   */
  if (STATE.lessonsCompleted.includes(lessonId)) {
    STATE.lessonPathProgress[lessonId] = 5;
  }

  renderLessonOverlay();
}

function closeLessonOverlay() {
  const overlay = document.getElementById("lesson-overlay");
  if (overlay) overlay.remove();
  lessonSession = null;
}

function renderLessonOverlay() {
  let overlay = document.getElementById("lesson-overlay");
  if (!overlay) {
    overlay = el("div", { id: "lesson-overlay", class: "lesson-overlay" });
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = "";

  const { lesson, index, total } = lessonSession;
  const pct = Math.round((index / total) * 100);

  const header = el("div", { class: "lesson-header" }, [
    el("button", { class: "lesson-close", onclick: () => {
      if (confirm("Exit lesson? Your progress on this lesson will be lost.")) closeLessonOverlay();
    }}, "✕"),
    el("div", { class: "progress-bar lesson-progress" }, [
      el("div", { class: "progress-fill", style: `width:${pct}%` }),
    ]),
    el("div", { class: "lesson-header-title" }, lesson.title),
  ]);

  const body = el("div", { class: "lesson-body", id: "lesson-body" });
  overlay.append(header, body);
  renderQuestion(body);
}

function renderQuestion(body) {
  body.innerHTML = "";
  const { lesson, index } = lessonSession;
  const q = lesson.questions[index];
  const card = el("div", { class: "question-card" });

  const feedbackZone = el("div", { class: "feedback-zone", id: "feedback-zone" });

  let checkFn = null;

  switch (q.type) {
    case "mc": checkFn = renderMC(card, q); break;
    case "translate_ko_en": checkFn = renderTranslateKoEn(card, q); break;
    case "translate_en_ko": checkFn = renderTranslateEnKo(card, q); break;
    case "fill": checkFn = renderFill(card, q); break;
    case "arrange": checkFn = renderArrange(card, q); break;
    case "match": checkFn = renderMatch(card, q); break;
    case "reading": checkFn = renderReading(card, q); break;
    case "listening": checkFn = renderListening(card, q); break;
    default: checkFn = () => true;
  }

  const footer = el("div", { class: "lesson-footer" }, [
    el("button", { class: "btn btn-primary btn-check", id: "check-btn" }, "Check"),
  ]);

  body.append(card, feedbackZone, footer);

  const checkBtn = document.getElementById("check-btn");
  checkBtn.addEventListener("click", () => {
    if (checkBtn.dataset.state === "next") {
      advanceQuestion(body);
      return;
    }
    const result = checkFn();
    if (result === null) return; // no answer selected yet
    showFeedback(result);
    checkBtn.textContent = "Continue";
    checkBtn.dataset.state = "next";
    if (q.type === "translate_ko_en" || q.type === "translate_en_ko" || q.type === "fill" || q.type === "reading" || q.type === "listening" || q.type === "mc" || q.type === "arrange") {
      lessonSession.answers.push(result);
      if (result) lessonSession.correctCount++;
    } else if (q.type === "match") {
      lessonSession.answers.push(result);
      if (result) lessonSession.correctCount++;
    }
  });
}

function showFeedback(correct) {
  const zone = document.getElementById("feedback-zone");
  zone.innerHTML = "";
  zone.className = `feedback-zone show ${correct ? "feedback-correct" : "feedback-incorrect"}`;
  zone.appendChild(el("span", {}, correct ? "정답이에요! 🎉" : "아쉬워요! Try again next time."));
}

function getLessonPathStep() {
  if (!lessonSession) return 0;

  const { lesson, index, total } = lessonSession;

  /*
   * Five Learning Path stages for every lesson,
   * regardless of the actual number of questions.
   */
  if (total <= 0) return 0;

  const completedQuestions = Math.min(index + 1, total);

  return Math.min(
    5,
    Math.ceil((completedQuestions / total) * 5)
  );
}

function advanceQuestion(body) {
  lessonSession.index += 1;

  /*
   * Update Learning Path progress.
   *
   * Example:
   * 5 questions  → 1 question = 1/5
   * 10 questions → 2 questions = 1/5
   * 30 questions → 6 questions = 1/5
   */
  STATE.lessonPathProgress = STATE.lessonPathProgress || {};

  const progress = Math.min(
    5,
    Math.ceil(
      (lessonSession.index / lessonSession.total) * 5
    )
  );

  const lessonId = lessonSession.lesson.id;

  STATE.lessonPathProgress[lessonId] = Math.max(
    STATE.lessonPathProgress[lessonId] || 0,
    progress
  );

  /*
   * If all questions have been completed,
   * the lesson is automatically 5/5.
   */
  if (lessonSession.index >= lessonSession.total) {
    STATE.lessonPathProgress[lessonId] = 5;
    finishLesson();
    return;
  }

  /*
   * Update the lesson's internal progress bar.
   */
  const overlay = document.getElementById("lesson-overlay");
  const header = overlay.querySelector(".progress-fill");

  if (header) {
    header.style.width =
      Math.round(
        (lessonSession.index / lessonSession.total) * 100
      ) + "%";
  }

  renderQuestion(body);

  /*
   * Save state if your app provides a saveState() function.
   *
   * This check prevents an error if your project uses
   * a different persistence function.
   */
  if (typeof saveState === "function") {
    saveState();
  }
}

/* ---- Question type renderers. Each returns a checkFn () => boolean|null ---- */

function questionPrompt(card, text, sub) {
  card.appendChild(el("div", { class: "q-prompt" }, text));
  if (sub) card.appendChild(el("div", { class: "q-sub" }, sub));
}

function renderMC(card, q) {
  questionPrompt(card, q.prompt);
  const optWrap = el("div", { class: "option-grid" });
  let selected = null;
  q.options.forEach((opt) => {
    const btn = el("button", { class: "option-btn" }, opt);
    btn.addEventListener("click", () => {
      optWrap.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selected = opt;
    });
    optWrap.appendChild(btn);
  });
  card.appendChild(optWrap);
  return () => {
    if (selected === null) { toast("Choose an answer first", "info"); return null; }
    const correct = selected === q.answer;
    markOptionResult(optWrap, selected, q.answer);
    return correct;
  };
}

function markOptionResult(optWrap, selected, answer) {
  optWrap.querySelectorAll(".option-btn").forEach((b) => {
    if (b.textContent === answer) b.classList.add("correct");
    else if (b.textContent === selected) b.classList.add("incorrect");
    b.disabled = true;
  });
}

function renderTranslateKoEn(card, q) {
  questionPrompt(card, "Translate to English:", null);
  card.appendChild(el("div", { class: "q-korean" }, q.prompt));
  const input = el("input", { class: "text-input", type: "text", placeholder: "Type the English meaning..." });
  card.appendChild(input);
  return () => {
    if (!input.value.trim()) { toast("Type an answer first", "info"); return null; }
    const correct = normalize(input.value) === normalize(q.answer) || normalize(q.answer).includes(normalize(input.value));
    input.disabled = true;
    input.classList.add(correct ? "correct" : "incorrect");
    if (!correct) card.appendChild(el("div", { class: "answer-reveal" }, `Correct answer: ${q.answer}`));
    return correct;
  };
}

function renderTranslateEnKo(card, q) {
  questionPrompt(card, `Translate to Korean: "${q.prompt}"`);
  const optWrap = el("div", { class: "option-grid" });
  let selected = null;
  q.options.forEach((opt) => {
    const btn = el("button", { class: "option-btn ko-option" }, opt);
    btn.addEventListener("click", () => {
      optWrap.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selected = opt;
    });
    optWrap.appendChild(btn);
  });
  card.appendChild(optWrap);
  return () => {
    if (selected === null) { toast("Choose an answer first", "info"); return null; }
    const correct = selected === q.answer;
    markOptionResult(optWrap, selected, q.answer);
    return correct;
  };
}

function renderFill(card, q) {
  questionPrompt(card, "Fill in the blank:");
  card.appendChild(el("div", { class: "q-korean" }, q.prompt));
  const optWrap = el("div", { class: "option-grid" });
  let selected = null;
  q.options.forEach((opt) => {
    const btn = el("button", { class: "option-btn ko-option" }, opt);
    btn.addEventListener("click", () => {
      optWrap.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selected = opt;
    });
    optWrap.appendChild(btn);
  });
  card.appendChild(optWrap);
  return () => {
    if (selected === null) { toast("Choose an answer first", "info"); return null; }
    const correct = selected === q.answer;
    markOptionResult(optWrap, selected, q.answer);
    return correct;
  };
}

function renderArrange(card, q) {
  questionPrompt(card, q.prompt);
  const bank = el("div", { class: "word-bank" });
  const target = el("div", { class: "word-target" });
  let chosen = [];
  const words = shuffle([...q.words]);

  function refresh() {
    bank.innerHTML = "";
    target.innerHTML = "";
    words.forEach((w, i) => {
      if (chosen.includes(i)) return;
      const chip = el("button", { class: "word-chip" }, w);
      chip.addEventListener("click", () => { chosen.push(i); refresh(); });
      bank.appendChild(chip);
    });
    chosen.forEach((i) => {
      const chip = el("button", { class: "word-chip chosen" }, words[i]);
      chip.addEventListener("click", () => { chosen = chosen.filter((c) => c !== i); refresh(); });
      target.appendChild(chip);
    });
  }
  refresh();
  card.append(target, bank);
  return () => {
    if (!chosen.length) { toast("Arrange the words first", "info"); return null; }
    const built = chosen.map((i) => words[i]).join(" ");
    const correct = normalize(built) === normalize(q.answer);
    target.classList.add(correct ? "correct" : "incorrect");
    if (!correct) card.appendChild(el("div", { class: "answer-reveal" }, `Correct: ${q.answer}`));
    return correct;
  };
}

function renderMatch(card, q) {
  questionPrompt(card, q.prompt);
  const left = shuffle(q.pairs.map((p, i) => ({ text: p[0], i })));
  const right = shuffle(q.pairs.map((p, i) => ({ text: p[1], i })));
  const wrap = el("div", { class: "match-grid" });
  const leftCol = el("div", { class: "match-col" });
  const rightCol = el("div", { class: "match-col" });
  let selectedLeft = null;
  const matched = new Set();
  const results = [];

  left.forEach((item) => {
    const btn = el("button", { class: "match-btn" }, item.text);
    btn.addEventListener("click", () => {
      if (matched.has(item.i)) return;
      leftCol.querySelectorAll(".match-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedLeft = { item, btn };
    });
    leftCol.appendChild(btn);
  });
  right.forEach((item) => {
    const btn = el("button", { class: "match-btn" }, item.text);
    btn.addEventListener("click", () => {
      if (!selectedLeft || matched.has(item.i)) return;
      const correct = selectedLeft.item.i === item.i;
      results.push(correct);
      if (correct) {
        matched.add(item.i);
        selectedLeft.btn.classList.add("matched");
        btn.classList.add("matched");
      } else {
        btn.classList.add("wrong-flash");
        setTimeout(() => btn.classList.remove("wrong-flash"), 400);
      }
      selectedLeft = null;
      leftCol.querySelectorAll(".match-btn").forEach((b) => b.classList.remove("selected"));
    });
    rightCol.appendChild(btn);
  });
  wrap.append(leftCol, rightCol);
  card.appendChild(wrap);
  return () => {
    if (matched.size < q.pairs.length) { toast("Match all pairs first", "info"); return null; }
    const wrongAttempts = results.filter((r) => !r).length;
    return wrongAttempts === 0;
  };
}

function renderReading(card, q) {
  questionPrompt(card, "Read the passage:");
  card.appendChild(el("div", { class: "reading-passage" }, q.prompt));
  card.appendChild(el("div", { class: "q-sub" }, q.question));
  const optWrap = el("div", { class: "option-grid" });
  let selected = null;
  q.options.forEach((opt) => {
    const btn = el("button", { class: "option-btn" }, opt);
    btn.addEventListener("click", () => {
      optWrap.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selected = opt;
    });
    optWrap.appendChild(btn);
  });
  card.appendChild(optWrap);
  return () => {
    if (selected === null) { toast("Choose an answer first", "info"); return null; }
    const correct = selected === q.answer;
    markOptionResult(optWrap, selected, q.answer);
    return correct;
  };
}

function renderListening(card, q) {

  /*
   * LISTENING QUESTION
   *
   * q.prompt     = question shown to the learner
   * q.audioText  = Korean sentence/dialogue to speak
   * q.options    = answer choices
   * q.answer     = correct answer
   */

  questionPrompt(card, q.prompt);

  // ==============================
  // AUDIO BUTTON
  // ==============================

  const playBtn = el(
    "button",
    {
      class: "btn btn-secondary listen-btn",
      type: "button"
    },
    "🔊 Play Audio"
  );

  playBtn.addEventListener("click", () => {

    if (!q.audioText) {
      toast("No audio is available for this question.", "info");
      return;
    }

    speakKorean(q.audioText);

  });

  card.appendChild(playBtn);


  // ==============================
  // ANSWER OPTIONS
  // ==============================

  const optWrap = el(
    "div",
    {
      class: "option-grid"
    }
  );

  let selected = null;

  q.options.forEach((opt) => {

    const btn = el(
      "button",
      {
        class: "option-btn ko-option",
        type: "button"
      },
      opt
    );

    btn.addEventListener("click", () => {

      optWrap
        .querySelectorAll(".option-btn")
        .forEach((b) => {
          b.classList.remove("selected");
        });

      btn.classList.add("selected");

      selected = opt;

    });

    optWrap.appendChild(btn);

  });

  card.appendChild(optWrap);


  // ==============================
  // CHECK ANSWER
  // ==============================

  return () => {

    if (selected === null) {

      toast(
        "Choose an answer first",
        "info"
      );

      return null;

    }

    const correct =
      selected === q.answer;

    markOptionResult(
      optWrap,
      selected,
      q.answer
    );

    return correct;

  };

}

/* ===================== Korean Voice System ===================== */

/*
 * Browser Korean Text-to-Speech
 *
 * Uses the Korean voice installed/available
 * on the learner's device or browser.
 *
 * No API
 * No server
 * No Google Cloud
 * No billing
 */

let koreanVoice = null;


/*
 * Find the best Korean voice available.
 */
function loadKoreanVoice() {

  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();

  if (!voices.length) {
    return null;
  }

  /*
   * Find Korean voices.
   *
   * Examples:
   * ko-KR
   * ko_KR
   * ko
   */
  const koreanVoices = voices.filter((voice) => {

    const lang = (voice.lang || "").toLowerCase();

    return (
      lang === "ko-kr" ||
      lang.startsWith("ko-")
    );

  });


  /*
   * If a Korean voice exists,
   * remember it.
   */
  if (koreanVoices.length) {

    /*
     * Prefer higher-quality voices when available.
     */
    koreanVoice =
      koreanVoices.find((voice) =>
        /natural|neural|premium|enhanced|wavenet/i.test(
          voice.name
        )
      ) ||

      /*
       * Otherwise prefer a local voice.
       */
      koreanVoices.find(
        (voice) => voice.localService
      ) ||

      /*
       * Otherwise use the first Korean voice.
       */
      koreanVoices[0];

  } else {

    koreanVoice = null;

  }

  return koreanVoice;
}


/*
 * Some browsers load voices AFTER the page loads.
 *
 * This makes sure we search again when
 * the voices become available.
 */
if ("speechSynthesis" in window) {

  loadKoreanVoice();

  window.speechSynthesis.addEventListener(
    "voiceschanged",
    loadKoreanVoice
  );

}


/*
 * Speak Korean using the browser.
 */
function speakKorean(text) {

  if (!text || typeof text !== "string") {
    return;
  }


  /*
   * Check whether the browser supports speech synthesis.
   */
  if (!("speechSynthesis" in window)) {

    toast(
      "Korean audio is not supported on this device.",
      "info"
    );

    return;
  }


  /*
   * Stop any previous sentence.
   */
  window.speechSynthesis.cancel();


  /*
   * Try to find a Korean voice again.
   */
  const voice = loadKoreanVoice();


  /*
   * Create the speech.
   */
  const utterance =
    new SpeechSynthesisUtterance(text);


  /*
   * Tell the browser this is Korean.
   */
  utterance.lang = "ko-KR";


  /*
   * Use the Korean voice if one is available.
   */
  if (voice) {
    utterance.voice = voice;
  }


  /*
   * Slightly slower speech.
   *
   * This is intentional because this is
   * a Korean-learning website.
   */
  utterance.rate = 0.78;


  /*
   * Natural pitch.
   */
  utterance.pitch = 1.0;


  /*
   * Full volume.
   */
  utterance.volume = 1.0;


  /*
   * Play the Korean sentence.
   */
  window.speechSynthesis.speak(
    utterance
  );

}

function normalize(s) {
  return s.toLowerCase().replace(/[.,!?"']/g, "").trim();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function finishLesson() {
  const { lesson, correctCount, total, listeningCount } = lessonSession;

  /*
   * Completing every question means the Learning Path
   * is completely finished.
   */
  STATE.lessonPathProgress = STATE.lessonPathProgress || {};
  STATE.lessonPathProgress[lesson.id] = 5;

  const accuracy = Math.round((correctCount / total) * 100);
  const xpEarned = Math.round(lesson.xp * (accuracy / 100)) || Math.round(lesson.xp * 0.5);

  const newVocab = (lesson.vocabIds || []).filter((id) => !(STATE.vocabProgress[id]));
  (lesson.vocabIds || []).forEach((id) => markVocabSeen(id, true));

  const newlyAchieved = completeLesson(lesson.id, {
    xp: xpEarned, accuracy, correctCount, totalCount: total, newVocab, listeningCount,
  });

  renderLessonSummary(xpEarned, accuracy, correctCount, total, newVocab, newlyAchieved);
}

function renderLessonSummary(xp, accuracy, correctCount, total, newVocab, newlyAchieved) {
  const overlay = document.getElementById("lesson-overlay");
  overlay.innerHTML = "";
  const summary = el("div", { class: "summary-card" }, [
    el("div", { class: "summary-icon" }, accuracy >= 80 ? "🎉" : accuracy >= 50 ? "👍" : "💪"),
    el("h2", {}, accuracy === 100 ? "완벽해요! Perfect!" : "Lesson Complete!"),
    el("div", { class: "summary-stats" }, [
      summaryStat("Score", `${correctCount}/${total}`),
      summaryStat("XP Earned", `+${xp}`),
      summaryStat("Accuracy", `${accuracy}%`),
      summaryStat("New Vocabulary", `${newVocab.length}`),
    ]),
    el("button", { class: "btn btn-primary", onclick: () => { closeLessonOverlay(); navigate("dashboard"); } }, "Continue"),
  ]);
  overlay.appendChild(summary);
  announceAchievements(newlyAchieved);
}

function summaryStat(label, value) {
  return el("div", { class: "summary-stat" }, [
    el("div", { class: "summary-stat-value" }, value),
    el("div", { class: "summary-stat-label" }, label),
  ]);
}

