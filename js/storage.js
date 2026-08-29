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
    vocabProgress: {},      // id -> { seen, correct, familiarity(0-3) }
    achievementsUnlocked: [],
    listeningDone: 0,
    perfectLessons: 0,
    topikSetsCompleted: 0,
    weeklyActivity: {},      // 'YYYY-MM-DD' -> xp earned
    lastLessonId: null,
    onboarded: false,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

let STATE = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function dayDiff(a, b) {
  const d1 = new Date(a), d2 = new Date(b);
  return Math.round((d2 - d1) / 86400000);
}

/* Call once per app load to update streak logic */
function touchDailyState() {
  const today = todayStr();
  if (STATE.todayDate !== today) {
    STATE.todayDate = today;
    STATE.todayXP = 0;
  }
  if (STATE.lastActiveDate) {
    const diff = dayDiff(STATE.lastActiveDate, today);
    if (diff === 1) {
      // continues streak once XP earned today; no-op here
    } else if (diff > 1) {
      STATE.streak = 0;
    }
  }
  saveState();
}

function registerActivityToday() {
  const today = todayStr();
  if (STATE.lastActiveDate !== today) {
    const diff = STATE.lastActiveDate ? dayDiff(STATE.lastActiveDate, today) : null;
    if (diff === 1 || diff === null) {
      STATE.streak += 1;
    } else if (diff !== 0) {
      STATE.streak = 1;
    }
    STATE.lastActiveDate = today;
  }
  STATE.weeklyActivity[today] = (STATE.weeklyActivity[today] || 0);
}

function addXP(amount) {
  registerActivityToday();
  STATE.xp += amount;
  STATE.todayXP += amount;
  const today = todayStr();
  STATE.weeklyActivity[today] = (STATE.weeklyActivity[today] || 0) + amount;
  saveState();
}

function markVocabSeen(id, correct) {
  const v = STATE.vocabProgress[id] || { seen: 0, correct: 0, familiarity: 0 };
  v.seen += 1;
  if (correct) {
    v.correct += 1;
    v.familiarity = Math.min(3, v.familiarity + 1);
  } else {
    v.familiarity = Math.max(0, v.familiarity - 1);
  }
  STATE.vocabProgress[id] = v;
  saveState();
}

function completeLesson(lessonId, { xp, accuracy, correctCount, totalCount, newVocab, listeningCount }) {
  if (!STATE.lessonsCompleted.includes(lessonId)) {
    STATE.lessonsCompleted.push(lessonId);
  }
  STATE.lastLessonId = lessonId;
  addXP(xp);
  if (accuracy === 100) STATE.perfectLessons += 1;
  STATE.listeningDone += (listeningCount || 0);
  saveState();
  return checkAchievements();
}

function completeGrammar(grammarId) {
  if (!STATE.grammarCompleted.includes(grammarId)) {
    STATE.grammarCompleted.push(grammarId);
  }
  saveState();
  return checkAchievements();
}

function completeTopikSet() {
  STATE.topikSetsCompleted += 1;
  saveState();
  return checkAchievements();
}

function checkAchievements() {
  const newly = [];
  ACHIEVEMENTS.forEach((a) => {
    if (!STATE.achievementsUnlocked.includes(a.id) && a.check(STATE)) {
      STATE.achievementsUnlocked.push(a.id);
      newly.push(a);
    }
  });
  if (newly.length) saveState();
  return newly;
}

function isLessonLocked(lessonId) {
  // A lesson unlocks once all previous lessons in the flattened path are completed.
  const flat = [];
  PATH.forEach((section) => section.units.forEach((u) => u.lessonIds.forEach((id) => flat.push(id))));
  const idx = flat.indexOf(lessonId);
  if (idx <= 0) return false;
  const prevId = flat[idx - 1];
  return !STATE.lessonsCompleted.includes(prevId);
}

function setUserName(name) {
  STATE.name = name || "학습자";
  saveState();
}

