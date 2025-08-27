import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import motion for animations

import { fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail.jsx";
import ExerciseVideos from "../components/ExerciseVideos.jsx";
import SimilarExercises from "../components/SimilarExercises.jsx";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://testings-nine.vercel.app/api/v1";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailResponse = await fetchData(
        `${exerciseDbUrl}/exercises/${id}`
      );
      if (exerciseDetailResponse.success) {
        const detailData = exerciseDetailResponse.data;
        setExerciseDetail(detailData);

        const exerciseVideosResponse = await fetchData(
          `${youtubeSearchUrl}/search?query=${detailData.name} exercise`,
          youtubeOptions
        );
        if (exerciseVideosResponse.contents) {
          setExerciseVideos(exerciseVideosResponse.contents);
        }

        if (detailData.targetMuscles && detailData.targetMuscles.length > 0) {
          const targetMuscleResponse = await fetchData(
            `${exerciseDbUrl}/muscles/${detailData.targetMuscles[0]}/exercises`
          );
          if (targetMuscleResponse.success) {
            setTargetMuscleExercises(targetMuscleResponse.data);
          }
        }

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
    // ✅ Replaced Box with a semantic <main> tag
    // ✅ Added animation and background classes
    <motion.main
      className="bg-gradient-to-b from-background to-surface bg-[length:100%_200%] animate-gradient-flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Added a wrapper with spacing for consistent layout */}
      <div className="space-y-16 lg:space-y-24 py-10">
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </div>
    </motion.main>
  );
};

export default ExerciseDetails;
