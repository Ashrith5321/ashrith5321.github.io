# Ashrith Edukulla — Portfolio Site

## Project Overview
Personal portfolio of Ashrith Edukulla (Robotics Engineering @ University of Michigan, B.E., GPA 3.96).
Research-style layout with live robotics/AI canvas simulations running behind every section.

**Live site**: ashrith5321.github.io (GitHub Pages, deployed from repo root on push)

## Architecture
The ENTIRE site is a single static file: `index.html` (~2,500 lines). No build step, no framework.
- Tailwind via CDN (`cdn.tailwindcss.com`) with class-based dark mode
- Fonts: Inter / Newsreader / JetBrains Mono (Google Fonts)
- All JS is hand-rolled vanilla ES5 in three inline `<script>` blocks
- All animations are 2D canvas (no Three.js, no libraries)

## Page features
- Light/dark theme toggle (localStorage + prefers-color-scheme, flash-free)
- Command palette (⌘K / Ctrl+K / "/"), scroll-spy nav, scroll-reveal sections
- Glassmorphic side features: left section-dot rail (xl+), right social dock (xl+),
  vertical "Recruiter snapshot" tab (md+) and mobile FAB
- Recruiter drawer: slide-in panel with facts grid + CTAs; deep link `#recruiter` auto-opens it
- Hero: typewriter eyebrow, animated stat counters, "Hiring?" shimmer pill
- Scroll rover: tiny SVG robot drives along bottom edge with scroll progress (clickable → swarm)
- Easter eggs: Konami code (↑↑↓↓←→←→BA) deploys a drone-swarm + confetti overlay;
  styled console.log calling card; away-tab title swap
- Toast + copy-email buttons (`.copyEmail` class)
- Projects showcase: filter pills (#projFilters, data-proj tags: embodied/av/slam/swarm/hw,
  counts must match pill labels), animated SMIL-SVG schematic covers on media-less cards,
  .cover-media hover zoom, projIn entrance animation
- Insider easter eggs: HTML comments (tf tree, seed=42), footer "exit 0" line, /recruiter/callback
  topic in the skills terminal, lr=3e-4 + loss-spike ckpt revert in the neural scene, optimizer
  hyperparams in the race legend, base_link/map frames + rosbag rec dot in lidar, rare "cyclist?"
  misclassification + ttc readout on the roads, admissible-heuristic A* tag, C_free/ε in RRT
  readouts, rotating fleet status lines (λ₂ > 0, watchdog fed), rtt 42ms in the TCP handshake,
  hidden ⌘K incantations (type "sudo", "rm -rf /", "42", "p=np", "gimbal lock", "cuda")

## Canvas scenes (section → theme, all in the last <script> block)
| Section | Theme fn | What it shows |
|---|---|---|
| Hero | `rrt` | Interactive RRT planner — click = goal, shift+click = add obstacle |
| News | `lidar` | SLAM robot drives waypoints; 72-ray scan fan, radar afterglow, range-tinted point cloud, sonar burst |
| About | `neural` | VLA training run: signal particles, spiking neurons, dropout ×s, residual skip-arcs, live loss sparkline + epochs |
| Research | `worldmodel` | Robot imagines 6 candidate trajectories toward a labeled goal, ×-rejects colliding ones, drives the best (imagine→reject→act cycle) |
| Education | `astar` | A* search on a random grid |
| Experience | `cars` | Stacked road bands fill the whole section (1 per ~380px); each has its own ego with classed detection labels, velocity vectors, lane planning, blinker, brake lights, F1 flyby; shared steering+speed HUD |
| Projects | `sgd` | Optimizer race: SGD (blue) vs momentum (emerald) vs Adam (amber) on a loss landscape |
| Skills | `algorithms` | 7 sorting algorithms cycling, recorded swaps replayed live |
| Awards | `robots` | Multi-robot fleet: 3 parallax depth rows, ~20+ humanoids/quadrupeds/rovers walking both ways (mirrored to face travel), drone traffic overhead, 3 pick-and-place arms (2-link IK) |
| Contact | `beacon` | Drone delivers envelope to antenna; TCP handshake joke |

Theme contract: each is a factory returning `{reset(w,h), step(t), draw(ctx,t)}`; registered in
`THEMES` and wired to sections in `MAP`. Helpers: `col(a)` blue accent, `col2(a)` emerald,
`col3(a)` amber, `tag(ctx,W,H,text)` corner status readout. Canvases pause off-screen
(IntersectionObserver) and respect `prefers-reduced-motion` (static single frame).

## Conventions
- Cards use translucent glass (`bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm`) so canvases
  glow through; `.card` also has a cursor-spotlight `::before`
- Every visual must work in BOTH light and dark mode (use col/col2/col3, never hardcode)
- Content edits: all portfolio text lives directly in `index.html` sections
- Contact email: ashed@umich.edu · resume: `resume.pdf`

## Verification workflow (WSL2)
```bash
python3 -m http.server 8741          # serve from repo root
# Headless screenshots via Windows Chrome:
"/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --window-size=1600,11500 --hide-scrollbars --virtual-time-budget=15000 \
  --screenshot='C:\Temp\site.png' "http://localhost:8741/index.html"
# Syntax-check inline scripts: extract <script> blocks → node --check
# Note: anchor-URL screenshots show blank sections (scroll-reveal + virtual time);
# use one tall full-page capture instead. Headless follows Windows dark preference;
# to force light, inject localStorage.setItem("theme","light") before the head script.
```

## Other files
- `full_stack_av.html` — AV project write-up page
- `plan/index.html` — PhD roadmap tracker
- `index_old_backup.html` — previous version (untracked backup)
- Media assets (png/jpg/mp4/webm/pdf) in repo root

## User preferences
- Wants the site maximally impressive to recruiters (industry + research)
- Loves dense interactive/animated features; "go crazy" is standing guidance
- Glass/translucent side-feature aesthetic
- Must remain readable and work on mobile (rails are xl-only, FAB on mobile)
