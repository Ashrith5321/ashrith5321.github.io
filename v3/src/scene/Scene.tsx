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
import { RobotDog } from './robots/RobotDog';
import { AutonomousCar } from './robots/AutonomousCar';
import { BipedalWalker } from './robots/BipedalWalker';
import { HexaDrone } from './robots/HexaDrone';
import { RacingDrone } from './robots/RacingDrone';
import { DeliveryDrone } from './robots/DeliveryDrone';
import { ROV } from './robots/ROV';
import { HumanoidHands } from './robots/HumanoidHands';
import { RobotLegs } from './robots/RobotLegs';
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

// Workshop furniture
import { Workbench } from './workshop/Workbench';
import { ToolWall } from './workshop/ToolWall';
import { DisplayCase } from './workshop/DisplayCase';
import { PartsCabinet } from './workshop/PartsCabinet';
import { ToolCart } from './workshop/ToolCart';
import { Whiteboard } from './workshop/Whiteboard';
import { ChargingStation } from './workshop/ChargingStation';
import { Printer3D } from './workshop/Printer3D';
import { Oscilloscope } from './workshop/Oscilloscope';
import { SolderingStation } from './workshop/SolderingStation';

export function Scene() {
  const isMobile = useStore((s) => s.isMobile);

  return (
    <>
      <color attach="background" args={['#e8e4ef']} />
      <fog attach="fog" args={['#e8e4ef', 18, 40]} />
      <CameraController />
      <SceneLighting />
      <PostProcessing />

      {/* Room structure */}
      <Room />
      <Window />

      {/* === DESK AREA (shifted -4 in z to sit near back wall) === */}
      <group position={[0, 0, -4]}>
        {/* Furniture (non-interactive) */}
        <Desk />
        <Chair />

        {/* Interactive objects — desk cluster */}
        <InteractableObject section="about">
          <Character />
        </InteractableObject>

        <InteractableObject section="education">
          <Laptop />
        </InteractableObject>

        <InteractableObject section="projects">
          <MonitorSetup />
        </InteractableObject>

        <InteractableObject section="contact">
          <StickyNotes />
        </InteractableObject>

        <InteractableObject section="resume">
          <StackedBooks />
        </InteractableObject>

        {/* Non-interactive desk decorations */}
        <CoffeeMug />
        <PlantPot />
      </group>

      {/* === ROBOTS (spread across workshop — 13 total) === */}
      <InteractableObject section="skills">
        <group>
          {/* Original 4 robots — repositioned for larger room */}
          <group position={[3, 0, -1.5]}>
            <HumanoidRobot />
          </group>
          <group position={[-3, 0, 2]}>
            <RoverBot />
          </group>
          <group position={[0, 0, -4]}>
            <RoboticArm />
          </group>
          <group position={[-1, 0, 1]}>
            <DroneBot />
          </group>

          {/* New ground robots */}
          <RobotDog />
          <AutonomousCar />
          <BipedalWalker />

          {/* New aerial robots */}
          <HexaDrone />
          <RacingDrone />
          <DeliveryDrone />

          {/* Underwater */}
          <ROV />

          {/* Display pieces */}
          <HumanoidHands />
          <RobotLegs />
        </group>
      </InteractableObject>

      {/* === WALL ITEMS (back wall, shifted z for bigger room) === */}
      <InteractableObject section="experience">
        <group position={[-4, 0, -4]}>
          <Bookshelf />
        </group>
      </InteractableObject>

      <InteractableObject section="awards">
        <group position={[5, 0, -4]}>
          <Poster />
        </group>
      </InteractableObject>

      {/* === WORKSHOP FURNITURE (non-interactive decorative) === */}
      {/* Workbench — left side of room */}
      <Workbench position={[-6, 0, 2]} rotation={Math.PI / 2} />
      {/* Workbench — right side of room */}
      <Workbench position={[6, 0, 3]} rotation={-Math.PI / 2} />

      {/* Tool wall — on back wall, left of desk area */}
      <ToolWall position={[-6, 2.5, -7.9]} />

      {/* Display case — right side near back */}
      <DisplayCase position={[7, 0, -5]} />

      {/* Parts cabinet — near left workbench */}
      <PartsCabinet position={[-8, 0, 4]} />

      {/* Tool cart — center floor area */}
      <ToolCart position={[3, 0, 1]} />

      {/* Whiteboard — on right wall (rotated to face left) */}
      <group rotation={[0, -Math.PI / 2, 0]}>
        <Whiteboard position={[2, 3, -9.9]} />
      </group>

      {/* Charging station — back-right area */}
      <ChargingStation position={[8, 0, -2]} />

      {/* 3D Printer — on left workbench */}
      <Printer3D position={[-6, 0.94, 1.5]} />

      {/* Oscilloscope — on right workbench */}
      <Oscilloscope position={[6, 0.94, 2.5]} />

      {/* Soldering station — on right workbench */}
      <SolderingStation position={[6, 0.94, 3.5]} />

      {/* Floating particles */}
      {!isMobile && <FloatingParticles count={200} />}
    </>
  );
}
