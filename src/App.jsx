import React from "react";
import { Route, Routes } from "react-router-dom";

// Import the CSS file which should contain your Tailwind directives
import "./App.css";

// Import your components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetails";
import Footer from "./components/Footer";
import HomeWorkouts from "./pages/HomeWorkouts.jsx";

const App = () => {
  return (
    // Replaced <Box> with a <div> and applied Tailwind classes.
    // `bgcolor="#fffafb"` becomes `bg-[#fffafb]`
    <div className="App bg-[#fffafb]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      {/* Replaced <Container> with a <div> and applied Tailwind classes for max-width, padding, and min-height */}
      {/* - maxWidth="xl" -> `max-w-7xl mx-auto` (Tailwind's equivalent for a large, centered container)
        - sx={{ px: { xs: 2, md: 4 } }} -> `px-4 md:px-8` (Adjusted for Tailwind's spacing scale)
        - sx={{ py: { xs: 2, md: 3 } }} -> `py-4 md:py-6` (Adjusted for Tailwind's spacing scale)
        - sx={{ minHeight: "100vh" }} -> `min-h-screen`
      */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/home-workouts" element={<HomeWorkouts />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
