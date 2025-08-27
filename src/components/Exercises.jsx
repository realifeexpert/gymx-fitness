import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import for animations
import { fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard.jsx";
import Loader from "./Loader.jsx";

// ✅ A new, custom-styled Pagination component
const CustomPagination = ({
  exercisesPerPage,
  totalExercises,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`
                w-10 h-10 rounded-md transition-colors duration-200
                ${
                  currentPage === number
                    ? "bg-primary text-background font-bold"
                    : "bg-surface text-text-secondary hover:bg-gray-700"
                }
              `}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true);
      let exercisesResponse;
      const baseUrl = "https://testings-nine.vercel.app/api/v1";

      if (bodyPart === "all") {
        exercisesResponse = await fetchData(`${baseUrl}/exercises?limit=50`);
      } else {
        exercisesResponse = await fetchData(
          `${baseUrl}/bodyparts/${bodyPart}/exercises`
        );
      }

      if (exercisesResponse.success && Array.isArray(exercisesResponse.data)) {
        setExercises(exercisesResponse.data);
      }
      setLoading(false);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  // ✅ Animation variants for the container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (loading) {
    return <Loader fullScreen={false} />;
  }

  return (
    <section id="exercises" className="mt-12 p-5">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-text-primary capitalize">
        Showing Results for: <span className="text-primary">{bodyPart}</span>
      </h2>

      <AnimatePresence>
        <motion.div
          key={bodyPart} // Re-animate when bodyPart changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // ✅ Replaced <Stack> with a responsive CSS Grid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {currentExercises.length ? (
            currentExercises.map((exercise) => (
              <motion.div variants={itemVariants} key={exercise.exerciseId}>
                <ExerciseCard exercise={exercise} />
              </motion.div>
            ))
          ) : (
            <p className="text-text-secondary col-span-3 text-center">
              No exercises found for this category.
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 lg:mt-24 flex justify-center">
        {exercises.length > exercisesPerPage && (
          <CustomPagination
            exercisesPerPage={exercisesPerPage}
            totalExercises={exercises.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
};

export default Exercises;
