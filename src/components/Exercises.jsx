import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import { fetchData } from "../utils/fetchData"; // We only need fetchData
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

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
        // Fetch a general list of exercises for the default view
        exercisesResponse = await fetchData(`${baseUrl}/exercises?limit=50`);
      } else {
        // Fetch exercises for a specific body part
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

  // Pagination Logic
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.exerciseId} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
