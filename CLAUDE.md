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

## Color
**The page is monochrome. There is no accent hue.** Modeled on Vercel's Geist system
(vercel.com/geist), whose rule is "design in monochrome, use color only when it adds
significant meaning" and which has no brand accent at all: the ink is the brand.

Documented Geist values in use: `#FAFAFA` `#F5F5F5` `#EBEBEB` `#4D4D4D` `#171717`.
Intermediate steps are interpolated; every text-bearing step is pinned to at least
4.5:1 on white (`stone-400` is `#757575`, not Geist's `#A1A1A1`, which fails as text).

- Ink / headings `#171717` · body `#4D4D4D` · muted `#757575`
- Canvas `#FFFFFF` · soft surfaces `#FAFAFA` / `#F5F5F5` · hairlines `#EBEBEB`
- `accent-*` is retained as a token name but resolves to ink, so links read as ink

**All color on the page comes from the real logos and project photography**, never from
UI chrome. That is the whole idea: against a neutral page the NiFT orange, Moby coral,
FRoG yellow, and Michigan maize are the only chromatic things on screen.

**Do not add an accent hue, and do not add a gradient.** Three earlier attempts at a
themed accent (Tailwind blue, then terracotta/teal/indigo, then U-M Tappan Red) were all
rejected as looking AI-generated. The problem was not the particular hue: any decorative
theme color reads as inherited rather than chosen. Tailwind's default indigo plus
indigo-to-purple gradients are the documented AI-template tell. There are zero
`bg-gradient-*` classes and zero chromatic hex values in the file; keep it that way.

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
