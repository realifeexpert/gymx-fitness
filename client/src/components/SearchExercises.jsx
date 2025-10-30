import React, { useEffect, useState } from "react";
import allBodyPartsData from "../data/bodyparts.json";
import allExercisesData from "../data/exercises.json";
import allEquipmentsData from "../data/equipments.json";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";
import { Search } from "lucide-react";

const SearchExercises = ({ onSearch, bodyPart, setBodyPart }) => {
  // --- All State and Logic is UNCHANGED ---
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [allSearchTerms, setAllSearchTerms] = useState([]);

  useEffect(() => {
    const bodyPartNames = allBodyPartsData.map((item) => item.name);
    const equipmentNames = allEquipmentsData.map((item) => item.name);
    const exerciseNames = allExercisesData.map((item) => item.name);
    const uniqueTerms = [
      ...new Set([...bodyPartNames, ...equipmentNames, ...exerciseNames]),
    ];
    setAllSearchTerms(uniqueTerms);
    setBodyParts(["all", ...bodyPartNames]);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 1) {
      const filteredSuggestions = allSearchTerms
        .filter((term) => term.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
    document
      .getElementById("exercises")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLocalSearch = () => {
    const isValidSearch = allSearchTerms
      .map((term) => term.toLowerCase())
      .includes(search.toLowerCase());

    if (search && isValidSearch) {
      onSearch(search);
      setSuggestions([]);
      document
        .getElementById("exercises")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert(
        "Please select a valid exercise, body part, or equipment from the suggestions."
      );
    }
  };

  return (
    // ✅ Enhanced section for a vibrant workout search UI
    <section className="flex flex-col items-center mt-12 p-5 text-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 rounded-3xl shadow-2xl border border-gray-800 mx-4">
      {/* ✅ Improved typography and spacing */}
      <h2 className="text-4xl lg:text-6xl font-extrabold mb-10 tracking-tight drop-shadow-lg">
        Find Your Perfect Workout,
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 animate-pulse">
          Right Now
        </span>
      </h2>

      <div className="relative w-full max-w-3xl mb-14">
        {/* ✅ Search icon styling */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Search className="h-7 w-7" />
        </div>
        {/* ✅ Sleek input box */}
        <input
          className="w-full h-16 bg-gray-900/70 text-white placeholder-gray-500 border-none rounded-full py-2 pl-16 pr-44 text-lg shadow-inner shadow-black/20 focus:outline-none focus:ring-4 focus:ring-red-500/70 focus:ring-offset-2 focus:ring-offset-gray-900 backdrop-blur-lg transition-all duration-300"
          value={search}
          onChange={handleInputChange}
          placeholder="Search exercises, muscles, equipment..."
          type="text"
          onKeyPress={(e) => e.key === "Enter" && handleLocalSearch()}
          onClick={(e) => e.target.select()}
        />
        {/* ✅ Interactive gradient search button */}
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 font-bold h-12 px-10 rounded-full text-lg text-white hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg shadow-red-500/30 bor