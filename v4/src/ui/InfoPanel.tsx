import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../store/useStore';
import type { SectionId } from '../store/useStore';
import { SECTION_LABELS } from '../data/sceneConfig';
import { AboutPanel } from './panels/AboutPanel';
import { EducationPanel } from './panels/EducationPanel';
import { ProjectsPanel } from './panels/ProjectsPanel';
import { SkillsPanel } from './panels/SkillsPanel';
import { ExperiencePanel } from './panels/ExperiencePanel';
import { AwardsPanel } from './panels/AwardsPanel';
import { ContactPanel } from './panels/ContactPanel';
import { ResumePanel } from './panels/ResumePanel';

const PANEL_MAP: Record<SectionId, React.FC> = {
  about: AboutPanel,
  education: EducationPanel,
  projects: ProjectsPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  awards: AwardsPanel,
  contact: ContactPanel,
  resume: ResumePanel,
};

export function InfoPanel() {
  const activeSection = useStore((s) => s.activeSection);
  const setActiveSection = useStore((s) => s.setActiveSection);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;

    if (activeSection) {
      gsap.to(panelRef.current, {
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' }
        );
      }
    } else {
      gsap.to(panelRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power2.in',
      });
    }
  }, [activeSection]);

  if (!activeSection) return null;

  const PanelContent = PANEL_MAP[activeSection];

  return (
    <div
      ref={panelRef}
      className="info-panel"
      style={{ transform: 'translateX(100%)' }}
    >
      {/* Close button */}
      <button
        className="info-panel-close"
        onClick={() => setActiveSection(null)}
        aria-label="Close panel"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Section label */}
      <div className="info-panel-label">{SECTION_LABELS[activeSection]}</div>

      {/* Content */}
      <div ref={contentRef} className="info-panel-content">
        <PanelContent />
      </div>
    </div>
  );
}
