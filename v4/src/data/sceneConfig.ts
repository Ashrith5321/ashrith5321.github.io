import type { SectionId } from '../store/useStore';

export interface CameraState {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

// Car at origin. Front = +Z, driver = -X (left-hand drive)
// Car ~4.8m long, ~1.85m wide, ~1.45m tall

export const DEFAULT_CAMERA: CameraState = {
  position: [4, 3, 5],
  target: [0, 0.8, 0],
  fov: 50,
};

export const CAMERA_TARGETS: Record<SectionId, CameraState> = {
  projects:   { position: [0.5, 1.2, 1.8],    target: [0.1, 1.0, 0.6],     fov: 40 },  // Touchscreen
  skills:     { position: [-1.2, 1.3, 1.8],   target: [-0.45, 1.0, 0.8],   fov: 38 },  // Steering wheel
  resume:     { position: [1.2, 1.1, 1.5],    target: [0.6, 0.85, 0.6],    fov: 36 },  // Glovebox
  experience: { position: [-2.0, 1.3, 1.5],   target: [-0.95, 1.0, 1.2],   fov: 35 },  // Side mirror
  about:      { position: [1.5, 1.3, 0.5],    target: [0.5, 0.9, 0.3],     fov: 40 },  // Passenger seat
  contact:    { position: [0.5, 1.5, 0.5],    target: [0, 0.85, 0.2],      fov: 38 },  // Center console
  education:  { position: [-0.8, 1.6, 1.2],   target: [-0.35, 1.35, 0.7],  fov: 34 },  // Sun visor
  awards:     { position: [0, 1.4, 2.5],      target: [0, 1.1, 1.2],       fov: 36 },  // Windshield HUD
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
  about: 'Tap to learn about the driver',
  education: 'Check the visor mirror',
  projects: 'Tap the touchscreen',
  skills: 'Grab the steering wheel',
  experience: 'Look in the side mirror',
  awards: 'Read the HUD display',
  contact: 'Open the center console',
  resume: 'Open the glovebox',
};

export const COLORS = {
  accent: '#3e6ae1',
  bodyPaint: '#1a1a2e',
  interior: '#1a1a1a',
  chrome: '#c0c0c0',
  glass: '#88aacc',
  screen: '#1e90ff',
  ambientStrip: '#4488ff',
  skinTone: '#c4956a',
  hoodie: '#2563eb',
  jeans: '#334155',
} as const;
