import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.exerciseId}`}
      className="exercise-card"
      style={{
        width: "350px", // ✅ Set a fixed width for the card
        textDecoration: "none",
        background: "#fff",
        borderTop: "4px solid #FF2625",
        borderBottomLeftRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "10px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      {/* ✅ Replaced <img> with MUI Box for better styling control */}
      <Box
        component="img"
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        sx={{
          // ✅ Styles to make the image fit perfectly
          width: "100%",
          height: "320px",
          objectFit: "cover", // This ensures the image covers the area without distortion
        }}
      />
      <Stack
        direction="row"
        spacing={1}
        sx={{ justifyContent: "center", mt: "20px" }}
      >
        <Button
          sx={{
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            padding: "5px 15px",
          }}
        >
          {exercise.bodyParts[0]}
        </Button>
        <Button
          sx={{
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            padding: "5px 15px",
          }}
        >
          {exercise.targetMuscles[0]}
        </Button>
      </Stack>
      <Typography
        sx={{
          padding: "0 20px",
          color: "#000",
          fontWeight: "bold",
          mt: "11px",
          pb: "10px",
          textTransform: "capitalize",
          fontSize: "22px",
          textAlign: "center",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
