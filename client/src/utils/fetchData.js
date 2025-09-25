// This file should contain the options for the YouTube API

export const youtubeOptions = {
  method: "GET",
  headers: {
    // ✅ Use Vite's 'import.meta.env' instead of 'process.env'
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

// This is our reusable function for all API calls
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return { error: "Failed to fetch data" };
  }
};
