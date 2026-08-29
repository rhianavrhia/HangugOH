# 한국OH! (Hanguk-OH!)

A gamified, self-contained Korean language-learning web app for beginner and intermediate learners, with a learning path, interactive lessons, vocabulary flashcards, a grammar library, TOPIK practice, and XP/streak/achievement gamification.

## Key technologies

- Plain HTML, CSS, and JavaScript (no build step, no framework)
- `localStorage` for persisting XP, streaks, completed lessons, vocabulary familiarity, and achievements
- Google Fonts (Gowun Batang, Noto Sans KR, Space Grotesk) for a Korean-forward visual identity
- The Web Speech API (`speechSynthesis`) for lightweight Korean audio playback in listening exercises

## Running locally

This is a static site — no build step is required.

- Open `index.html` directly in a browser, or
- Serve the folder with any static server, e.g. `npx serve .`, or
- Use the Netlify CLI: `netlify dev`

All progress is stored in the browser's `localStorage`, so it persists across refreshes but is local to that browser/device.

## Structure

See `AGENTS.md` for an overview of the codebase architecture.
