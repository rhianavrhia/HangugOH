/* ===================== State & Persistence ===================== */

const STORAGE_KEY = "hangukoh_state_v1";

function defaultState() {
  return {
    name: "학습자",

    xp: 0,
    streak: 0,
    lastActiveDate: null,

    dailyGoal: 20,
    todayXP: 0,
    todayDate: null,

    lessonsCompleted: [],
    grammarCompleted: [],

    vocabProgress: {},

    achievementsUnlocked: [],

    listeningDone: 0,
    perfectLessons: 0,
    topikSetsCompleted: 0,

    weeklyActivity: {},

    lastLessonId: null,

    /* =====================
       ONBOARDING
       ===================== */

    onboarded: false,

    // foundation | beginner | intermediate | topik
    startingLevel: null,

    // l1 | l26 | l51 | l76
    startingLesson: null
  };
}


/* =====================
   LOAD STATE
   ===================== */

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return defaultState();
    }

    const parsed = JSON.parse(raw);

    return Object.assign(defaultState(), parsed);

  } catch (e) {
    console.error("Could not load saved state:", e);
    return defaultState();
  }
}


let STATE = loadState();


/* =====================
   SAVE STATE
   ===================== */

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(STATE)
  );
}


/* =====================
   DATE HELPERS
   ===================== */

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}


function dayDiff(a, b) {
  const d1 = new Date(a);
  const d2 = new Date(b);

  return Math.round(
    (d2 - d1) / 86400000
  );
}


/* =====================
   DAILY STATE
   ===================== */

function touchDailyState() {

  const today = todayStr();

  if (STATE.todayDate !== today) {
    STATE.todayDate = today;
    STATE.todayXP = 0;
  }

  if (STATE.lastActiveDate) {

    const diff = dayDiff(
      STATE.lastActiveDate,
      today
    );

    if (diff > 1) {
      STATE.streak = 0;
    }
  }

  saveState();
}


/* =====================
   ACTIVITY
   ===================== */

function registerActivityToday() {

  const today = todayStr();

  if (STATE.lastActiveDate !== today) {

    const diff = STATE.lastActiveDate
      ? dayDiff(STATE.lastActiveDate, today)
      : null;

    if (diff === 1 || diff === null) {
      STATE.streak += 1;
    } else {
      STATE.streak = 1;
    }

    STATE.lastActiveDate = today;
  }

  STATE.weeklyActivity[today] =
    STATE.weeklyActivity[today] || 0;
}


/* =====================
   XP
   ===================== */

function addXP(amount) {

  registerActivityToday();

  STATE.xp += amount;
  STATE.todayXP += amount;

  const today = todayStr();

  STATE.weeklyActivity[today] =
    (STATE.weeklyActivity[today] || 0) + amount;

  saveState();
}


/* =====================
   VOCABULARY
   ===================== */

function markVocabSeen(id, correct) {

  const v =
    STATE.vocabProgress[id] || {
      seen: 0,
      correct: 0,
      familiarity: 0
    };

  v.seen += 1;

  if (correct) {

    v.correct += 1;

    v.familiarity =
      Math.min(
        3,
        v.familiarity + 1
      );

  } else {

    v.familiarity =
      Math.max(
        0,
        v.familiarity - 1
      );
  }

  STATE.vocabProgress[id] = v;

  saveState();
}


/* =====================
   LESSON COMPLETION
   ===================== */

function completeLesson(
  lessonId,
  {
    xp,
    accuracy,
    correctCount,
    totalCount,
    newVocab,
    listeningCount
  }
) {

  if (
    !STATE.lessonsCompleted.includes(
      lessonId
    )
  ) {

    STATE.lessonsCompleted.push(
      lessonId
    );
  }

  STATE.lastLessonId = lessonId;

  addXP(xp);

  if (accuracy === 100) {
    STATE.perfectLessons += 1;
  }

  STATE.listeningDone +=
    (listeningCount || 0);

  saveState();

  return checkAchievements();
}


/* =====================
   GRAMMAR
   ===================== */

function completeGrammar(grammarId) {

  if (
    !STATE.grammarCompleted.includes(
      grammarId
    )
  ) {

    STATE.grammarCompleted.push(
      grammarId
    );
  }

  saveState();

  return checkAchievements();
}


/* =====================
   TOPIK
   ===================== */

function completeTopikSet() {

  STATE.topikSetsCompleted += 1;

  saveState();

  return checkAchievements();
}


/* =====================
   ACHIEVEMENTS
   ===================== */

function checkAchievements() {

  const newly = [];

  ACHIEVEMENTS.forEach((a) => {

    if (
      !STATE.achievementsUnlocked.includes(
        a.id
      ) &&
      a.check(STATE)
    ) {

      STATE.achievementsUnlocked.push(
        a.id
      );

      newly.push(a);
    }
  });

  if (newly.length) {
    saveState();
  }

  return newly;
}


/* =========================================================
   LEARNING PATH STATE
   ========================================================= */


/*
 * Creates one flat list of all lessons
 * in the exact order of PATH.
 */
function getFlatLessonIds() {

  const flat = [];

  PATH.forEach((section) => {

    section.units.forEach((unit) => {

      unit.lessonIds.forEach((id) => {
        flat.push(id);
      });

    });

  });

  return flat;
}


/*
 * Returns the learner's starting lesson index.
 */
function getStartingLessonIndex() {

  if (!STATE.startingLesson) {
    return 0;
  }

  const flat = getFlatLessonIds();

  const index =
    flat.indexOf(
      STATE.startingLesson
    );

  return index >= 0 ? index : 0;
}


/*
 * Returns the state of a lesson.
 *
 * Possible states:
 *
 * "skipped"
 * "completed"
 * "available"
 * "locked"
 */
function getLessonPathState(lessonId) {

  const flat = getFlatLessonIds();

  const index =
    flat.indexOf(lessonId);

  if (index < 0) {
    return "locked";
  }


  /* =====================
     COMPLETED
     ===================== */

  if (
    STATE.lessonsCompleted.includes(
      lessonId
    )
  ) {

    return "completed";
  }


  /* =====================
     BEFORE STARTING LEVEL
     ===================== */

  if (STATE.startingLesson) {

    const startIndex =
      getStartingLessonIndex();

    if (index < startIndex) {

      /*
       * These lessons belong to a level
       * the learner skipped during onboarding.
       *
       * They remain REVIEWABLE rather than
       * appearing completely inaccessible.
       */

      return "skipped";
    }
  }


  /* =====================
     FIRST AVAILABLE LESSON
     ===================== */

  if (index === 0) {
    return "available";
  }


  /* =====================
     STARTING LESSON
     ===================== */

  if (
    STATE.startingLesson &&
    lessonId === STATE.startingLesson
  ) {

    return "available";
  }


  /* =====================
     SEQUENTIAL UNLOCKING
     ===================== */

  const previousId =
    flat[index - 1];

  if (
    STATE.lessonsCompleted.includes(
      previousId
    )
  ) {

    return "available";
  }


  /* =====================
     LOCKED
     ===================== */

  return "locked";
}


/*
 * Compatibility function.
 *
 * Other parts of the application can
 * continue using isLessonLocked().
 */
function isLessonLocked(lessonId) {

  return (
    getLessonPathState(lessonId) ===
    "locked"
  );
}


/* =====================
   USER NAME
   ===================== */

function setUserName(name) {

  STATE.name =
    name || "학습자";

  saveState();
}
