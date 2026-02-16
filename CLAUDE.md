# Ash's Workspace — 3D Interactive Portfolio

## Project Overview
This is Ashrith Edukulla's personal portfolio website — a fully interactive 3D room scene built with React + Three.js. Visitors explore a cozy nighttime coding setup in third-person view, clicking objects to reveal portfolio sections.

**Live site**: ashrith5321.github.io
**Owner**: Ashrith Edukulla, Robotics Engineering @ University of Michigan (B.E., GPA 3.96)

## Tech Stack
- **Vite + React + TypeScript** (build tooling)
- **@react-three/fiber** + **@react-three/drei** (3D scene)
- **@react-three/postprocessing** (bloom, vignette, noise)
- **GSAP** (camera transitions, UI animations)
- **Zustand** (state management)
- **All 3D models are procedural** (low-poly stylized, built from Three.js primitives)
- Deployed to GitHub Pages as static build

## Project Structure
The active version lives in `v3/`:
```
v3/
├── src/
│   ├── App.tsx                    # Top-level: Canvas + UI overlay
│   ├── store/useStore.ts          # Zustand state (activeSection, camera, loading, hover)
│   ├── data/
│   │   ├── content.ts             # ALL portfolio text (about, projects, skills, experience, awards, contact)
│   │   └── sceneConfig.ts         # Camera positions, colors, section labels
│   ├── scene/
│   │   ├── Scene.tsx              # Top-level 3D composition with InteractableObject wrappers
│   │   ├── Room.tsx               # Walls, floor, ceiling + neon tube geometry
│   │   ├── Desk.tsx, Chair.tsx, Character.tsx, MonitorSetup.tsx, Laptop.tsx
│   │   ├── DeskLamp.tsx, Window.tsx, Bookshelf.tsx, Poster.tsx
│   │   ├── robots/ (HumanoidRobot, RoverBot, RoboticArm, DroneBot)
│   │   ├── decorations/ (CoffeeMug, PlantPot, StackedBooks, StickyNotes, FloatingParticles)
│   │   ├── lighting/SceneLighting.tsx
│   │   └── effects/PostProcessing.tsx
│   ├── camera/CameraController.tsx  # OrbitControls + GSAP animated transitions
│   ├── interaction/InteractableObject.tsx  # Hover glow + click -> section activation
│   └── ui/
│       ├── LoadingScreen.tsx        # Loading bar -> "Ash's Workspace" welcome + controls
│       ├── NavigationMenu.tsx       # Top nav bar ("Ash's Workspace" logo)
│       ├── InfoPanel.tsx            # Slide-in panel from right
│       ├── BackButton.tsx, HoverTooltip.tsx
│       └── panels/ (About, Education, Projects, Skills, Experience, Awards, Contact, Resume)
├── public/ (ashrith.jpg, michigan_logo.png, resume.pdf)
└── index.html
```

## Object → Section Mapping
| 3D Object | Section | Camera zooms to |
|---|---|---|
| Character (boy at desk) | About Me | Face close-up |
| Laptop (desk side) | Education | Laptop screen |
| Monitor Setup (2 screens) | Projects | Both monitors |
| All Robots (humanoid+rover+arm+drone) | Skills | Pull back to show robots |
| Bookshelf (left wall) | Experience | Bookshelf area |
| Wall Poster (right wall) | Awards | Poster close-up |
| Sticky Notes (back wall) | Contact | Notes cluster |
| Stacked Books (desk) | Resume | Book stack |

## Key Design Decisions
- **Theme**: Nighttime room with neon accents (cyan, magenta, purple). Walls are medium purple-gray, NOT pitch black — room should be clearly visible.
- **Branding**: "Ash's Workspace" is the site name (nav logo, welcome screen, page title)
- **Intro flow**: Loading bar → Welcome screen with "Ash's Workspace" title + 4 control cards + "Enter Workspace" button
- **Lighting**: Strong ambient (1.5) + hemisphere (1.2) + neon rectAreaLights along ceiling/desk/monitors + desk lamp + moonlight + robot accent glows
- **Post-processing**: Bloom (1.2 intensity), vignette, film noise. Disabled on mobile.
- **Interaction**: Click object → GSAP camera transition → info panel slides in from right
- **Camera**: OrbitControls with constraints (no pan, min/max distance, polar angle limits)

## Commands
```bash
# From v3/ directory:
source /home/ashed/.nvm/nvm.sh   # Required to get npm/node
npm run dev                       # Dev server (localhost:5173)
npm run build                     # Production build to v3/dist/
npx tsc --noEmit                  # Type check
```

## Legacy Versions
- `index.html` (root) — v1 portfolio (Tailwind, traditional scroll)
- `v2/index.html` — v2 portfolio (Three.js hero + GSAP scroll animations)
- `full_stack_av.html` — Detailed AV project page
- `plan/index.html` — PhD roadmap tracker

## Content Source
All portfolio content (projects, experience, skills, awards, contact) is centralized in `v3/src/data/content.ts`. When updating portfolio info, edit that file.

## User Preferences
- Prefers visible, well-lit scenes — avoid too-dark themes
- Wants neon/cyberpunk aesthetic with clear visibility
- Likes comprehensive interactive experiences ("I don't care if it's 100k lines")
- All types of robots should be represented (humanoid, rover, arm, drone)
- Must work on all devices (desktop optimized, mobile fallback)
