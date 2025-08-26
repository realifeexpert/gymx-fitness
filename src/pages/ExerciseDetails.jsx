import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises"; // ✅ Re-import the component

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  // ✅ Add state for the similar exercises
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // ✅ Scroll to the top of the page whenever a new exercise is loaded
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchExercisesData = async () => {
      // API URLs
      const exerciseDbUrl = "https://testings-nine.vercel.app/api/v1";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      // 1. Fetch main exercise detail
      const exerciseDetailResponse = await fetchData(
        `${exerciseDbUrl}/exercises/${id}`
      );
      if (exerciseDetailResponse.success) {
        const detailData = exerciseDetailResponse.data;
        setExerciseDetail(detailData);

        // 2. Fetch YouTube videos
        const exerciseVideosResponse = await fetchData(
          `${youtubeSearchUrl}/search?query=${detailData.name} exercise`,
          youtubeOptions
        );
        if (exerciseVideosResponse.contents) {
          setExerciseVideos(exerciseVideosResponse.contents);
        }

        // ✅ 3. Fetch similar exercises by target muscle
        if (detailData.targetMuscles && detailData.targetMuscles.length > 0) {
          const targetMuscleResponse = await fetchData(
            `${exerciseDbUrl}/muscles/${detailData.targetMuscles[0]}/exercises`
          );
          if (targetMuscleResponse.success) {
            setTargetMuscleExercises(targetMuscleResponse.data);
          }
        }

        // ✅ 4. Fetch similar exercises by equipment
        if (detailData.equipments && detailData.equipments.length > 0) {
          const equipmentResponse = await fetchData(
            `${exerciseDbUrl}/equipments/${detailData.equipments[0]}/exercises`
          );
          if (equipmentResponse.success) {
            setEquipmentExercises(equipmentResponse.data);
          }
        }
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail.name) return <div>Loading...</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      {/* ✅ Add the SimilarExercises component back */}
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
