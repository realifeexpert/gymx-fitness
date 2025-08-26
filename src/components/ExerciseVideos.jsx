import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return null;

  return (
    <Box
      sx={{
        mt: { lg: "160px", xs: "40px" },
        px: { xs: "20px", sm: "30px", md: "50px" },
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        mb={{ xs: "30px", md: "50px" }}
        textAlign="center"
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        gap={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "100%",
              maxWidth: "360px",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <Box mt={2}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  lineHeight: "1.4",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minHeight: "48px",
                }}
              >
                {item.video.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                mt={0.5}
                fontSize={{ xs: "14px", sm: "15px" }}
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
