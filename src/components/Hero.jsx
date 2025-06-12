import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  SpotLight,
  Stage,
} from "@react-three/drei";
import Lottie from "lottie-react";
import CokeModel from "./TempModel";
import bubbles from "../assets/bubbles.json";
import { motion } from "framer-motion";
import back from "../assets/back.png";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

const CokeHero = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-sans">
      {/* Background image */}
     

      <div className="absolute inset-0 z-0 pointer-events-none">
  
</div>


      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white z-10" />

      {/* 3D Coke Can */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
  <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
    {/* Cinematic Lighting */}
    <ambientLight intensity={0.3} />
    <spotLight
      position={[5, 10, 5]}
      angle={0.3}
      intensity={2}
      penumbra={0.8}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
    <directionalLight
      position={[-5, 5, 2]}
      intensity={1}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />

    {/* Environment for reflections */}
    <Environment preset="sunset" background />

    {/* Model */}
    <CokeModel />

    {/* Realistic Contact Shadow */}
    <ContactShadows
      position={[0, -1.5, 0]}
      opacity={0.4}
      blur={2.5}
      scale={12}
      far={10}
    />

    {/* Add floating animation */}
    <Float
      speed={2} // oscillation speed
      rotationIntensity={0.6}
      floatIntensity={1.5}
      floatingRange={[0, 0.2]} // subtle vertical float
    >
      <CokeModel />
    </Float>

    {/* Controls */}
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={1.2}
    />
  </Canvas>
</div>

<motion.div
  className="absolute bottom-20 w-full z-30 text-center px-6 sm:px-10"
  initial="hidden"
  animate="visible"
>
  {/* HEADLINE */}
  <motion.h1
    className="text-[11vw] sm:text-6xl font-['Playfair_Display'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c3c] to-[#b40000] tracking-tight leading-[1.1] drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]"
    variants={textVariants}
    custom={0}
    style={{
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    }}
  >
    Taste the Feeling
  </motion.h1>

  {/* SUBTEXT */}
  <motion.p
  className="mt-5 text-[4vw] sm:text-lg text-white font-['DM_Sans'] font-light max-w-xl mx-auto tracking-wide leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
  variants={textVariants}
  custom={0.3}
>
  A legacy refreshed. <br />
  <span className="font-semibold text-white">By Datta Thota</span>.
</motion.p>


  {/* CTA BUTTON */}
  <motion.button
    className="mt-8 px-10 py-3 rounded-full bg-gradient-to-r from-[#E50914] to-[#b40000] text-white font-['Inter'] font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
    variants={textVariants}
    custom={0.6}
    whileHover={{ scale: 1.1 }}
  >
    Drink Now
  </motion.button>
</motion.div>


    </div>
  );
};

export default CokeHero;
