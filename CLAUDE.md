# Ashrith Edukulla: Portfolio Site

## Project Overview
Personal portfolio of Ashrith Edukulla (B.S.E. Robotics @ University of Michigan, GPA 3.8, expected December 2027).
Clean, minimal layout with no animations and no canvas scenes. Framed for **software engineering** roles:
perception/navigation systems, C++/Python, systems and infrastructure work up front.

**Live site**: ashrith5321.github.io (GitHub Pages, deployed from repo root on push)

## Architecture
The site is a single static file: `index.html`. No build step, no framework.
- Tailwind via CDN (`cdn.tailwindcss.com`), light theme only (no dark mode)
- Fonts: Inter / Newsreader (Google Fonts)
- Minimal vanilla JS for: mobile menu, scroll-spy, project filter, back-to-top, lazy video

## Page features
- Scroll-spy nav highlighting: spies only on sections the nav links to, sorted by document
  position, so unlinked sections (News/Education/Awards) hold the nearest preceding link
- Responsive mobile menu
- Project filter pills (`data-proj` tags: perception/av/nav/slam/swarm/hw). Each card also carries
  `data-group="featured|more"` so the filter can hide group headings that end up empty.
  **Keep the pill counts in the filter bar in sync with the actual `data-proj` tag counts.**
- Videos are lazy-loaded via IntersectionObserver (`video.lazy-video` + `data-src`) because they are large
- Back-to-top button

## Sections
Hero (photo, links, intro) → At a Glance (stats) → News → About → What I Work On →
Education → Experience (Industry & Research, then Teaching) → Papers → Projects (Featured + More) →
Skills → Awards → Contact

## Conventions
- Light theme only, with no dark mode classes or toggle. This applies to `full_stack_av.html` too.
- Content edits: all portfolio text lives directly in `index.html` sections
- Contact email: ashed@umich.edu · resume: `resume.pdf`
- Facts on the site must match the current resume (roles, dates, GPA, metrics). When the resume
  changes, check: hero, At a Glance, News, Education, Experience, Papers, Skills.

## Verification workflow
```bash
python3 -m http.server 8741          # serve from repo root
```
Headless render check (google-chrome is available):
```bash
google-chrome --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1280,9000 --screenshot=/tmp/shot.png http://localhost:8741/index.html
```

## Other files
- `full_stack_av.html`: AV localization design doc (light theme, matches main site)
- `plan/index.html`: private PhD roadmap tracker; **intentionally not linked from the main site**
- Media assets (png/jpg/mp4/webm/pdf) in repo root
- Unused/stale: `resume1.pdf`, `resume_old.pdf`, `ashrith_1.png`

## User preferences
- Clean, minimal website aesthetic
- No animations, no canvas backgrounds, no easter eggs
- Must remain readable and work on mobile

## Typography
- **No em dashes (—) anywhere on the site.** Use a colon, comma, parentheses, or `&middot;` instead.
  En dashes (–) are fine and are used for date ranges.
