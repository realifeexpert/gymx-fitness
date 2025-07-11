import React from "react";
import { Link } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 1.5, sm: 2 },
        backgroundColor: "#fff",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
        position: "fixed", // ✨ makes navbar sticky without jumpiness
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="GymX Logo"
          style={{
            width: isMobile ? "36px" : "48px",
            height: isMobile ? "36px" : "48px",
          }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        gap={isMobile ? "18px" : "36px"}
        alignItems="center"
        sx={{
          fontSize: isMobile ? "16px" : "20px",
          fontFamily: "Alegreya",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
            paddingBottom: "4px",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            paddingBottom: "4px",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
