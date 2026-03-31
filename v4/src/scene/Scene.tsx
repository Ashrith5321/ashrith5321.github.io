import { CameraController } from '../camera/CameraController';
import { SceneLighting } from './lighting/SceneLighting';
import { PostProcessing } from './effects/PostProcessing';
import { InteractableObject } from '../interaction/InteractableObject';
import { useStore } from '../store/useStore';

// Car model (realistic GLB)
import { CarModel } from './car/CarModel';
import { Headlights } from './car/Headlights';
import { SideMirror } from './car/SideMirror';

// Car interior — structural
import { Dashboard } from './car/Dashboard';
import { Seats } from './car/Seats';
import { DoorPanels } from './car/DoorPanel';
import { Interior } from './car/Interior';

// Car interior — interactive
import { Touchscreen } from './car/Touchscreen';
import { SteeringWheel } from './car/SteeringWheel';
import { CenterConsole } from './car/CenterConsole';
import { Glovebox } from './car/Glovebox';
import { SunVisor } from './car/SunVisor';
import { WindshieldHUD } from './car/WindshieldHUD';

// Environment
import { Ground } from './environment/Ground';
import { Skybox } from './environment/Skybox';
import { EnvironmentLighting } from './environment/EnvironmentLighting';

// Character
import { Driver } from './character/Driver';

export function Scene() {
  const isMobile = useStore((s) => s.isMobile);

  return (
    <>
      <color attach="background" args={['#0a0a14']} />
      <fog attach="fog" args={['#0a0a14', 25, 80]} />
      <CameraController />
      <SceneLighting />
      {!isMobile && <PostProcessing />}
      <EnvironmentLighting />

      {/* === ENVIRONMENT === */}
      <Ground />
      <Skybox />

      {/* === CAR — realistic GLB model === */}
      <CarModel />
      <Headlights />

      {/* === CAR INTERIOR — structural (non-interactive) === */}
      <Dashboard />
      <Seats />
      <DoorPanels />
      <Interior />

      {/* === DRIVER (non-interactive) === */}
      <Driver />

      {/* === INTERACTIVE CAR OBJECTS === */}
      <InteractableObject section="projects">
        <Touchscreen />
      </InteractableObject>

      <InteractableObject section="skills">
        <SteeringWheel />
      </InteractableObject>

      <InteractableObject section="contact">
        <CenterConsole />
      </InteractableObject>

      <InteractableObject section="resume">
        <Glovebox />
      </InteractableObject>

      <InteractableObject section="education">
        <SunVisor />
      </InteractableObject>

      <InteractableObject section="awards">
        <WindshieldHUD />
      </InteractableObject>

      <InteractableObject section="experience">
        <SideMirror />
      </InteractableObject>

      {/* Passenger seat area as click target for "about" */}
      <InteractableObject section="about">
        <group position={[0.4, 0.55, 0.2]}>
          <mesh>
            <boxGeometry args={[0.5, 0.7, 0.5]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>
        </group>
      </InteractableObject>
    </>
  );
}
