# Amdocs Skills Leaderboard

A fast, dark-theme skills leaderboard built with Next.js, React, and TypeScript.

The app displays ranked engineering skills with filtering modes for all-time rankings, trending activity, and hot skills. It is designed as a clean, component-driven UI that can be extended to real backend data later.

## Overview

This project provides:

- Search across skill name, source, category, and description.
- Multiple ranking views:
	- All Time: default ranking order.
	- Trending (24h): sorted by `trendingScore`.
	- Hot: top quartile by `trendingScore`.
- Responsive leaderboard table with reusable UI primitives.
- Static seed data for easy local development and demos.

## Tech Stack

- Next.js `16`
- React `19`
- TypeScript `5`
- Tailwind CSS `4`
- Radix UI primitives

## Local Development

### Prerequisites

- Node.js `20+`
- npm `10+` (or compatible package manager)

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev`: start local development server.
- `npm run build`: create optimized production build.
- `npm run start`: run production server.

## Project Structure

```text
src/
	app/
		layout.tsx
		page.tsx
		globals.css
	components/
		leaderboard/
			Header.tsx
			SearchBar.tsx
			TabBar.tsx
			LeaderboardTable.tsx
			SkillRow.tsx
		ui/
			badge.tsx
			input.tsx
			table.tsx
			tabs.tsx
	data/
		skills.ts
	types/
		skill.ts
	lib/
		utils.ts
```

## Data Model

Each skill record includes:

- `id`
- `rank`
- `name`
- `source`
- `usageCount`
- `description`
- `category`
- `trendingScore`

## Notes

- Current leaderboard data is static and lives in `src/data/skills.ts`.
- Ranking logic is in `src/app/page.tsx`.
- UI is intentionally minimal and dark to emphasize data readability.

## Future Enhancements

- Connect to a live API or database.
- Add pagination and server-side filtering.
- Add tests for ranking and filtering logic.
- Add CI checks for type safety and build validation.
