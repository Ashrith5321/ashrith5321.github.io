export const aboutMe = {
  name: 'Ashrith Edukulla',
  title: 'Robotics Engineering',
  university: 'University of Michigan',
  degree: 'B.E. Robotics',
  gpa: '3.8 / 4.0',
  dates: 'Aug 2024 — Dec 2026',
  location: 'Ann Arbor, MI',
  citizenship: 'US Citizen',
  email: 'ashed@umich.edu',
  phone: '(248) 734-3391',
  linkedin: 'https://www.linkedin.com/in/ashrith-edukulla-633b141a7/',
  github: 'https://github.com/ashrith5321',
  twitter: 'https://x.com/AshrithEd',
  paragraphs: [
    "I'm a Robotics Engineering student at the University of Michigan, focused on intelligent perception and learning for autonomous systems.",
    "My interests lie in deep learning, SLAM, computer vision, and probabilistic representations of the world. I'm drawn to problems where robots need to understand complex, uncertain environments and build structured internal models that support reliable decision-making.",
    "I'm particularly interested in bridging geometric methods with learning-based systems — combining classical state estimation with deep neural networks to create scalable and robust autonomy stacks where mapping, localization, and visual understanding are core intelligence layers.",
    "Long term, I want to contribute to autonomous systems that can perceive richly, learn efficiently, and operate reliably in the real world."
  ],
  tagline: 'Building intelligent systems that perceive, reason, and act.',
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  media?: string;
  mediaType?: 'image' | 'video';
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'SLAM & Perception on Differential-Drive Robot',
    description: 'Implemented a 2D LIDAR SLAM pipeline on an MBot integrating motion models, sensor updates, and mapping. Designed log-odds mapping and ray-casting updates for robust map construction. Calibrated likelihood-field sensor models for scan matching accuracy.',
    tags: ['SLAM', 'LIDAR', 'Particle Filters', 'Log-Odds Mapping', 'ROS'],
    featured: true,
    media: './mbot_path.mp4',
    mediaType: 'video',
  },
  {
    title: 'Motion-Sensing Robotic Limb',
    description: 'Built an IMU-driven finger-control interface enabling smooth, responsive multi-joint actuation. Tuned sensor filtering and feedback loops for noise reduction and motion calibration. Evaluated precision and repeatability across tests.',
    tags: ['IMU', 'STM32', 'C++', 'Mechatronics'],
    media: './robotic_arm.jpg',
    mediaType: 'image',
  },
  {
    title: 'FROST — Autonomous Ice-Detection Robot',
    description: 'Developed an autonomous ground robot using IR sensing, thermal imaging, and embedded control logic. Implemented MBot-based drive control and hazard-detection for reliable operation on slick surfaces. Designed robust CAD assemblies for precise sensor placement.',
    tags: ['Autonomous', 'IR Sensing', 'Thermal Imaging', 'CAD'],
    media: './frost.png',
    mediaType: 'image',
  },
  {
    title: 'AutoFarm — Autonomous Agricultural Robot',
    description: 'Designed and built autonomous agritech robots for ploughing, sowing, watering, and indoor crop growth acceleration. Integrated embedded controllers, sensors, and actuators for reliable autonomous operation under power constraints.',
    tags: ['Agritech', 'Automation', 'Embedded'],
    media: './autofarm.png',
    mediaType: 'image',
  },
  {
    title: 'HighWay Go — Solar-Powered Irrigation Robot',
    description: 'Developed a solar-powered robotic system to irrigate highway median plants using a robotic arm. Implemented task sequencing and automation logic for coordinated motion, watering, and plant coverage.',
    tags: ['Solar', 'Robotic Arm', 'Embedded', 'Agritech'],
    media: './highwaygo.png',
    mediaType: 'image',
  },
  {
    title: '9-Motor Swarm Control Platform',
    description: 'Built a reconfigurable 3×3 mechatronic platform to study precision motion, coordination, and system dynamics. Developed decentralized C++ firmware for 9-motor actuation with calibrated PWM control.',
    tags: ['C++', 'Distributed Control', 'Embedded', 'Sockets'],
    media: './sam-motor-ui.png',
    mediaType: 'image',
  },
  {
    title: 'Humanoid Leg Dynamics Simulation',
    description: 'Modeled a robotic-leg system in MATLAB/Simulink using a 6-DOF representation to study dynamics and control. Evaluated energy-aware controllers for optimizing foot placement and performance.',
    tags: ['MATLAB', 'Simulink', '6-DOF', 'Dynamics'],
    media: './humanoid_simulation.webm',
    mediaType: 'video',
  },
];

