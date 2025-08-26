import React from "react";
import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import { YouTube, Instagram, Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: "60px", lg: "100px" },
        bgcolor: "#fff3f4",
        py: { xs: "40px", sm: "60px" },
        px: { xs: "20px", sm: "40px" },
        textAlign: "center",
      }}
    >
      <Stack spacing={4} alignItems="center" maxWidth="1200px" mx="auto">
        {/* Logo */}
        <img src={Logo} alt="GymX Logo" width="180px" height="auto" />

        {/* Footer message */}
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ fontSize: { xs: "16px", sm: "20px" } }}
        >
          Made with ❤️ by <strong>JavaScript Mastery</strong>
        </Typography>

        {/* Navigation Links */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 3 }}
          alignItems="center"
        >
          <Link
            href="/"
            underline="hover"
            sx={{ color: "#FF2625", fontWeight: 500 }}
          >
            Home
          </Link>
          <Link
            href="#exercises"
            underline="hover"
            sx={{ color: "#FF2625", fontWeight: 500 }}
          >
            Exercises
          </Link>
          <Link
            href="#contact"
            underline="hover"
            sx={{ color: "#FF2625", fontWeight: 500 }}
          >
            Contact
          </Link>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#FF2625",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <YouTube />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#FF2625",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#FF2625",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <Facebook />
          </IconButton>
        </Stack>

        {/* Footer Notes */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "14px", sm: "15px" } }}
        >
          Explore workout tutorials on YouTube for better results.
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "13px", sm: "14px" } }}
        >
          © {new Date().getFullYear()} GymX. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
