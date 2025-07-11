import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const safeExercises = Array.isArray(exercises) ? exercises : [];

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = safeExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=10000",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10000`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px", xs: "40px" },
        px: { xs: "20px", sm: "30px", md: "50px" },
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={{ xs: "30px", md: "40px" }}
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        rowGap={{ xs: "30px", sm: "40px" }}
        columnGap={{ xs: "20px", sm: "30px", md: "50px" }}
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>

      {safeExercises.length > exercisesPerPage && (
        <Stack mt={{ xs: "50px", md: "80px" }} alignItems="center">
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(safeExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        </Stack>
      )}
    </Box>
  );
};

export default Exercises;
