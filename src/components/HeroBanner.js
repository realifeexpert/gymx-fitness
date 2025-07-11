import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      id="hero-banner"
      sx={{
        mt: 0,
        pt: { xs: "20px", sm: "40px" },
        px: { xs: "20px", md: "40px" },
        minHeight: { xs: "70vh", md: "85vh" }, // ensures banner fills screen
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%" }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text Section */}
          <Box flex={1}>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                color="#FF2625"
                fontWeight={600}
                fontSize={{ xs: "22px", sm: "26px" }}
                mb={1}
              >
                GymX Fitness Club
              </Typography>

              <Typography
                fontWeight={800}
                sx={{
                  fontSize: { lg: "38px", xs: "30px" },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Train Hard <br />
                Stay Consistent
              </Typography>

              <Typography fontSize="18px" color="gray" mb={3}>
                Build the best version of you — now.
              </Typography>

              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  href="#exercises"
                  sx={{
                    backgroundColor: "#FF2625",
                    px: 3,
                    py: 1.5,
                    fontSize: "15px",
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#c92020" },
                  }}
                >
                  Explore Workouts
                </Button>
              </motion.div>
            </motion.div>
          </Box>

          {/* Image Section */}
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            sx={{ mt: { xs: "-20px", md: "0px" } }}
          >
            <motion.img
              src={HeroBannerImage}
              alt="hero banner"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "16px",
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </Box>
        </Stack>
      </motion.div>

      {/* Background Word */}
      <Typography
        color="#FF2625"
        fontWeight={700}
        fontSize="150px"
        sx={{
          opacity: 0.06,
          display: { lg: "block", xs: "none" },
          position: "absolute",
          top: "-10px",
          right: "10px",
          userSelect: "none",
        }}
      >
        GymX
      </Typography>
    </Box>
  );
};

export default HeroBanner;
