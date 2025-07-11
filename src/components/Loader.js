import React from "react";
import { Stack, useMediaQuery } from "@mui/material";

const Loader = ({ fullScreen = true }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height={fullScreen ? "100vh" : "300px"}
      sx={{
        backgroundColor: fullScreen ? "#fff" : "transparent",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <img
        src="https://www.svgrepo.com/show/303626/loader.svg"
        alt="Loading animation"
        aria-label="Loading..."
        style={{
          width: isMobile ? "100px" : "160px",
          height: isMobile ? "100px" : "160px",
        }}
      />
    </Stack>
  );
};

export default Loader;
