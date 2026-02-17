import type { SectionId } from '../store/useStore';

export interface CameraState {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

export const DEFAULT_CAMERA: CameraState = {
  position: [12, 6, 12],
  target: [0, 2, -2],
  fov: 50,
};

export const CAMERA_TARGETS: Record<SectionId, CameraState> = {
  about:      { position: [1, 3, -4],         target: [0, 2.5, -6],       fov: 40 },
  education:  { position: [4, 2.2, -5],       target: [2.5, 1.8, -6.5],   fov: 35 },
  projects:   { position: [0, 2.5, -5.5],     target: [0, 2.2, -7.5],     fov: 38 },
  skills:     { position: [4, 3, 4],           target: [0, 1.5, 0],        fov: 50 },
  experience: { position: [-6, 2.5, -5],       target: [-8.5, 2.5, -7],    fov: 36 },
  awards:     { position: [7, 3.2, -5.5],      target: [9.5, 3, -7.5],     fov: 34 },
  contact:    { position: [-1.5, 2.2, -5.5],   target: [-1.5, 1.8, -7.5],  fov: 38 },
  resume:     { position: [2, 2.2, -5.5],      target: [1.5, 1.7, -7],     fov: 36 },
};

export const SECTION_LABELS: Record<SectionId, string> = {
  about: 'About Me',
  education: 'Education',
  projects: 'Projects',
  skills: 'Skills',
  experience: 'Experience',
  awards: 'Awards',
  contact: 'Contact',
  resume: 'Resume',
};

export const SECTION_HINTS: Record<SectionId, string> = {
  about: 'Click me to learn more',
  education: 'Click to see education',
  projects: 'Click to view projects',
  skills: 'Click to explore skills',
  experience: 'Click to see experience',
  awards: 'Click to view awards',
  contact: 'Click for contact info',
  resume: 'Click to view resume',
};

// Color palette
export const COLORS = {
  accent: '#00b4d8',
  gold: '#f59e0b',
  wallDark: '#e8e4ef',
  wallSide: '#e0dce8',
  floor: '#c8b99a',
  ceiling: '#f0ecf4',
  deskWood: '#a07850',
  monitorBlue: '#1a3a5c',
  monitorGreen: '#1a4a2a',
  skinTone: '#c4956a',
  hoodie: '#2563eb',
  jeans: '#334155',
  metal: '#888888',
  darkMetal: '#444444',
  workbenchWood: '#8b6914',
  concrete: '#b0a898',
} as const;
