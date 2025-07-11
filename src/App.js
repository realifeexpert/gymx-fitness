import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box className="App" bgcolor="#fffafb">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 3 },
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Container>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default App;
