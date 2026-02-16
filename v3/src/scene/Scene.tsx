import { Room } from './Room';
import { Window } from './Window';
import { Desk } from './Desk';
import { Chair } from './Chair';
import { Character } from './Character';
import { MonitorSetup } from './MonitorSetup';
import { Laptop } from './Laptop';

import { Bookshelf } from './Bookshelf';
import { Poster } from './Poster';
import { HumanoidRobot } from './robots/HumanoidRobot';
import { RoverBot } from './robots/RoverBot';
import { RoboticArm } from './robots/RoboticArm';
import { DroneBot } from './robots/DroneBot';
import { CoffeeMug } from './decorations/CoffeeMug';
import { PlantPot } from './decorations/PlantPot';
import { StackedBooks } from './decorations/StackedBooks';
import { StickyNotes } from './decorations/StickyNotes';
import { FloatingParticles } from './decorations/FloatingParticles';
import { SceneLighting } from './lighting/SceneLighting';
import { PostProcessing } from './effects/PostProcessing';
import { CameraController } from '../camera/CameraController';
import { InteractableObject } from '../interaction/InteractableObject';
import { useStore } from '../store/useStore';

export function Scene() {
  const isMobile = useStore((s) => s.isMobile);

  return (
    <>
      <color attach="background" args={['#e8e4ef']} />
      <fog attach="fog" args={['#e8e4ef', 12, 25]} />
      <CameraController />
      <SceneLighting />
      <PostProcessing />

      {/* Room structure */}
      <Room />
      <Window />

      {/* Furniture (non-interactive) */}
      <Desk />
      <Chair />

      {/* Interactive objects */}
      <InteractableObject section="about">
        <Character />
      </InteractableObject>

      <InteractableObject section="education">
        <Laptop />
      </InteractableObject>

      <InteractableObject section="projects">
        <MonitorSetup />
      </InteractableObject>

      <InteractableObject section="skills">
        <group>
          <HumanoidRobot />
          <RoverBot />
          <RoboticArm />
          <DroneBot />
        </group>
      </InteractableObject>

      <InteractableObject section="experience">
        <Bookshelf />
      </InteractableObject>

      <InteractableObject section="awards">
        <Poster />
      </InteractableObject>

      <InteractableObject section="contact">
        <StickyNotes />
      </InteractableObject>

      <InteractableObject section="resume">
        <StackedBooks />
      </InteractableObject>

      {/* Non-interactive decorations */}
      <CoffeeMug />
      <PlantPot />
      {!isMobile && <FloatingParticles count={150} />}
    </>
  );
}