export interface ExperienceItem {
  org: string;
  role: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    org: 'Field Robotics Group (FRoG) Lab — University of Michigan',
    role: 'Undergraduate Researcher — Perception & Planning',
    dates: 'Dec 2025 — Present',
    bullets: [
      'Designing frontier-based exploration strategies using occupancy grids for mapping in unknown environments.',
      'Building probabilistic representations (2D/3D grids) from multi-modal sensing to support exploration and planning.',
      'Conducting research in robot perception and motion planning for robust field-deployed robotic platforms.',
      'Developing state estimation and environment representation pipelines using onboard sensing and probabilistic models.',
      'Implementing and evaluating algorithms in ROS 2 through simulation pipelines and real-robot experimental validation.',
    ],
  },
  {
    org: 'EECS 467: Autonomous Robotics — University of Michigan',
    role: 'Instructional Aide',
    dates: 'Dec 2025 — May 2026',
    bullets: [
      'Assisted instruction in autonomous robotics, covering perception, SLAM, motion planning, and feedback systems.',
      'Supported students in ROS-based labs, debugging, and end-to-end algorithm implementation on mobile robots.',
      'Held weekly office hours guiding multi-sensor fusion, navigation pipelines, and robot software architecture design.',
    ],
  },
  {
    org: 'Synergic Adaptive Machinas (SAM) Lab — University of Michigan',
    role: 'Robotics Research Engineer',
    dates: 'Aug 2025 — Dec 2025',
    bullets: [
      'Built a reconfigurable 3×3 mechatronic platform to study precision motion, coordination, and system dynamics.',
      'Developed decentralized C++ firmware for 9-motor actuation with calibrated PWM control and timing.',
      'Created a C++/Sockets/Serial interface to command actuators, log data, and support experiment pipelines.',
      'Analyzed distributed-control strategies, interaction effects, and motion profiles for stable closed-loop behavior.',
      'Co-authoring a paper on coordinated motion, energy-aware control, and scalable multi-actuator architectures.',
    ],
  },
  {
    org: 'ROB 201: Robot Differential Equations — University of Michigan',
    role: 'Instructional Aide',
    dates: 'Aug 2025 — Dec 2025',
    bullets: [
      'Supported instruction in ODE modeling, state-space analysis, and core control foundations for dynamic systems.',
      'Led weekly office hours using Julia simulations, visualizations, and interactive differential-equation problem solving.',
      'Assisted with labs and grading; clarified Laplace transforms, transfer functions, and fundamental PID design.',
    ],
  },
  {
    org: 'ROB 101: Computational Linear Algebra — University of Michigan',
    role: 'Instructional Aide',
    dates: 'Aug 2025 — Dec 2025',
    bullets: [
      'Supported instruction in computational linear algebra, matrices, vectors, and systems.',
      'Led weekly office hours focused on Julia coding, linear systems, regression, and data reasoning.',
      'Assisted with labs and grading; clarified matrix operations, optimization, and spatial coordinate concepts.',
    ],
  },
  {
    org: 'DSC Lab — UM–SJTU Joint Institute',
    role: 'Robotics Research Engineer',
    dates: 'June 2025 — July 2025',
    bullets: [
      'Modeled a robotic-leg system in MATLAB/Simulink using a 6-DOF representation to study dynamics and control.',
      'Evaluated multi-port charging, motion efficiency, and trajectory trade-offs using simulation and data analysis.',
      'Evaluated energy-aware controllers estimating power use and optimizing foot placement for improved performance.',
    ],
  },
  {
    org: 'Michigan Mars Rover',
    role: 'Software Engineer',
    dates: 'Nov 2024 — Present',
    bullets: [
      'Evaluated and validated multiple computer vision models for feature tracking, detection, and robustness.',
      'Designed vision-based localization pipelines using sensor fusion and IEKF state estimation.',
      'Programmed STM32 firmware in C/C++ for actuators and sensors supporting reliable closed-loop motion control.',
      'Developed ROS nodes for subsystem integration, telemetry pipelines, and hardware-in-the-loop testing.',
      'Improved navigation using IMU filtering, sensor-based localization, and tuned controllers for smooth tracking.',
    ],
  },
];

