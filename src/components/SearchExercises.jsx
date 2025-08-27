import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";

// A simple Search Icon component for our new input field
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsResponse = await fetchData(
        "https://testings-nine.vercel.app/api/v1/bodyparts"
      );
      if (bodyPartsResponse.success && Array.isArray(bodyPartsResponse.data)) {
        const bodyPartNames = bodyPartsResponse.data.map((item) => item.name);
        setBodyParts(["all", ...bodyPartNames]);
      }
    };
    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const searchUrl = `https://testings-nine.vercel.app/api/v1/exercises/search?q=${search.toLowerCase()}`;
      const exercisesResponse = await fetchData(searchUrl);
      if (exercisesResponse.success && Array.isArray(exercisesResponse.data)) {
        setExercises(exercisesResponse.data);
      }
      setSearch("");
      window.scrollTo({ top: 1800, behavior: "smooth" });
    }
  };

  return (
    // ✅ Main container with modern spacing
    <section className="flex flex-col items-center mt-12 p-5 text-center">
      {/* ✅ More impactful heading with a subtle text gradient */}
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-white">
        Find Your Perfect Workout, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Right Now
        </span>
      </h2>

      {/* ✅ Modern, restyled search bar */}
      <div className="relative w-full max-w-3xl mb-16">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </div>
        <input
          className="w-full h-16 bg-surface text-text-primary placeholder-gray-500 border border-gray-700 rounded-full py-2 pl-14 pr-40 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, muscle, or equipment..."
          type="text"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-background font-bold h-12 px-8 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* ✅ Body part scroller remains, now on our dark theme */}
      <div className="relative w-full">
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </section>
  );
};

export default SearchExercises;
