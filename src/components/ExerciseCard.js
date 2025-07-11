import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="exercise-card"
      style={{
        textDecoration: "none",
        background: "#fff",
        borderRadius: "16px",
        padding: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        width: "100%",
        maxWidth: "320px",
        display: "block",
        transition: "transform 0.25s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* 🔹 Exercise GIF */}
      <Box
        component="img"
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        sx={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      {/* 🔹 Tags */}
      <Stack direction="row" spacing={2} mt={2} px={1} flexWrap="wrap">
        <Button
          sx={{
            background: "#ffa9a9",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            px: 2,
            py: 0.5,
            minWidth: "fit-content",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            background: "#fcc757",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            px: 2,
            py: 0.5,
            minWidth: "fit-content",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      {/* 🔹 Exercise Name */}
      <Box mt={2} px={1}>
        <Typography
          color="#000"
          fontWeight={600}
          textTransform="capitalize"
          fontSize="18px"
          lineHeight="1.3"
          sx={{
            wordWrap: "break-word",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            minHeight: "52px",
          }}
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