export const skills = [
  {
    title: 'Languages & ML',
    color: '#3b82f6',
    groups: [
      { label: 'Languages', items: ['C/C++', 'Python', 'Julia', 'MATLAB', 'Bash'] },
      { label: 'ML / Numerical', items: ['PyTorch', 'NumPy', 'OpenCV'] },
    ],
  },
  {
    title: 'Robotics Software',
    color: '#22c55e',
    groups: [
      { label: 'Middleware', items: ['ROS/ROS 2', 'tf', 'Launch Files', 'Message Passing'] },
      { label: 'Simulation', items: ['Isaac Sim', 'Gazebo', 'RViz', 'MATLAB/Simulink'] },
    ],
  },
  {
    title: 'Perception & SLAM',
    color: '#00e5ff',
    groups: [
      { label: 'Perception', items: ['Multi-view Geometry', 'Camera Calibration', 'Feature Extraction', 'Visual Odometry'] },
      { label: 'State Estimation', items: ['EKF/UKF', 'Particle Filters', 'Factor Graphs', 'Occupancy Grids', 'Scan Matching'] },
    ],
  },
  {
    title: 'Planning & Control',
    color: '#a855f7',
    groups: [
      { label: 'Planning', items: ['Graph-based Planning', 'Search Algorithms', 'Trajectory Optimization', 'Nav Stacks'] },
      { label: 'Control', items: ['PID', 'LQR/LQI', 'State-Space', 'Feedback Linearization'] },
    ],
  },
  {
    title: 'Embedded & Hardware',
    color: '#f59e0b',
    groups: [
      { label: 'Platforms', items: ['STM32', 'Arduino', 'PWM', 'I2C', 'SPI'] },
      { label: 'Sensors', items: ['Encoders', 'IMUs', 'LIDAR', 'Motor Control'] },
    ],
  },
  {
    title: 'Math & Algorithms',
    color: '#ef4444',
    groups: [
      { label: 'Core', items: ['Linear Algebra', 'Probability', 'Optimization', 'Numerical Methods'] },
      { label: 'Algorithms', items: ['Graph Algorithms', 'Rigid-Body Dynamics', 'State-Space Modeling'] },
    ],
  },
];

export const coursework = [
  {
    category: 'Robotics & Autonomy',
    courses: [
      'ROB 530 – Robot SLAM',
      'EECS 504 – Foundations of Computer Vision',
      'ROB 430 – Deep Learning for Robot Perception and Manipulation',
      'EECS 467/ROB 330 – Autonomous Robotics',
      'ROB 320 – Robot Operating System / Robot Planning',
      'ROB 415 – Controls',
    ],
  },
  {
    category: 'Math & Dynamics',
    courses: [
      'ROB 201 – Robot Differential Equations',
      'MATH 214 – Linear Algebra',
      'MECHENG 240 – Dynamics',
    ],
  },
  {
    category: 'Systems & Computing',
    courses: [
      'EECS 281 – Data Structures and Algorithms',
      'EECS 215 – Introduction to Electronic Circuits',
    ],
  },
];

export const awards = [
  {
    title: 'World Robotics Olympiad',
    subtitle: 'India Rank 3',
    description: 'Developed a piezoelectric energy harvesting system to convert automobile pressure into electricity for EVs.',
  },
  {
    title: 'International Youth Robotics Competition',
    subtitle: '4× Medalist (Gold, Silver, Bronze)',
    bullets: [
      'Autonomous vehicle for watering plants with robotic arm & soil detection.',
      'Smart mini-farm with automated irrigation, planting, and sensing.',
      'Greenhouse accelerating growth by 2.2x using controlled climate.',
    ],
  },
  {
    title: 'American Math Competitions',
    subtitle: '3× AMC Qualifier · 2× AIME Qualifier',
    description: 'Qualified for AIME (top scorers nationally) across multiple years of AMC competition.',
  },
];

export const research = [
  {
    role: 'Undergraduate Researcher — FRoG Lab',
    org: 'University of Michigan',
    advisor: 'Prof. Katie Skinner',
  },
  {
    role: 'Undergraduate Researcher — SAM Lab',
    org: 'University of Michigan',
    advisor: 'Prof. Steven Ceron',
  },
  {
    role: 'Instructional Aide — ROB 201',
    org: 'University of Michigan',
    advisor: 'Prof. Jessy Grizzle',
  },
  {
    role: 'Instructional Aide — EECS 467',
    org: 'University of Michigan',
    advisor: 'Prof. Xiaoxiao Du',
  },
];
