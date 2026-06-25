# Ashrith Edukulla — Portfolio Site

## Project Overview
Personal portfolio of Ashrith Edukulla (Robotics Engineering @ University of Michigan, B.E., GPA 3.96).
Clean, minimal research-style layout — no animations, no canvas scenes.

**Live site**: ashrith5321.github.io (GitHub Pages, deployed from repo root on push)

## Architecture
The site is a single static file: `index.html`. No build step, no framework.
- Tailwind via CDN (`cdn.tailwindcss.com`) with class-based dark mode
- Fonts: Inter / Newsreader (Google Fonts)
- Minimal vanilla JS for: theme toggle, mobile menu, scroll-spy, project filter, back-to-top

## Page features
- Light/dark theme toggle (localStorage + prefers-color-scheme, flash-free)
- Scroll-spy nav highlighting
- Responsive mobile menu
- Project filter pills (data-proj tags: embodied/av/slam/swarm/hw)
- Back-to-top button

## Sections
Hero (photo, links, intro) → At a Glance (stats) → News → About → Research Focus →
Education → Experience (Research & Teaching) → Projects (Featured + More) → Skills →
Awards → Contact

## Conventions
- Every visual must work in BOTH light and dark mode
- Content edits: all portfolio text lives directly in `index.html` sections
- Contact email: ashed@umich.edu · resume: `resume.pdf`

## Verification workflow
```bash
python3 -m http.server 8741          # serve from repo root
```

## Other files
- `full_stack_av.html` — AV project write-up page
- `plan/index.html` — PhD roadmap tracker
- Media assets (png/jpg/mp4/webm/pdf) in repo root

## User preferences
- Clean, minimal research website aesthetic
- No animations, no canvas backgrounds, no easter eggs
- Must remain readable and work on mobile
