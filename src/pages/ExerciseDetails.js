import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";

const ExerciseDetails = () => {
  const { id } = useParams();

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl =
          "https://youtube-search-and-download.p.rapidapi.com";

        // 1. Exercise details
        const detailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(detailData);

        // 2. YouTube videos
        const videosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${detailData.name}`,
          youtubeOptions
        );
        setExerciseVideos(videosData.contents);

        // 3. Similar exercises - by target muscle
        const targetData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${detailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetData);

        // 4. Similar exercises - by equipment
        const equipmentData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${detailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentData);
      } catch (err) {
        console.error("❌ Error fetching exercise details:", err);
        setError("Oops! Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <Box sx={{ mt: { xs: "50px", lg: "80px" }, px: "20px" }}>
        <Typography variant="h5" color="error" textAlign="center">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: { lg: "100px", xs: "60px" }, px: "20px" }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
