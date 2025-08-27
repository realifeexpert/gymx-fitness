import React from "react";

const Loader = ({ fullScreen = true }) => {
  // We define the conditional styles based on the fullScreen prop
  const containerClasses = fullScreen
    ? "h-screen bg-white"
    : "h-[300px] bg-transparent";

  return (
    // Replaced <Stack> with a div and applied Tailwind classes
    <div
      className={`
        w-full flex items-center justify-center 
        transition-all duration-300 ease-in-out
        ${containerClasses} 
      `}
    >
      <img
        src="https://www.svgrepo.com/show/303626/loader.svg"
        alt="Loading animation"
        aria-label="Loading..."
        // ✅ Replaced the inline style with responsive Tailwind classes
        className="w-24 h-24 sm:w-40 sm:h-40"
      />
    </div>
  );
};

export default Loader;
