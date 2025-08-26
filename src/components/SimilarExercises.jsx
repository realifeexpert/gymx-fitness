import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

// 🔹 Scrollable Horizontal Exercise List
const HorizontalScrollWrapper = ({ data }) => (
  <Box
    sx={{
      display: "flex",
      overflowX: "auto",
      gap: { xs: "16px", sm: "24px", md: "32px" },
      scrollBehavior: "smooth",
      paddingBottom: "10px",
      px: { xs: "5px", sm: "10px" },
      "&::-webkit-scrollbar": {
        display: "none",
      },
    }}
  >
    {data.slice(0, 10).map((exercise) => (
      <Box
        key={exercise.id}
        sx={{
          minWidth: { xs: "260px", sm: "300px", md: "330px" },
          flexShrink: 0,
        }}
      >
        <ExerciseCard exercise={exercise} />
      </Box>
    ))}
  </Box>
);

// 🔹 Main Component
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box mt={{ lg: "100px", xs: "50px" }} px="20px">
      {/* 🧠 Target Muscle Group */}
      <Typography
        variant="h4"
        fontWeight={700}
        mb="30px"
        textAlign="center"
        fontSize={{ xs: "26px", sm: "32px" }}
      >
        Exercises that target the same{" "}
        <span style={{ color: "#FF2625" }}>muscle group</span>
      </Typography>

      {targetMuscleExercises?.length ? (
        <HorizontalScrollWrapper data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}

      {/* 🏋️‍♂️ Equipment Based */}
      <Typography
        variant="h4"
        fontWeight={700}
        mt="60px"
        mb="30px"
        textAlign="center"
        fontSize={{ xs: "26px", sm: "32px" }}
      >
        Exercises that use the same{" "}
        <span style={{ color: "#FF2625" }}>equipment</span>
      </Typography>

      {equipmentExercises?.length ? (
        <HorizontalScrollWrapper data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default SimilarExercises;
