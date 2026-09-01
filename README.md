# 한국OH! (Hanguk-OH!)

A gamified, self-contained Korean language-learning web app for learners at different stages of Korean proficiency, with a personalized learning path, interactive lessons, vocabulary flashcards, a grammar library, TOPIK practice, and XP/streak/achievement gamification.

## Key technologies

- Plain HTML, CSS, and JavaScript (no build step, no framework)
- - `localStorage` for persisting learner information, starting level, starting lesson, XP, streaks, completed lessons, vocabulary familiarity, and achievements
- Google Fonts (Gowun Batang, Noto Sans KR, Space Grotesk) for a Korean-forward visual identity
- The Web Speech API (`speechSynthesis`) for lightweight Korean audio playback in listening exercises

## Running locally

This is a static site — no build step is required.

- Deploy the static site through Vercel or another static hosting provider.

All learner data and progress are stored in the browser's `localStorage`, including the learner's name, selected starting level, starting lesson, XP, streaks, completed lessons, vocabulary familiarity, and achievements. Data persists across refreshes but remains local to that browser/device.

## Structure

See `AGENTS.md` for an overview of the codebase architecture.
