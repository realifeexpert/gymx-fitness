import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter((exercise) =>
        [exercise.name, exercise.target, exercise.equipment, exercise.bodyPart]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );

      setExercises(searchedExercises);
      setSearch("");
    }
  };

  return (
    <>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
      </Stack>

      <Box display="flex" justifyContent="center" mb="72px">
        <Box position="relative" width={{ lg: "800px", xs: "350px" }}>
          <TextField
            fullWidth
            sx={{
              input: { height: "56px", padding: "0 20px", fontWeight: "700" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            placeholder="Search Exercises"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button
            className="search-btn"
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "56px",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              backgroundColor: "#FF2625",
              color: "#fff",
              textTransform: "none",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </>
  );
};

export default SearchExercises;
