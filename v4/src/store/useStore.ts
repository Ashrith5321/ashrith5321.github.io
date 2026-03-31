import { create } from 'zustand';

export type SectionId = 'about' | 'education' | 'projects' | 'skills' | 'experience' | 'awards' | 'contact' | 'resume';

interface PortfolioState {
  isLoading: boolean;
  loadProgress: number;
  setLoadProgress: (p: number) => void;
  finishLoading: () => void;

  activeSection: SectionId | null;
  setActiveSection: (s: SectionId | null) => void;

  hoveredObject: SectionId | null;
  setHoveredObject: (s: SectionId | null) => void;

  isAnimating: boolean;
  setIsAnimating: (b: boolean) => void;

  isMobile: boolean;
  setIsMobile: (b: boolean) => void;

  introComplete: boolean;
  setIntroComplete: (b: boolean) => void;
}

export const useStore = create<PortfolioState>((set) => ({
  isLoading: true,
  loadProgress: 0,
  setLoadProgress: (p) => set({ loadProgress: p }),
  finishLoading: () => set({ isLoading: false }),

  activeSection: null,
  setActiveSection: (s) => set({ activeSection: s }),

  hoveredObject: null,
  setHoveredObject: (s) => set({ hoveredObject: s }),

  isAnimating: false,
  setIsAnimating: (b) => set({ isAnimating: b }),

  isMobile: window.innerWidth < 768,
  setIsMobile: (b) => set({ isMobile: b }),

  introComplete: false,
  setIntroComplete: (b) => set({ introComplete: b }),
}));
