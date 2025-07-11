import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search.trim()) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=10000",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
      );

      setSearch("");
      setExercises(searchedExercises);
      window.scrollTo({ top: 1600, behavior: "smooth" });
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        mt: isMobile ? "40px" : isTablet ? "50px" : "60px",
        px: isMobile ? "16px" : isTablet ? "24px" : "32px",
        width: "100%",
      }}
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        sx={{
          fontSize: isMobile ? "24px" : isTablet ? "32px" : "42px",
          mb: isMobile ? "28px" : isTablet ? "34px" : "40px",
          lineHeight: 1.3,
        }}
      >
        Find Your Perfect Workout
        <br />
        <span style={{ color: "#FF2625" }}>Right Now</span>
      </Typography>

      <Box
        position="relative"
        width="100%"
        maxWidth="900px"
        mb={isMobile ? "40px" : "60px"}
        px={isMobile ? 0 : 1}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, body part, equipment..."
          type="text"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          fullWidth
          sx={{
            input: {
              fontWeight: 600,
              padding: isMobile
                ? "12px 14px"
                : isTablet
                ? "14px 18px"
                : "16px 20px",
              fontSize: isMobile ? "14px" : isTablet ? "15px" : "16px",
              backgroundColor: "#fff",
              borderRadius: "50px",
            },
            borderRadius: "50px",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.06)",
            "& fieldset": {
              borderColor: "#ddd",
            },
            "&:hover fieldset": {
              borderColor: "#aaa",
            },
          }}
        />

        <Button
          onClick={handleSearch}
          sx={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            height: "44px",
            px: isMobile ? 2 : isTablet ? 3 : 4,
            fontSize: isMobile ? "13px" : isTablet ? "14px" : "16px",
            backgroundColor: "#FF2625",
            color: "#fff",
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "0px 2px 10px rgba(255, 38, 37, 0.3)",
            "&:hover": {
              backgroundColor: "#d21f1f",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Box width="100%" maxWidth="100%" px="10px">
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
