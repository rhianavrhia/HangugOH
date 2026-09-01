# AGENTS.md

## What this is

한국OH! is a single-page, client-only Korean learning app. There is no backend, no build tool, and no framework — plain HTML/CSS/JS. All state lives in `localStorage`.

## Architecture

- `index.html` — app shell: sidebar nav (desktop) + bottom nav (mobile), and a single `#app` mount point that views render into.
- `css/style.css` — the entire design system (CSS variables, components, responsive rules). One file by design; keep new component styles organized by section comment.
- `js/data.js` — static content: `VOCAB`, `GRAMMAR`, `PATH` (learning path sections/units), `LESSONS` (question sets per lesson), `TOPIK_SETS`, `ACHIEVEMENTS`. This is the file to edit to add lessons, vocabulary, or grammar points.
- - `js/storage.js` — the single source of truth for user progress and learner settings (`STATE`), loaded from and saved to `localStorage` under key `hangukoh_state_v1`. In addition to XP, streaks, vocabulary familiarity, completed lessons, and achievements, state stores the learner's selected `startingLevel` and corresponding `startingLesson`. Progress-affecting mutations go through functions here (`addXP`, `markVocabSeen`, `completeLesson`, etc.) so state stays consistent and is persisted after changes.
- `js/app.js` — hash-based router (`#dashboard`, `#path`, `#vocab`, `#grammar`, `#topik`, `#stats`), a tiny `el()` DOM-builder helper used everywhere instead of template strings, and shared UI helpers (`toast`, achievement popups).
- `js/dashboard.js`, `js/path.js`, `js/vocab.js`, `js/grammar.js`, `js/topik.js`, `js/stats.js` — one file per view; each exports a `render<View>(root)` function called by the router.
- `js/lesson.js` — the lesson engine: a full-screen overlay that steps through a lesson's questions one at a time. Each question `type` (`mc`, `translate_ko_en`, `translate_en_ko`, `fill`, `arrange`, `match`, `reading`, `listening`) has its own renderer that returns a `checkFn` deciding correctness; scoring, XP, and the end-of-lesson summary are handled centrally in `finishLesson`.
- - `js/onboarding.js` — one-time onboarding flow that collects the learner's name, asks about their current Korean level, performs a short self-assessment, determines an appropriate starting level, and assigns the corresponding starting lesson.

## Conventions

- No build step: don't introduce bundlers, TypeScript, or npm dependencies for the frontend. Keep it plain JS/CSS/HTML.
- All progress-affecting logic (XP, streaks, achievements, vocab familiarity) must go through the functions in `js/storage.js`, not by mutating `STATE` directly elsewhere, so persistence and achievement checks stay consistent.
- Views are re-rendered wholesale (`root.innerHTML = ""` then rebuilt) rather than diffed — this keeps the app simple at the current scale. If a view grows complex enough to need partial updates, consider that a signal to introduce fine-grained rendering only for that view.
- New lesson content goes in `LESSONS` in `js/data.js`; new lessons must be linked into a `unit` inside `PATH` to be reachable from the learning path (lesson order/locking is derived by flattening `PATH`, not from an explicit prerequisite field).
- New achievements: add to `ACHIEVEMENTS` in `js/data.js` with a `check(state)` predicate; `checkAchievements()` in `js/storage.js` runs after any progress-affecting action.

## Non-obvious decisions

- TOPIK practice content is explicitly original/practice material, not real TOPIK exam questions — copy in the TOPIK view intentionally disclaims this per the product requirement to avoid implying official test content.
- Listening exercises use the browser's built-in `speechSynthesis` for Korean audio instead of pre-recorded audio files, so there are no static audio assets to manage; this has variable quality/availability depending on the browser/OS Korean voice support.
- Streak/day-boundary logic (`js/storage.js`) compares ISO date strings (`YYYY-MM-DD`) in the user's local time zone; there is no server-side clock to reconcile against since this is a fully client-side app.
- Onboarding uses a two-stage level assessment. The learner first selects the level that best describes their experience, then chooses a Korean sentence that reflects what they can understand. The app uses the lower of these two assessments to determine the starting level, preventing learners from being placed above their demonstrated ability.
- The available starting levels are `foundation`, `beginner`, `intermediate`, and `topik`, mapped to starting lessons `l1`, `l26`, `l51`, and `l76` respectively.
- Learning-path unlocking is sequential from the learner's selected starting lesson. Lessons before the selected starting point remain inaccessible, while the selected starting lesson is immediately available and subsequent lessons unlock after the previous lesson is completed.
