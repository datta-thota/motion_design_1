import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shoe1 from "../assets/shoes/shoe1.png";
import shoe2 from "../assets/shoes/shoe2.png";
import shoe3 from "../assets/shoes/shoe3.png";
import shoe4 from "../assets/shoes/shoe4.png";
import shoe5 from "../assets/shoes/shoe5.png";
import nikeLogo from "../assets/nike.png";
import sparkleAnim from "../assets/sparkle.json"; // Optional: Lottie animation for extra motion
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";

const shoes = [shoe1, shoe2, shoe3, shoe4, shoe5];

const NikeHero = () => {
  const [selectedShoe, setSelectedShoe] = useState(0);
  const lottieRef = useRef();
useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.3); // slow down the animation to 30% speed
    }
  }, []);
  return (
    <div className="w-full h-screen bg-[#f1f3f6] text-black relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Lottie sparkles in background (optional glam) */}
     <Lottie
      lottieRef={lottieRef}
      animationData={sparkleAnim}
      loop
      className="absolute top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none"
    />

      {/* BIG NEW text */}
     <h1 className="absolute text-[38vw] sm:text-[30vw] md:text-[24vw] lg:text-[20vw] font-extrabold text-[#d1d1d1] tracking-tight leading-none select-none z-0">
  NEW
</h1>



      {/* Nike Logo & Sneakers Text */}
      <img src={nikeLogo} alt="Nike" className="absolute top-6 left-6 w-20 z-10" />
      <div className="absolute top-6 right-6 text-sm md:text-base font-semibold text-gray-700 z-10">
        Sneakers
      </div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 z-10"
      >
        Just do it.
      </motion.h2>

      {/* Animated Shoe Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={selectedShoe}
          src={shoes[selectedShoe]}
          alt="Nike Shoe"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.4 },
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="w-[60vw] max-w-[500px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] z-10"
        />
      </AnimatePresence>

      {/* Shoe Toggle Bar */}
      <div className="mt-12 flex justify-center gap-5 z-10 flex-wrap">
  {shoes.map((shoe, i) => (
    <motion.button
      key={i}
      onClick={() => setSelectedShoe(i)}
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden backdrop-blur-md bg-white/40 border ${
        selectedShoe === i
          ? "border-black shadow-xl scale-110"
          : "border-gray-300 opacity-80"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Glow ring when selected */}
      {selectedShoe === i && (
        <motion.div
          layoutId="ring"
          className="absolute inset-0 rounded-xl border-4 border-black animate-pulse"
        />
      )}

      <img
        src={shoe}
        alt={`shoe ${i + 1}`}
        className="w-full h-full object-contain p-1 z-10"
      />
    </motion.button>
  ))}
</div>


      {/* Background circle blur */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-gray-200 to-white rounded-full top-[40%] right-[15%] z-0 opacity-40 blur-3xl" />
    </div>
  );
};

export default NikeHero;
