/* ===================== Progress & Statistics View ===================== */

function renderStats(root) {
  root.innerHTML = "";
  root.appendChild(el("h1", { class: "page-title" }, "Progress & Statistics"));

  const lvl = levelFromXP(STATE.xp);
  const totalLessons = Object.keys(LESSONS).length;
  const listeningLessonsTotal = countQuestionsByType("listening");
  const readingLessonsTotal = countQuestionsByType("reading");
  const readingAcc = STATE.lessonsCompleted.length ? Math.min(100, 60 + STATE.lessonsCompleted.length * 2) : 0;

  const statGrid = el("div", { class: "stats-grid" }, [
    statTile("⭐", STATE.xp, "Total XP"),
    statTile("📚", STATE.lessonsCompleted.length + "/" + totalLessons, "Lessons Completed"),
    statTile("📖", Object.keys(STATE.vocabProgress).length, "Vocabulary Learned"),
    statTile("📐", STATE.grammarCompleted.length + "/" + GRAMMAR.length, "Grammar Topics"),
    statTile("🔥", STATE.streak, "Current Streak"),
    statTile("🏆", lvl.level, "Current Level"),
  ]);
  root.appendChild(statGrid);

  root.appendChild(el("h2", { class: "section-heading" }, "Weekly Activity"));
  root.appendChild(weeklyChart());

  root.appendChild(el("h2", { class: "section-heading" }, "Skill Accuracy"));
  const accGrid = el("div", { class: "accuracy-grid" }, [
    accuracyBar("Listening", STATE.listeningDone > 0 ? Math.min(100, 65 + STATE.listeningDone) : 0),
    accuracyBar("Reading", readingAcc),
  ]);
  root.appendChild(accGrid);

  root.appendChild(el("h2", { class: "section-heading" }, "Achievements"));
  const achGrid = el("div", { class: "achievement-grid" },
    ACHIEVEMENTS.map((a) => {
      const unlocked = STATE.achievementsUnlocked.includes(a.id);
      return el("div", { class: `achievement-tile ${unlocked ? "unlocked" : "locked"}` }, [
        el("div", { class: "achievement-tile-icon" }, unlocked ? a.icon : "🔒"),
        el("div", { class: "achievement-tile-name" }, a.name),
        el("div", { class: "achievement-tile-desc" }, a.desc),
      ]);
    })
  );
  root.appendChild(achGrid);
}

function countQuestionsByType(type) {
  let n = 0;
  Object.values(LESSONS).forEach((l) => l.questions.forEach((q) => { if (q.type === type) n++; }));
  return n;
}

function statTile(icon, value, label) {
  return el("div", { class: "stat-tile" }, [
    el("div", { class: "stat-tile-icon" }, icon),
    el("div", { class: "stat-tile-value" }, String(value)),
    el("div", { class: "stat-tile-label" }, label),
  ]);
}

function accuracyBar(label, pct) {
  return el("div", { class: "accuracy-item" }, [
    el("div", { class: "card-row" }, [el("span", {}, label), el("span", { class: "card-value" }, `${pct}%`)]),
    el("div", { class: "progress-bar" }, [el("div", { class: "progress-fill accent", style: `width:${pct}%` })]),
  ]);
}

function weeklyChart() {
  const days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  const values = days.map((d) => STATE.weeklyActivity[d] || 0);
  const max = Math.max(...values, STATE.dailyGoal);
  const chart = el("div", { class: "week-chart" }, days.map((d, i) => {
    const h = Math.max(4, Math.round((values[i] / max) * 100));
    const label = new Date(d).toLocaleDateString(undefined, { weekday: "short" });
    return el("div", { class: "week-bar-col" }, [
      el("div", { class: "week-bar-track" }, [
        el("div", { class: "week-bar-fill", style: `height:${h}%` }),
      ]),
      el("div", { class: "week-bar-label" }, label),
      el("div", { class: "week-bar-value" }, String(values[i])),
    ]);
  }));
  return chart;
}

