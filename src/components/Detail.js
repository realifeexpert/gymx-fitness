import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack
      gap={{ xs: "30px", md: "50px" }}
      direction={{ xs: "column", md: "row" }}
      p={{ xs: "20px", sm: "30px" }}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        boxSizing: "border-box",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      />

      <Stack
        gap={{ xs: "20px", md: "30px" }}
        maxWidth="600px"
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textTransform="capitalize"
          fontSize={{ xs: "26px", sm: "30px", md: "36px" }}
        >
          {name}
        </Typography>

        <Typography
          variant="body1"
          fontSize={{ xs: "16px", sm: "18px" }}
          color="text.secondary"
          lineHeight={1.6}
        >
          Exercises keep you strong. <strong>{name}</strong> is one of the best
          exercises to target your <strong>{target}</strong>. It will help you
          improve your mood and gain energy.
        </Typography>

        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="20px"
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                minWidth: "80px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography
              variant="h6"
              fontSize={{ xs: "16px", sm: "18px" }}
              textTransform="capitalize"
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
