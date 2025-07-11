import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const isSelected = bodyPart === item;

  return (
    <Stack
      component="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: isSelected ? "4px solid #FF2625" : "none",
        backgroundColor: "#fff",
        borderRadius: "20px",
        width: "280px", // ✅ Fixed size like YouTube thumbnails
        height: "280px", // ✅ Same across devices
        cursor: "pointer",
        gap: "20px",
        outline: "none",
        border: "none",
        transition: "all 0.3s ease",
        boxShadow: isSelected ? "0px 4px 20px rgba(255, 38, 37, 0.3)" : "none",

        "&:hover": {
          transform: "scale(1.04)",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
        },

        "@media (max-width: 480px)": {
          width: "240px",
          height: "240px",
        },
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt={`${item} icon`}
        style={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
        }}
      />
      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
        textAlign="center"
        px="10px"
        sx={{
          overflowWrap: "break-word",
          maxWidth: "90%",
          lineHeight: 1.2,
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
