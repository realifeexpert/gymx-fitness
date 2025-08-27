import React from "react";
import { Link } from "react-router-dom";

// We no longer need any imports from @mui/material
// const { Box, Button, Stack, Typography } = from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.exerciseId}`}
      // ✅ Replaced the inline style object with Tailwind classes
      className="bg-white border-t-4 border-red-500 rounded-bl-2xl flex flex-col justify-between pb-3 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer w-[350px] shadow-lg"
    >
      {/* Replaced MUI <Box> with a standard <img> tag */}
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full h-[320px] object-cover" // ✅ All styling is now in className
      />

      {/* Replaced MUI <Stack> with a flex div */}
      <div className="flex flex-row gap-2 justify-center mt-5">
        {/* Replaced MUI <Button> with a styled <span> for the tag */}
        <span className="text-white bg-[#FFA9A9] text-sm rounded-full capitalize py-1 px-4">
          {exercise.bodyParts[0]}
        </span>

        {/* Replaced MUI <Button> with a styled <span> for the tag */}
        <span className="text-white bg-[#FCC757] text-sm rounded-full capitalize py-1 px-4">
          {exercise.targetMuscles[0]}
        </span>
      </div>

      {/* Replaced MUI <Typography> with an <h3> tag */}
      <h3 className="px-5 text-black font-bold mt-3 pb-2.5 capitalize text-xl text-center">
        {exercise.name}
      </h3>
    </Link>
  );
};

export default ExerciseCard;
