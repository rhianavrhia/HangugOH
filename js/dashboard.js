/* ===================== Dashboard View ===================== */

function renderDashboard(root) {
  root.innerHTML = "";
  const lvl = levelFromXP(STATE.xp);
  const goalPct = Math.min(100, Math.round((STATE.todayXP / STATE.dailyGoal) * 100));
  const totalLessons = Object.keys(LESSONS).length;
  const overallPct = Math.round((STATE.lessonsCompleted.length / totalLessons) * 100);

  const nextLesson = findNextLesson();
  const recentAchievements = STATE.achievementsUnlocked.slice(-3).reverse()
    .map((id) => ACHIEVEMENTS.find((a) => a.id === id)).filter(Boolean);

  const hero = el("section", { class: "hero-card" }, [
    el("div", { class: "hero-text" }, [
      el("h1", { class: "hero-greeting" }, `안녕하세요, ${STATE.name}님! 👋`),
      el("p", { class: "hero-sub" }, "Ready to continue your Korean journey?"),
      el("div", { class: "hero-stats" }, [
        statPill("🔥", `${STATE.streak} Day Streak`),
        statPill("⭐", `${STATE.xp} XP`),
        statPill("📚", `Level ${lvl.level}`),
      ]),
    ]),
    el("div", { class: "hero-decor" }, "한"),
  ]);

  const goalCard = el("div", { class: "card goal-card" }, [
    el("div", { class: "card-row" }, [
      el("span", { class: "card-title" }, "Today's Goal"),
      el("span", { class: "card-value" }, `${STATE.todayXP} / ${STATE.dailyGoal} XP`),
    ]),
    el("div", { class: "progress-bar" }, [
      el("div", { class: "progress-fill", style: `width:${goalPct}%` }),
    ]),
  ]);
  goalCard.querySelector(".progress-fill").style.width = goalPct + "%";

  const continueCard = el("div", { class: "card continue-card" }, [
    el("div", { class: "continue-info" }, [
      el("span", { class: "eyebrow" }, "Today's Lesson"),
      el("h3", {}, nextLesson ? nextLesson.title : "All lessons complete! 🎉"),
      el("p", { class: "muted" }, nextLesson ? `${unitTitle(nextLesson.unit)} · +${nextLesson.xp} XP` : "Review vocabulary or try a TOPIK set."),
    ]),
    el("button", { class: "btn btn-primary", onclick: () => {
      if (nextLesson) startLesson(nextLesson.id); else navigate("path");
    }}, nextLesson ? "Continue Learning" : "Explore Path"),
  ]);

  const progressCard = el("div", { class: "card" }, [
    el("div", { class: "card-row" }, [
      el("span", { class: "card-title" }, "Overall Progress"),
      el("span", { class: "card-value" }, `${overallPct}%`),
    ]),
    el("div", { class: "progress-bar" }, [
      el("div", { class: "progress-fill accent", style: `width:${overallPct}%` }),
    ]),
    el("p", { class: "muted small" }, `${STATE.lessonsCompleted.length} of ${totalLessons} lessons completed`),
  ]);

  const achCard = el("div", { class: "card" }, [
    el("div", { class: "card-row" }, [
      el("span", { class: "card-title" }, "Recent Achievements"),
      el("a", { class: "link", onclick: () => navigate("stats") }, "View all"),
    ]),
    el("div", { class: "achievement-row" },
      recentAchievements.length
        ? recentAchievements.map((a) => badge(a))
        : [el("p", { class: "muted small" }, "Complete a lesson to earn your first badge!")]
    ),
  ]);

  const grid = el("div", { class: "dashboard-grid" }, [goalCard, continueCard, progressCard, achCard]);

  root.append(hero, grid);
}

function statPill(icon, text) {
  return el("span", { class: "stat-pill" }, [el("span", {}, icon), el("span", {}, " " + text)]);
}

function badge(a) {
  return el("div", { class: "badge", title: a.desc }, [
    el("span", { class: "badge-icon" }, a.icon),
    el("span", { class: "badge-name" }, a.name),
  ]);
}

function unitTitle(unitId) {
  for (const section of PATH) {
    const u = section.units.find((x) => x.id === unitId);
    if (u) return u.title;
  }
  return "";
}

function findNextLesson() {
  const flat = [];
  PATH.forEach((section) => section.units.forEach((u) => u.lessonIds.forEach((id) => flat.push(id))));
  for (const id of flat) {
    if (!STATE.lessonsCompleted.includes(id)) return LESSONS[id];
  }
  return null;
}

