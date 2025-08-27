import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import motion for animations

import HeroBanner from "../components/HeroBanner.jsx";
import SearchExercises from "../components/SearchExercises.jsx";
import Exercises from "../components/Exercises.jsx";

// Animation variants for sections to fade in as they're scrolled to
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    // ✅ Replaced the MUI <Box> with a simple div or fragment
    // Spacing is now handled by the components themselves for better control
    <div>
      <HeroBanner />

      {/* ✅ Each section is wrapped in a motion.div for scroll-triggered animations */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </motion.div>
    </div>
  );
};

export default Home;
